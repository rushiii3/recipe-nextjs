"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@nextui-org/react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username should only contain letters, numbers, and underscores"
      ),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .min(6, "Password should be at least 6 characters long")
      .max(20, "Password should be no more than 20 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password should be at least 6 characters long")
      .max(20, "Password should be no more than 20 characters long"),
    fullname: z
      .string()
      .min(1, "Full name is required")
      .regex(
        /^[a-zA-Z\s]+$/,
        "Full name should only contain letters and spaces"
      ), // Restrict to letters and spaces
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
const signUpUser = async (data: SignUpSchemaType) => {
  const { data: response } = await axios.post(
    "http://localhost:4000/api/v1/user/register",
    data
  );
  return response;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
  });

  const mutation = useMutation({
    mutationFn: signUpUser,
    onMutate: () => {
      // Display loading toast
      const toastId = toast.loading('Loading...');
      return { toastId }; // Return the toast ID to access it later
    },
    onSuccess: async (data, variables, context) => {
      // Handle a successful response
      console.log(data);
      toast.success('Sign up successful!', { id: context.toastId });
    },
    onError: (error:AxiosError, variables, context) => {
      // Update the toast to show error
      const errorMessage = (error?.response?.data as { message: string })?.message;
      toast.error(errorMessage, { id: context?.toastId });
    },
  });


  const onSubmit = async (data: SignUpSchemaType) => {
    mutation.mutate(data);
  };

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    React.useState(false);

  const toggleVisibilitypassword = () =>
    setIsVisiblePassword(!isVisiblePassword);
  const toggleVisibilityconfirmpassword = () =>
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

  return (
    <>
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="relative hidden h-screen select-none  md:flex md:w-1/2">
          <Image
            src={"/images/register.webp"}
            height={300}
            width={200}
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-10 md:justify-start md:pl-12">
            <Link href={"/"}>
              <Image
                src={"/images/logo.svg"}
                height={200}
                width={200}
                alt="logo"
                className="h-10"
              />
            </Link>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-2 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
              Create your free account
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using FindDelish?{" "}
              <Link
                href="/auth/login"
                className="whitespace-nowrap font-semibold text-primary"
              >
                Login here
              </Link>
            </p>
            <form
              className="flex flex-col   py-5 md:pt-5 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="text"
                variant={"bordered"}
                label="Username"
                required
                radius="sm"
                labelPlacement="outside"
                placeholder="Your username"
                isClearable
                {...register("username")}
                isInvalid={errors.username?.message ? true : false}
                errorMessage={errors.username?.message}
              />

              <Input
                type="email"
                variant={"bordered"}
                label="Email"
                required
                // name="email"
                radius="sm"
                labelPlacement="outside"
                placeholder="Your email"
                isClearable
                {...register("email")}
                isInvalid={errors.email?.message ? true : false}
                errorMessage={errors.email?.message}
              />
              <Input
                type="text"
                variant={"bordered"}
                label="Full Name"
                required
                radius="sm"
                labelPlacement="outside"
                placeholder="Your fullname"
                isClearable
                {...register("fullname")}
                isInvalid={errors.fullname?.message ? true : false}
                errorMessage={errors.fullname?.message}
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
              <Input
                type={isVisibleConfirmPassword ? "text" : "password"}
                variant={"bordered"}
                label="Confirm Password"
                required
                radius="sm"
                labelPlacement="outside"
                placeholder="Your confirm passowrd"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibilityconfirmpassword}
                    aria-label="toggle password visibility"
                  >
                    {isVisibleConfirmPassword ? (
                      <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                {...register("confirmPassword")}
                isInvalid={errors.confirmPassword?.message ? true : false}
                errorMessage={errors.confirmPassword?.message}
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-6 rounded-lg bg-primary px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
