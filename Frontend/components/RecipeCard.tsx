import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const RecipeCard = ({
  title,
  rating,
  image,
  postedBy,
  postedDate,
  userProfileImage,
}) => {
  const timeAgo = new TimeAgo("en-US");

  return (
    <Link
      className="snap-always snap-start group flex-none  w-96 flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
      href={`/recipes/${title}`}
    >
      <div className="aspect-w-16 aspect-h-11">
        <Image
          className="w-full object-cover rounded-xl aspect-square"
          src={
            image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s"
          }
          alt="Blog Image"
          height={200}
          width={200}
        />
      </div>
      <div className="my-6">
        <div className="flex items-center gap-x-1 mb-3">
          {Array.from({ length: rating }).map((_star, index) => (
            <FaStar className="size-5 text-yellow-500" key={index} />
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          {title}
        </h3>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <Image
          className="size-8 rounded-full"
          src={
            userProfileImage ||
            "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
          }
          alt="Avatar"
          height={200}
          width={200}
        />
        <div className="flex justify-between items-center w-full">
          <h5 className="text-sm text-gray-800 dark:text-neutral-200">
            {postedBy}
          </h5>
          <h5 className="text-sm text-gray-800 dark:text-neutral-200">
            {timeAgo.format(new Date(postedDate))}
          </h5>
        </div>
      </div>
    </Link>
  );
};
export default RecipeCard;
