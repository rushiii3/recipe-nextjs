import Ingredients from "@/components/Ingredients";
import React from "react";
import { IoShareOutline, IoBookmarkOutline } from "react-icons/io5";
import { Chip } from "@nextui-org/react";
const data = {
  ingredients: [
    {
      sectionName: "Crust",
      items: [
        {
          name: "Graham crackers",
          quantity: "400g",
        },
        {
          name: "Unsalted butter",
          quantity: "150g, melted",
        },
      ],
    },
    {
      sectionName: "Cheesecake",
      items: [
        {
          name: "Marshmallows",
          quantity: "300g",
        },
        {
          name: "Unsalted butter",
          quantity: "175g, melted",
        },
        {
          name: "Philadelphia cream cheese",
          quantity: "500g, softened",
        },
        {
          name: "Thickened/whipping cream",
          quantity: "250ml, warm",
        },
        {
          name: "Powdered gelatin",
          quantity: "3 tbsp",
        },
        {
          name: "Water",
          quantity: "3 tbsp",
        },
        {
          name: "Purple food gel",
          quantity: "5 drops",
        },
        {
          name: "Blue food gel",
          quantity: "3 drops",
        },
      ],
    },
  ],
};
const steps = {
  steps: [
    {
      stepNumber: 1,
      instruction:
        "Add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
    },
    {
      stepNumber: 2,
      instruction:
        "Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.",
    },
    {
      stepNumber: 3,
      instruction:
        "Add the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.",
    },
    {
      stepNumber: 4,
      instruction:
        "Add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.",
    },
    {
      stepNumber: 5,
      instruction:
        "Add the cream cheese to the marshmallow mixture and use a hand mixer or stand mixer fitted with a paddle attachment to mix until smooth.",
    },
    {
      stepNumber: 6,
      instruction:
        "Add the warm cream and melted gelatin mixture and mix until well combined.",
    },
    {
      stepNumber: 7,
      instruction:
        "Add 1/3 of the mixture to a mixing bowl, add purple food gel and mix until well combined. Colour 1/3 of the mixture blue. Split the remaining mixture into two mixing bowls, colour one pink and leave the other white.",
    },
    {
      stepNumber: 8,
      instruction:
        "Pour half the purple cheesecake mixture into the chill tart crust. Add half the blue and then add the remaining purple and blue in the tart tin. Use a spoon to drizzle some pink cheesecake on top. Use a skewer or the end of a spoon to swirl the pink. Add some small dots of the plain cheesecake mixture to create stars and then sprinkle some more stars on top before chilling for 2 hours.",
    },
    {
      stepNumber: 9,
      instruction: "Slice with a knife to serve.",
    },
  ],
};
const facts = {
  nutritionFacts: [
    {
      name: "Calories",
      quantity: "219.9",
    },
    {
      name: "Total Fat",
      quantity: "10.7 g",
    },
    {
      name: "Saturated Fat",
      quantity: "2.2 g",
    },
    {
      name: "Cholesterol",
      quantity: "37.4 mg",
    },
    {
      name: "Sodium",
      quantity: "120.3 mg",
    },
    {
      name: "Potassium",
      quantity: "32.8 mg",
    },
    {
      name: "Total Carbohydrate",
      quantity: "22.3 g",
    },
    {
      name: "Sugars",
      quantity: "8.4 g",
    },
    {
      name: "Protein",
      quantity: "7.9 g",
    },
  ],
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
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex flex-col px-4 mx-auto max-w-screen-2xl ">
        <article className="mx-auto w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <div className="flex justify-end items-center gap-5">
              <IoShareOutline className="size-7" />
              <IoBookmarkOutline className="size-7" />
            </div>

            <h1 className="text-black font-manrope font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Strawberry Cream Cheesecake
            </h1>

            <div className="flex flex-wrap gap-7 mb-5 items-center">
              <div className="flex items-center gap-x-3">
                <img
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
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    15
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </header>
          <hr />
          <figure className="mb-8">
            <img
              src="https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe-480x270.jpg"
              alt=""
              className="rounded-2xl w-full mt-6"
            />
            <figcaption>Digital art by Anonymous</figcaption>
          </figure>
          <div className="flex divide-x divide-gray-300">
            <div className="px-4">
              <p>PREP TIME</p>
              <p>15 min</p>
            </div>
            <div className="px-4">
              <p>PREP TIME</p>
              <p>15 min</p>
            </div>
            <div className="px-4">
              <p>PREP TIME</p>
              <p>15 min</p>
            </div>
            <div className="px-4">
              <p>PREP TIME</p>
              <p>15 min</p>
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
                  {facts.nutritionFacts.map((nutrition, index) => (
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
                  {steps.steps.map((step, index) => (
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
                <div className="overflow-x-scroll">
                  <article className=" text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Michael Gough"
                          />
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                      </div>
                      <button
                        id="dropdownComment1Button"
                        data-dropdown-toggle="dropdownComment1"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>
                      <div
                        id="dropdownComment1"
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Very straight-to-point article. Really worth time reading.
                      Thank you! But tools are just the instruments for the UX
                      designers. The knowledge of the design tools are as
                      important as the creation of the design strategy.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 mb-3 ml-1 lg:ml-1 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Jese Leos"
                          />
                          Jese Leos
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                      </div>
                      <button
                        id="dropdownComment2Button"
                        data-dropdown-toggle="dropdownComment2"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>

                      <div
                        id="dropdownComment2"
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Much appreciated! Glad you liked it ☺️
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 mb-3 ml-5 lg:ml-5 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Jese Leos"
                          />
                          Jese Leos
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                      </div>
                      <button
                        id="dropdownComment2Button"
                        data-dropdown-toggle="dropdownComment2"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>

                      <div
                        id="dropdownComment2"
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Much appreciated! Glad you liked it ☺️
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Bonnie Green"
                          />
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                      </div>
                      <button
                        id="dropdownComment3Button"
                        data-dropdown-toggle="dropdownComment3"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                      </button>
                      <div
                        id="dropdownComment3"
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      The article covers the essentials, challenges, myths and
                      stages the UX designer should consider while creating the
                      design strategy.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
                  <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                            alt="Helene Engels"
                          />
                          Helene Engels
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                      </div>
                      <button
                        id="dropdownComment4Button"
                        data-dropdown-toggle="dropdownComment4"
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      </button>
                      <div
                        id="dropdownComment4"
                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Remove
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Report
                            </a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      Thanks for sharing this. I do came from the Backend
                      development and explored some of the tools to design my
                      Side Projects.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                      >
                        <svg
                          className="mr-1.5 w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </article>
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
