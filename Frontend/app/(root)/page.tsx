import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const popularCategories = [
    {
      name: "Appetizers",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/12/appetizers.jpg",
    },
    {
      name: "Breakfast",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505",
    },
    {
      name: "Lunch",
      image: "https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg",
    },
    {
      name: "Dinner",
      image: "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
      name: "Desserts",
      image: "https://hips.hearstapps.com/hmg-prod/images/milk-n-cookies-icebox-cake-vertical3-6658c4fc232ec.jpg?crop=0.835xw:1.00xh;0.165xw,0&resize=980:*",
    },
    {
      name: "Beverages",
      image: "https://www.indiabusinesstrade.in/wp-content/uploads/2024/03/beverage-2.jpg",
    },
    {
      name: "Salads",
      image: "https://runningonrealfood.com/wp-content/uploads/2018/01/gluten-free-vegan-everyday-healthy-rainbow-salad-Running-on-Real-Food-6-of-10.jpg",
    },
    {
      name: "Soups",
      image: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg",
    },
  ];
  
  return (
    <>
      <div
        className="relative mx-auto px-4 pt-28 sm:max-w-xl md:max-w-full md:px-8 lg:py-60 xl:px-20"
        style={{
          backgroundImage: 'url("/images/home_recipes1.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: '100%',
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

              <a
                href="https://tailus.io/contact"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                  Browse now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* sm:px-6 lg:px-8 px-4*/}

      <section className="py-12">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Trending Recipe
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Announcing a free plan for small teams
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  At Wake, our mission has always been focused on bringing
                  openness.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Lauren Waller
                  </h5>
                </div>
              </div>
            </a>

            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  How Google Assistant now helps you record stories for kids
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Google is constantly updating its consumer AI, Google
                  Assistant, with new features.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Aaron Larsson
                  </h5>
                </div>
              </div>
            </a>

            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Front accounts - lets work together
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Are you an accountant? Are you a company formation advisor?
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Lauren Waller
                  </h5>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Explore Recipe
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Announcing a free plan for small teams
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  At Wake, our mission has always been focused on bringing
                  openness.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Lauren Waller
                  </h5>
                </div>
              </div>
            </a>

            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  How Google Assistant now helps you record stories for kids
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Google is constantly updating its consumer AI, Google
                  Assistant, with new features.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Aaron Larsson
                  </h5>
                </div>
              </div>
            </a>

            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Front accounts - lets work together
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Are you an accountant? Are you a company formation advisor?
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Lauren Waller
                  </h5>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-cardBackground dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary border-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Popular Categories
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           
           {
            popularCategories.map((category, key) => (
              <a
              key={key}
              className="group flex flex-col justify-center items-center space-y-3 h-full  dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <img
                className="lg:size-60 size-40 object-cover rounded-full"
                src={category.image}
                alt="Blog Image"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {category.name}
              </h3>
            </a>
            ))
           }
          </div>

          <div className="mt-12 text-center">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>


      <footer className="w-full bg-gray-100 dark:bg-gray-900 py-16">
  <div className="md:px-12 lg:px-28">
    <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
      <img src="images/logo.svg" alt="logo tailus" className="m-auto w-40" />
      <ul
        role="list"
        className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
      >
        <li role="listitem"><a href="#" className="hover:text-primary">Home</a></li>
        <li role="listitem"><a href="#" className="hover:text-primary">Features</a></li>
        <li role="listitem"><a href="#" className="hover:text-primary">Get started</a></li>
        <li role="listitem"><a href="#" className="hover:text-primary">About us</a></li>
      </ul>
      <div className="m-auto flex w-max items-center justify-between space-x-4">
        <a href="tel:+243996660436" aria-label="call">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            ></path>
          </svg>
        </a>
        <a href="mailto:hello@mail.com" aria-label="send mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            ></path>
          </svg>
        </a>
        <a href="#" title="facebook" target="blank" aria-label="facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            ></path>
          </svg>
        </a>
        <a href="#" title="linkedin" target="blank" aria-label="linkedin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            ></path>
          </svg>
        </a>
      </div>

      <div className="text-center">
        <span className="text-sm tracking-wide"
          >Copyright © tailus <span id="year"></span> | All right reserved</span
        >
      </div>
    </div>
  </div>
</footer>
                                    
    </>
  );
};

export default Page;
