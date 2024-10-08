"use client";

import Container from "@/app/components/Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "@/app/components/CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import Hero from "../hero/Hero";

export const categories = [
  {
    label: "Bars",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Hotels",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Resturants",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Agencies",
    icon: GiCastle,
    description: "This property is in a castle!",
  },
  {
    label: "Religious",
    icon: GiBarn,
    description: "This property is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake!",
  },
  {
    label: "Parks",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Markets",
    icon: BsSnow,
    description: "This property has a pool!",
  },
  {
    label: "Monasteries",
    icon: GiCaveEntrance,
    description: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <div className=" flex flex-col gap-10">
      <Hero />
      <Container>
        <div className="flex flex-col gap-10">
          <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item) => (
              <CategoryBox
                key={item.label}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
