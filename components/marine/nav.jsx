"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Construction", href: "/construction", current: false },
    { name: "Marine", href: "/marine", current: false },
    { name: "Deals", href: "/deals", current: false },
    { name: "About Us", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  export default function Nav({ className }) {
   const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} className='bg-dark'>
        <div className="flex">
          <Link href={'/'}>
          <img src="/hworld.png" alt="" className="w-12" />
          </Link>
        </div>
        <div className="flex space-x-4 px-6">
           <MenuItem setActive={setActive} active={active} item="Sectors">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">H-World</HoveredLink>
            <HoveredLink href="/adhoc">Adhoc</HoveredLink>
            <HoveredLink href="/construction">Construction</HoveredLink>
            <HoveredLink href="/marine">Marine</HoveredLink>
            <HoveredLink href="/deals">Deals</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="/deal.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="/deal.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="/deal.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="/deal.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        <Link href={'/marine/rigs'}   className="cursor-pointer text-white font-semibold text-sm hover:opacity-[0.9] hover:text-sec ">
           Rigs
        </Link>
        </div>
       
      </Menu>
    </div>
  );
  }
  
