import Categories from "@/components/Categories";
import SignUpNewsletter from "@/components/SignUpNewsletter";
import TrendingRecipe from "@/components/TrendingRecipe";
import Link from "next/link";
import React from "react";
const Page = () => {
  return (
    <>
      <div
        className="relative mx-auto px-4 pt-40  md:px-8 lg:py-60 xl:px-20"
        style={{
          backgroundImage: 'url("/images/home_recipes.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="mx-auto max-w-xl lg:max-w-screen-xl">
          <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
            <div className="mb-6 max-w-xl">
              {/* <div>
            <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900">This is Flippy</p>
          </div> */}
              <h2 className="mb-6 max-w-lg font-sans  font-bold tracking-tight text-textPrimary text-5xl sm:leading-snug dark:text-white">
                Your Daily Dish <br />A{" "}
                <span className="inline-block text-primary">Food</span> Journey
              </h2>
              <p className="text-base text-gray-700 md:text-lg dark:text-gray-400">
                Embark on a Culinary Adventure: Discover, Create, and Savor
                Mouthwatering Recipes from Around the Globe
              </p>
            </div>
            <div className="flex flex-row items-center justify-center  sm:flex-row sm:space-y-0 space-x-2 lg:justify-start pb-10">
              <Link
                href="/auth/register"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-10 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"
              >
                {" "}
                Register{" "}
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-primary px-10 font-semibold text-primary transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className="dark:lg:bg-darker  rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src="https://www.adobe.com/acrobat/hub/media_19a6f2bc4648fd77abab7ce9f3b3f3ae2afa9c35b.jpeg?width=1200&format=pjpg&optimize=medium"
                alt="image"
                loading="lazy"
                width=""
                height=""
                className="rounded-3xl shadow-md"
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Share Your Recipes
              </h2>
              <p className="my-8 text-gray-600 dark:text-gray-300">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>

              <Link
                href={'auth/register'}
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                  Register now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrendingRecipe />
      <SignUpNewsletter />
      <Categories />
    </>
  );
};

export default Page;
