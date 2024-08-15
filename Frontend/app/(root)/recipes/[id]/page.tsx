"use client";
import Ingredients from "@/components/Ingredients";
import Image from "next/image";
import React, { useRef } from "react";
import {
  IoShareOutline,
  IoBookmarkOutline,
  IoPrintOutline,
} from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import "./print.css";
import Comments from "@/components/Comments";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  FaFacebook,
  FaTumblr,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
TimeAgo.addDefaultLocale(en);
const data = {
  title: "Classic Spaghetti Carbonara",
  description: "A quick and easy recipe for the classic Italian pasta dish.",
  prepTime: "15 min",
  cookTime: "20 min",
  servings: "4 people",
  ingredients: [
    {
      sectionName: "Main Ingredients",
      items: [
        {
          name: "Spaghetti",
          quantity: "200g",
        },
        {
          name: "Pancetta",
          quantity: "100g",
        },
        {
          name: "Parmesan Cheese",
          quantity: "50g",
        },
        {
          name: "Eggs",
          quantity: "2 large",
        },
        {
          name: "Garlic",
          quantity: "2 cloves",
        },
        {
          name: "Olive Oil",
          quantity: "2 tbsp",
        },
        {
          name: "Black Pepper",
          quantity: "to taste",
        },
      ],
    },
  ],
  steps: [
    {
      stepNumber: 1,
      instruction: "Cook the spaghetti in salted boiling water until al dente.",
    },
    {
      stepNumber: 2,
      instruction:
        "In a pan, sauté pancetta with olive oil until crispy. Add minced garlic and cook for a minute.",
    },
    {
      stepNumber: 3,
      instruction:
        "In a bowl, beat the eggs and mix in grated Parmesan cheese.",
    },
    {
      stepNumber: 4,
      instruction:
        "Drain the spaghetti and add it to the pan with pancetta. Remove the pan from heat.",
    },
    {
      stepNumber: 5,
      instruction:
        "Quickly stir in the egg and cheese mixture, tossing until the spaghetti is well coated. Add black pepper to taste.",
    },
  ],
  nutritionFacts: [
    {
      name: "Calories",
      quantity: "450 kcal",
    },
    {
      name: "Total Fat",
      quantity: "20 g",
    },
    {
      name: "Saturated Fat",
      quantity: "5 g",
    },
    {
      name: "Cholesterol",
      quantity: "150 mg",
    },
    {
      name: "Sodium",
      quantity: "800 mg",
    },
    {
      name: "Potassium",
      quantity: "250 mg",
    },
    {
      name: "Total Carbohydrate",
      quantity: "50 g",
    },
    {
      name: "Sugars",
      quantity: "2 g",
    },
    {
      name: "Protein",
      quantity: "18 g",
    },
  ],
  ratings: [
    {
      userId: "64d5e9f2a8c7f914b041cd10",
      rating: 5,
      ratedAt: "2024-08-11T12:00:00Z",
    },
    {
      userId: "64d5ea02a8c7f914b041cd12",
      rating: 4,
      ratedAt: "2024-08-10T15:30:00Z",
    },
  ],
  comments: [
    {
      userId: "user2Id",
      content: "This recipe is amazing!",
      commentedAt: "2023-08-02T10:00:00Z",
      replies: [
        {
          userId: "user3Id",
          content: "I tried it too, and it was fantastic.",
          commentedAt: "2023-08-02T11:00:00Z",
          replies: [
            {
              userId: "user4Id",
              content: "Thanks for the recommendation! Will try it tonight.",
              commentedAt: "2023-08-02T12:00:00Z",
              replies: [
                {
                  userId: "user4Id",
                  content:
                    "Thanks for the recommendation! Will try it tonight.",
                  commentedAt: "2024-08-12T12:00:00Z",
                  replies: [
                    {
                      userId: "user4Id",
                      content:
                        "Thanks for the recommendation! Will try it tonight.",
                      commentedAt: "2023-08-02T12:00:00Z",
                      replies: [
                        {
                          userId: "user4Id",
                          content:
                            "Thanks for the recommendation! Will try it tonight.",
                          commentedAt: "2023-08-02T12:00:00Z",
                          replies: [
                            {
                              userId: "user4Id",
                              content:
                                "Thanks for the recommendation! Will try it tonight.",
                              commentedAt: "2023-08-02T12:00:00Z",
                              replies: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      userId: "user5Id",
      content: "I added some garlic, and it turned out great.",
      commentedAt: "2023-08-03T14:00:00Z",
      replies: [],
    },
  ],
  authorId: "64d5edf2a8c7f914b041cd40",
  createdAt: "2024-08-07T08:00:00Z",
  updatedAt: "2024-08-09T12:00:00Z",
  tags: ["Italian", "Pasta", "Quick Meal"],
  imageURL:
    "https://tarasmulticulturaltable.com/wp-content/uploads/2022/07/Classic-Spaghetti-Carbonara-4-of-4.jpg",
};
const ListItem = ({ count, text }: { count: number; text: string }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base text-large">
      <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};

const Page = () => {
  const componentRef = useRef<HTMLElement>(null);
  const timeAgo = new TimeAgo("en-US");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
  });
  const url = "a";
  const text = "b";
  const sharings = [
    {
      sitename: "Facebook",
      icon: <FaFacebook size={25} />,
      url: `https://facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      sitename: "Twitter",
      icon: <FaTwitter size={25} />,
      url: `https://twitter.com/intent/tweet?url=a${url}&amp;text=${text}`,
    },
    {
      sitename: "Linkedin",
      icon: <FaFacebook size={25} />,
      url: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${text}&amp;summary=${text}&amp;source=${url}`,
    },
    {
      sitename: "Reddit",
      icon: <FaReddit size={25} />,
      url: `https://reddit.com/submit/?url=${url}&amp;resubmit=true&amp;title=${text}`,
    },
    {
      sitename: "Whatsapp",
      icon: <FaWhatsapp size={25} />,
      url: `https://wa.me/?text=${text}%20${url}`,
    },
    {
      sitename: "Telegram",
      icon: <FaTelegram size={25} />,
      url: `https://telegram.me/share/url?text=${text}&amp;url=a${url}`,
    },
    {
      sitename: "Email",
      icon: <IoMail size={25} />,
      url: `mailto:?subject=${text}&amp;body=${url}`,
    },
  ];
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex flex-col px-4 mx-auto max-w-screen-2xl ">
        <article
          ref={componentRef || null}
          className="mt-5 mx-auto w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <header className="mb-4 lg:mb-6 not-format">
            <div className="flex justify-end items-center gap-5">
              <Dropdown>
                <DropdownTrigger>
                  <button>
                    <IoShareOutline className="size-7" />
                  </button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="faded"
                  aria-label="Dropdown menu with icons"
                >
                  {sharings.map((sharing) => (
                    <DropdownItem
                      key={sharing.sitename}
                      endContent={sharing.icon}
                    >
                      {sharing.sitename}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <button>
                <IoBookmarkOutline className="size-7" />
              </button>
            </div>

            <h1 className="text-black font-manrope font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              {data.title}
            </h1>

            <div className="flex flex-wrap gap-7 mb-5 items-center">
              <div className="flex items-center gap-x-3">
                <Image
                  width={20}
                  height={20}
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    Lauren Waller
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    {timeAgo.format(new Date(data.createdAt))}
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    {data.comments.length}
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <FaStar className="size-6 text-yellow-500" />
                <FaStar className="size-6 text-yellow-500" />
                <FaStar className="size-6 text-yellow-500" />
                <FaStar className="size-6 text-yellow-500" />
              </div>
            </div>
          </header>
          <hr />
          <p className="my-5 md:text-lg text-md">{data.description}</p>
          <figure className="mb-8">
            <Image
              height={200}
              width={200}
              src={data.imageURL}
              alt=""
              className="rounded-2xl w-full mt-6"
            />
          </figure>
          <div className="flex justify-center divide-x divide-gray-300">
            <div className="md:pr-8 pr-4">
              <p className="font-light text-xs">PREP TIME</p>
              <p>15 min</p>
            </div>
            <div className="md:px-8 px-4">
              <p className="font-light text-xs">COOK TIME</p>
              <p>15 min</p>
            </div>
            <div className="md:px-8 px-4">
              <p className="font-light text-xs">SERVINGS</p>
              <p>4 PEOPLE</p>
            </div>
            <div className="md:px-8 px-4 flex">
              <button className="hover:text-primary" onClick={handlePrint}>
                <IoPrintOutline size={30} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
            <div>
              <h6 className="text-2xl font-semibold text-textPrimary mb-4">
                Ingredients
              </h6>
              {data.ingredients.map((ingredient, index) => (
                <Ingredients
                  key={index}
                  sectionName={ingredient.sectionName}
                  items={ingredient.items}
                />
              ))}
              <div className="bg-[#f9f9f9] max-w-full md:max-w-sm p-5 rounded-lg py-6">
                <h6 className="text-2xl font-semibold text-textPrimary mb-4">
                  Nutrition Facts
                </h6>
                <ul>
                  {data.nutritionFacts.map((nutrition, index) => (
                    <li
                      className={`text-body-color dark:text-dark-6 flex text-base items-center justify-between p-3 ${
                        index > 0 && "border-t-1 border-l-zinc-300"
                      }`}
                      key={index}
                    >
                      <span>{nutrition.name}</span>
                      <span>{nutrition.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h6 className="text-2xl font-semibold text-textPrimary mb-4">
                Instructions
              </h6>

              <div className="w-full">
                <ol className="space-y-6">
                  {data.steps.map((step, index) => (
                    <ListItem
                      key={index}
                      count={step.stepNumber}
                      text={step.instruction}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="my-16">
            <h2 className="md:text-5xl text-2xl font-semibold text-textPrimary mb-4">
              Already made this?
            </h2>
            <button className="border-1 border-black rounded-md w-lg px-10 py-3 hover:bg-black hover:text-white transition-all delay-100 font-bold md:text-lg text-sm">
              Share your feedback
            </button>
            <hr className="my-10 h-3 bg-primary" />
          </div>
          <div className="my-16">
            <h2 className="md:text-5xl text-2xl font-semibold text-textPrimary mb-4">
              Comments
            </h2>
            <hr className="my-10" />
            <div>
              <div className=" mx-auto px-4">
                <div className="w-full overflow-x-scroll">
                  {data.comments.map((comment, index) => (
                    <Comments key={index} comment={comment} />
                  ))}
                </div>

                <button className="border-1 border-black rounded-lg w-full px-10 py-3 hover:bg-black hover:text-white transition-all delay-100 font-medium md:text-lg text-sm">
                  Load 25 more comments
                </button>
                <form className="my-6">
                  <h2 className="md:text-3xl text-2xl font-semibold text-textPrimary mb-4">
                    Write a comment
                  </h2>
                  <div className="py-2 px-4 mb-4 bg-gray-200 rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="px-0 w-full bg-gray-200 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Post comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
