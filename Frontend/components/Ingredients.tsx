import { Checkbox } from "@nextui-org/react";
import React from "react";
const Ingredients = ({
  sectionName,
  items,
}: {
  sectionName: string;
  items: { quantity: string; name: string }[];
}) => {
  return (
    <div className="mb-6">
      <strong className="text-lg">For the {sectionName.toLowerCase()}</strong>
      <div className="mt-3 flex flex-col gap-3">
        {items.map(
          (item: { quantity: string; name: string }, index: number) => (
            <Checkbox
              lineThrough
              size="lg"
              radius="full"
              key={`${sectionName}-ingredient-${index}`}
            >
              {item?.quantity} {item?.name}
            </Checkbox>
          )
        )}
      </div>
    </div>
  );
};

export default Ingredients;
