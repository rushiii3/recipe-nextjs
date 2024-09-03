import React from "react";
import Image from "next/image";
const Categories = () => {
    const popularCategories = [
        {
          name: "Appetizers",
          image:
            "https://cdn.loveandlemons.com/wp-content/uploads/2022/12/appetizers.jpg",
        },
        {
          name: "Breakfast",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505",
        },
        {
          name: "Lunch",
          image:
            "https://rakskitchen.net/wp-content/uploads/2013/11/10867983783_854a7fec8f_o.jpg",
        },
        {
          name: "Dinner",
          image:
            "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        },
        {
          name: "Desserts",
          image:
            "https://hips.hearstapps.com/hmg-prod/images/milk-n-cookies-icebox-cake-vertical3-6658c4fc232ec.jpg?crop=0.835xw:1.00xh;0.165xw,0&resize=980:*",
        },
        {
          name: "Beverages",
          image:
            "https://www.indiabusinesstrade.in/wp-content/uploads/2024/03/beverage-2.jpg",
        },
        {
          name: "Salads",
          image:
            "https://runningonrealfood.com/wp-content/uploads/2018/01/gluten-free-vegan-everyday-healthy-rainbow-salad-Running-on-Real-Food-6-of-10.jpg",
        },
        {
          name: "Soups",
          image:
            "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg",
        },
      ];
  return (
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
          {popularCategories.map((category, key) => (
            <a
              key={key}
              className="group flex flex-col justify-center items-center space-y-3 h-full  dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div  className="lg:size-60 size-40 object-cover rounded-full overflow-hidden">
              <img
                className="lg:size-60 size-40 object-cover rounded-full hover:scale-125 transition-all delay-75"
                src={category.image}
                alt="Blog Image"
              />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {category.name}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
