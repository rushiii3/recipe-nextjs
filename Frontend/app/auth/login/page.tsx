"use client"
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
const LoginSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .min(6, "Password should be at least 6 characters long")
      .max(20, "Password should be no more than 20 characters long"),
  })

type LoginSchemaType = z.infer<typeof LoginSchema>;
const loginUser = async (data: LoginSchemaType) => {
  const { data: response } = await axios.post(
    "http://localhost:4000/api/v1/user/login",
    data,
    {
      withCredentials: true
    }
  );
  return response;
};

const Page = () => {
  const router = useRouter();
  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
  const toggleVisibilitypassword = () =>
    setIsVisiblePassword(!isVisiblePassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
  });
  const mutation = useMutation({
    mutationFn: loginUser,
    onMutate: () => {
      // Display loading toast
      const toastId = toast.loading('Loading...');
      return { toastId }; // Return the toast ID to access it later
    },
    onSuccess: async (data, variables, context) => {
      // Handle a successful response
      console.log(data);
      if (data.status) {
        router.push("/recipes");
        toast.success('Login successful!', { id: context.toastId });
      }

    },
    onError: (error, variables, context) => {
      // Update the toast to show error
      toast.error(`Sign up failed: ${error.message}`, { id: context?.toastId });
    },
  });


  const onSubmit = async (data: LoginSchemaType) => {
    mutation.mutate(data);
  };
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link href={"/"}>
            <Image
              src={'/images/logo.svg'}
              height={200}
              width={200}
              alt="logo"
              className="h-10"
            />
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-primary">FindDelish</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <form className="flex flex-col items-stretch w-full pt-3 md:pt-8 gap-5"onSubmit={handleSubmit(onSubmit)}>
          <Input
              type="email"
              variant={"bordered"}
              label="Email or username"
              required
              radius="sm"
              labelPlacement="outside"
              placeholder="Your email or username"
              isClearable
              {...register("email")}
              isInvalid={errors.email?.message ? true : false}
              errorMessage={errors.email?.message}
            />
              <Input
                type={isVisiblePassword ? "text" : "password"}
                variant={"bordered"}
                label="Password"
                required
                radius="sm"
                labelPlacement="outside"
                placeholder="Your passowrd"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibilitypassword}
                    aria-label="toggle password visibility"
                  >
                    {isVisiblePassword ? (
                      <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                {...register("password")}
                isInvalid={errors.password?.message ? true : false}
                errorMessage={errors.password?.message}
              />
            <a
              href="#"
              className=" text-center ms-auto text-sm font-medium text-gray-600 md:text-left"
            >
              Forgot password?
            </a>
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign in
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="text-gray-600">
              Dont have an account?{" "}
              <Link
                href={"/auth/register"}
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none md:block md:w-1/2">
        <Image
          src={"/images/login.webp"}
          height={300}
          width={200}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
