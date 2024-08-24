const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const ThrowError = require("../utlis/ThrowError");
const User = require("../models/UserModel");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const sendMail = require("../utlis/sendMail");
const register = asyncHandler(async (req, res, next) => {
  try {
    const { username, email, password, fullname } = req.body;
    if (!username) {
      ThrowError("Username required", 400);
    }
    if (!email) {
      ThrowError("Email is required", 400);
    }
    if (!password) {
      ThrowError("Password is required", 400);
    }
    if (!fullname) {
      ThrowError("Fullname is required", 400);
    }
    const isUsernameExist = await User.findOne({ username: username });
    const isUsermailExist = await User.findOne({ email: email });
    if (isUsernameExist) {
      ThrowError("Username already exits! Try different username", 400);
    }
    if (isUsermailExist) {
      ThrowError("Email already exits!", 400);
    }
    const hashpassword = await bcrypt.hashSync(password, salt);
    const user = {
      username,
      email,
      hashpassword,
      fullname,
    };
    const token = await jwt.sign(user, `${process.env.jwt_token}`, {
      expiresIn: "10m",
    });
    await sendMail(email, fullname, token);
    console.log(token);
    res.status(200).json({
      message: `Verification link is sent to your mail`,
      status: true,
    });
  } catch (error) {
    next(error);
  }
});
const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    const { token } = req.params;
    if (!token) {
      ThrowError("Activitation Token is missing", 400);
    }
    const userData = jwt.verify(token, process.env.jwt_token);
    if (!userData) {
      ThrowError("Invalid Activation Token", 400);
    }
    console.log(userData);
    const alreadyUser = await User.findOne({ email: userData.email });
    if (alreadyUser) {
        ThrowError("User already exits", 400);
    }
    const user = new User({
      username: userData.username,
      fullname: userData.fullname,
      email: userData.email,
      password: userData.hashpassword,
    });
    const saveUser = await user.save();
    if (!saveUser) {
      ThrowError("Failed to save user", 400);
    }
    res.status(200).json({
      message: `Account verifed successfully!`,
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    if (error.name === "TokenExpiredError") {
      ThrowError("Activation token has expired", 400);
    }
    ThrowError("Invalid Activation Token", 400);
  }
});
const login  = asyncHandler(async(req,res,next) => {
  try {
    const {email, password} = req.body; 

    if (!email) {
      ThrowError("Username or email is required", 400);
    }
    if (!password) {
      ThrowError("Password is required", 400);
    }
    const user = await User.findOne({email:email});
    if (!user) {
      ThrowError("Invalid email", 400);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      ThrowError("Invalid Password", 400);
    }
    const token = jwt.sign(
      JSON.stringify(user),
      process.env.jwt_token
    );
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
    res.status(201).cookie("token", token, options).json({
      message: `Login successfully!`,
      status: true,
    });
    console.log(user);
  } catch (error) {
    next(error);
  }
})
module.exports = {
  register,
  verifyToken,
  login
};
