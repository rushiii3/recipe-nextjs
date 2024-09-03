"use client";
import React, { useRef } from "react";
import RecipeCard from "./RecipeCard";
const recipes = [
  {
    title: "Spicy Chicken Curry",
    image: "https://vismaifood.com/storage/app/uploads/public/d58/a6e/2b7/thumb__700_0_0_0_auto.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "ChefJohn",
    posteddate: "2024-08-15",
    rating: 4.8,
  },
  {
    title: "Classic Margherita Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wt1dqDdEgvtrIOcC45xTnSG5TZM4yxq6pA&s",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "PizzaLover",
    posteddate: "2024-08-18",
    rating: 4.5,
  },
  {
    title: "Vegan Chocolate Cake",
    image: "https://i.ytimg.com/vi/5ZeLzloyxuo/maxresdefault.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "VeganChef",
    posteddate: "2024-08-20",
    rating: 4.9,
  },
  {
    title: "Grilled Salmon with Lemon",
    image: "https://hips.hearstapps.com/vidthumb/images/delish-grilled-lemon-butter-salmon-wide-1-1528898035.jpg?crop=0.75xw:1xh;center,top&resize=1200:*",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "SeafoodGuru",
    posteddate: "2024-08-22",
    rating: 4.7,
  },
  {
    title: "Avocado Toast",
    image: "https://www.eatingwell.com/thmb/5WPPXV5n1fFOKXSeO8s3D2KXIGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-03-23712072b7df44b8b3cd87681700e67b.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "HealthyNibbles",
    posteddate: "2024-08-25",
    rating: 4.4,
  },
  {
    title: "Beef Stroganoff",
    image: "https://www.allrecipes.com/thmb/mSWde3PHTu-fDkbvWBw0D1JlS8U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25202beef-stroganoff-iii-ddmfs-3x4-233-0f26fa477e9c446b970a32502468efc6.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "MeatLovers",
    posteddate: "2024-08-27",
    rating: 4.6,
  },
  {
    title: "Pancakes with Maple Syrup",
    image: "https://www.giallozafferano.com/images/260-26079/Pancakes-with-maple-syrup_1200x800.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "SweetTooth",
    posteddate: "2024-08-28",
    rating: 4.3,
  },
  {
    title: "Mediterranean Quinoa Salad",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "SaladMaster",
    posteddate: "2024-08-29",
    rating: 4.7,
  },
  {
    title: "BBQ Ribs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkamvlgkyEeoBMqUPLhBWfNRrTP330B__mig&s",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "BBQKing",
    posteddate: "2024-08-30",
    rating: 4.8,
  },
  {
    title: "Mango Smoothie",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
    userprofile: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "TropicalTreats",
    posteddate: "2024-09-01",
    rating: 4.9,
  },
];

const TrendingRecipe = () => {
  const carouselRef = useRef(null);
  const scrollByAmount = (amount: number) => {
    if (carouselRef.current) {
      carouselRef?.current?.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    scrollByAmount(-carouselRef?.current?.clientWidth);
  };

  const scrollRight = () => {
    scrollByAmount(carouselRef?.current?.clientWidth);
  };
  return (
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
        {/* grid sm:grid-cols-2 lg:grid-cols-3 */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-25 text-black size-10 rounded-full z-10"
          >
            &lt;
          </button>
          <div
            ref={carouselRef}
            className=" flex overflow-x-scroll flex-row gap-6 pb-10 no-scrollbar snap-mandatory snap-x"
          >
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={`recipe${index}`}
                title={recipe.title}
                postedBy={recipe.username}
                image={recipe.image}
                postedDate={recipe.posteddate}
                rating={recipe.rating}
                userProfileImage={recipe.userprofile}
              />
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-25 text-black size-10 rounded-full z-10"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingRecipe;
