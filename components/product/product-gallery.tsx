"use client";

import { Products } from "@/lib/types";
import ProductCard from "./product-card";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function ProductGallery({ products }: { products: Products }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  let categories: {
    key: string;
    category: string;
  }[] = [];

  categories.push({ key: "new", category: "All" });
  products.forEach((item) => {
    if (!categories.some((sub) => sub.category === item.subtitle)) {
      categories.push({ key: "new", category: item.subtitle });
    }
  });

  const sortMethods = [
    {
      key: "new",
      method: "Clear All Sorting",
      name: "Clear All Sorting",
    },
    {
      key: "new",
      method: "priceAsc",
      name: "Price: low to high",
    },
    {
      key: "new",
      method: "priceDesc",
      name: "Price: high to low",
    },
    {
      key: "new",
      method: "nameAsc",
      name: "Name: a to z",
    },
    {
      key: "new",
      method: "nameDesc",
      name: "Name: z to a",
    },
  ];

  function handleSelectFilter(category: string) {
    const newParams = new URLSearchParams(searchParams.toString());

    if (category == "All") {
      newParams.delete("filter");
    } else {
      newParams.set("filter", category);
    }

    router.push(`/search?${newParams}`);
  }

  function handleSelectSort(method: string) {
    const newParams = new URLSearchParams(searchParams.toString());

    if (method == "Clear All Sorting") {
      newParams.delete("sort");
    } else {
      newParams.set("sort", method);
    }

    router.push(`/search?${newParams}`);
  }

  return (
    <div className=" container mx-auto">
      <div className=" mx-20">
        <div className=" flex flex-row justify-between my-2">
          <div className=" text-xl items-center">Shoes</div>

          <div className=" flex flex-row gap-10">
            <div className=" flex flex-row gap-2 items-center">
              <div>Filter</div>
              <Dropdown>
                <DropdownTrigger>
                  <TuneOutlinedIcon />
                </DropdownTrigger>
                <DropdownMenu aria-label="drop down filter" items={categories}>
                  {categories.map((item, index) => (
                    <DropdownItem
                      key={item.key}
                      color={item.key === "delete" ? "danger" : "default"}
                      className={item.key === "delete" ? "text-danger" : ""}
                      onPress={(e) => {
                        handleSelectFilter(item.category);
                      }}
                    >
                      {item.category}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className=" flex flex-row gap-2 items-center">
              <div>Sort by</div>
              <Dropdown>
                <DropdownTrigger>
                  <FilterAltOutlinedIcon />
                </DropdownTrigger>
                <DropdownMenu aria-label="drop down filter" items={sortMethods}>
                  {sortMethods.map((item, index) => (
                    <DropdownItem
                      key={item.key}
                      color={item.key === "delete" ? "danger" : "default"}
                      className={item.key === "delete" ? "text-danger" : ""}
                      onPress={(e) => {
                        handleSelectSort(item.method);
                      }}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className=" my-5 flex flex-wrap gap-8 w-fit mx-auto justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
