import { Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};
const Page = () => {
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

          <form className="flex flex-col items-stretch w-full pt-3 md:pt-8 gap-5">
          <Input
              type="email"
              variant={"bordered"}
              label="Email or username"
              required
              name="email"
              radius="sm"
              labelPlacement="outside"
              placeholder="Your email"
              isClearable
            />
            <Input
              type="text"
              variant={"bordered"}
              label="Password"
              required
              name="fullname"
              radius="sm"
              labelPlacement="outside"
              placeholder="Your fullname"
              isClearable
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
