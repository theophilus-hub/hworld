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
        <Link href={'/deals/list'}   className="cursor-pointer text-white font-semibold text-sm hover:opacity-[0.9] hover:text-sec ">
           Deals
        </Link>
        </div>
       
      </Menu>
    </div>
  );
  }
  
