"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: false },
  {
    name: "Sectors",
    current: false,
    dropdown: true,
    items: [
      { name: "Adhoc Project Planning", href: "/adhoc", current: false },
      { name: "Construction", href: "/construction", current: false },
      { name: "Marine", href: "/marine", current: false },
      { name: "Deal Sourcing", href: "/deals", current: false },
    ],
  },
  { name: "About Us", href: "/about", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ sectorSpecial }) {
  const pathname = usePathname();
  
  // Determine which sector we're in based on the pathname
  const pathParts = pathname.split('/');
  const currentSector = pathParts[1] || '';
  const isNestedPage = pathParts.length > 2 && pathParts[2];
  
  // Define special links for each sector
  const sectorSpecialLinks = {
    marine: {
      name: "Services",
      href: "/marine/services",
      hasDropdown: true,
      items: [
        { name: "All Services", href: "/marine/services" },
        { name: "Equipment & Solutions", href: "/marine/services/equipment" },
        { name: "Rigs", href: "/marine/rigs" },
      ],
    },
    deals: { name: "Deal Listings", href: "/deals/list" },
    adhoc: {
      name: "Management Services",
      href: "/adhoc/services",
      hasDropdown: true,
      items: [
        { name: "All Services", href: "/adhoc/services" },
        { name: "Project Management", href: "/adhoc/services/project-management" },
        { name: "Planning & Controls", href: "/adhoc/services/planning-controls" },
        { name: "Financial Services", href: "/adhoc/services/financial-services" },
        { name: "Document Management", href: "/adhoc/services/document-management" },
        { name: "Risk Management", href: "/adhoc/services/risk-management" },
        { name: "4D Planning", href: "/adhoc/services/4d-planning" },
        { name: "Commercial Management", href: "/adhoc/services/commercial-management" },
        { name: "Project Estimations", href: "/adhoc/services/project-estimations" },
        { name: "Functional Lead Service", href: "/adhoc/services/functional-lead" },
        { name: "Project Controls", href: "/adhoc/services/project-controls" },
      ],
    },
    construction: {
      name: "Services",
      href: "/construction/services",
      hasDropdown: false,
    },
  };
  
  // Define additional special links for adhoc sector
  const adhocSpecialLinks = {
    forensics: {
      name: "Forensics",
      href: "/adhoc/forensics",
      hasDropdown: true,
      items: [
        { name: "All Forensics", href: "/adhoc/forensics" },
        { name: "Claims Analysis", href: "/adhoc/forensics/claims-analysis" },
        { name: "Dispute Resolution", href: "/adhoc/forensics/dispute-resolution" },
        { name: "Expert Witness", href: "/adhoc/forensics/expert-witness" },
      ],
    },
  };
  
  // Get the special link for the current sector
  const specialLink = sectorSpecialLinks[currentSector];
  
  // Create a modified navigation array for sector pages
  let currentNavigation = [...navigation];
  
  // Remove Home option from main page
  if (pathname === '/') {
    currentNavigation = currentNavigation.filter(item => item.name !== "Home");
  }
  // For about and contact pages, show full navigation with Sectors dropdown (like home page)
  else if (currentSector === 'about' || currentSector === 'contact') {
    // Keep the full navigation as-is (includes Sectors dropdown)
  }
  // If we're on a sector page, modify the navigation
  else if (currentSector) {
    // For nested pages (services, forensics, etc.), show sector name instead of Home
    if (isNestedPage) {
      // Get the sector display name with proper capitalization
      const sectorDisplayName = {
        'adhoc': 'Adhoc',
        'marine': 'Marine',
        'construction': 'Construction',
        'deals': 'Deals'
      }[currentSector] || currentSector.charAt(0).toUpperCase() + currentSector.slice(1);
      
      // Default navigation for nested pages
      currentNavigation = [
        { name: sectorDisplayName, href: `/${currentSector}`, current: false },
        { name: "About Us", href: "/about", current: false },
        { name: "Contact Us", href: "/contact", current: false },
      ];
      
      // Add special links based on sector
      if (specialLink) {
        currentNavigation.splice(1, 0, 
          specialLink.hasDropdown ? 
          {
            name: specialLink.name,
            href: specialLink.href,
            current: false,
            dropdown: true,
            items: specialLink.items
          } : 
          { name: specialLink.name, href: specialLink.href, current: false }
        );
      }
      
      // Special case for adhoc sector - add forensics link
      if (currentSector === 'adhoc') {
        currentNavigation.splice(2, 0, 
          adhocSpecialLinks.forensics.hasDropdown ? 
          {
            name: adhocSpecialLinks.forensics.name,
            href: adhocSpecialLinks.forensics.href,
            current: false,
            dropdown: true,
            items: adhocSpecialLinks.forensics.items
          } : 
          { name: adhocSpecialLinks.forensics.name, href: adhocSpecialLinks.forensics.href, current: false }
        );
      }
    }
    // For sector home pages, show Home option to go back to main page
    else {
      currentNavigation = [
        { name: "Home", href: "/", current: false },
        { name: "About Us", href: "/about", current: false },
        { name: "Contact Us", href: "/contact", current: false },
      ];
      
      // Add special links based on sector
      if (specialLink) {
        currentNavigation.splice(1, 0, 
          specialLink.hasDropdown ? 
          {
            name: specialLink.name,
            href: specialLink.href,
            current: false,
            dropdown: true,
            items: specialLink.items
          } : 
          { name: specialLink.name, href: specialLink.href, current: false }
        );
      }
      
      // Special case for adhoc sector - add forensics link
      if (currentSector === 'adhoc') {
        currentNavigation.splice(2, 0, 
          adhocSpecialLinks.forensics.hasDropdown ? 
          {
            name: adhocSpecialLinks.forensics.name,
            href: adhocSpecialLinks.forensics.href,
            current: false,
            dropdown: true,
            items: adhocSpecialLinks.forensics.items
          } : 
          { name: adhocSpecialLinks.forensics.name, href: adhocSpecialLinks.forensics.href, current: false }
        );
      }
    }
  }
  return (
    <Disclosure as="nav" className="bg-dark/20 backdrop-blur-lg z-50 fixed top-0 left-0 right-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-darker hover:text-white ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className=" flex flex-1 items-center justify-between py-2 ">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <img
                  alt="H-World"
                  src={"/hworld.png"}
                  className="h-12 md:h-16 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {currentNavigation.map((item) => (
                  item.dropdown ? (
                    <Menu as="div" className="relative" key={item.name}>
                      <MenuButton
                        className={classNames(
                          item.current ? "bg-dark text-white" : "text-gray-300",
                          "rounded-md px-3 py-2 text-base font-medium hover:text-sec inline-flex items-center"
                        )}
                      >
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </MenuButton>
                      <MenuItems
                        className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-dark py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {item.items.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            {({ active }) => (
                              <Link
                                href={subItem.href}
                                className={classNames(
                                  active ? "bg-darker" : "",
                                  "block px-4 py-2 text-sm text-gray-300 hover:text-sec"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : (
                    <Link
                      scroll={true}
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current ? "bg-dark text-white" : "text-gray-300  ",
                        "rounded-md px-3 py-2 text-base font-medium hover:text-sec"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="h-[95vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {currentNavigation.map((item) => (
              item.dropdown ? (
                <div key={item.name}>
                  <div
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </div>
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <DisclosureButton
                        key={subItem.name}
                        as="a"
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {subItem.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              ) : (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-darker text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              )
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
