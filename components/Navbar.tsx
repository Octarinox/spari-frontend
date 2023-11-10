"use client";

import {useEffect, useState} from 'react';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames } from "@/utils/classConcatenate";
import UserMenu from "@/components/UserMenu";
import {navBarItems} from '@/constants/navBarItems';
import {usePathname} from 'next/navigation';
import {getActiveItemByRoute} from '@/utils/getActiveItemByRoute';

export default function Navbar() {
   const [navigationItems, setNavigationItems] = useState(navBarItems);
   const path = usePathname();
   const handleClick = (index: number) => {
      const tempNavigation = navigationItems.map((item, i) => ({
         ...item,
         current: i === index,
      }));
      setNavigationItems([...tempNavigation]);
   };

   useEffect(() => {
      const newMenu = getActiveItemByRoute(navigationItems, path);
      setNavigationItems(newMenu);
   }, [path]);

   return (
      <Disclosure as="nav" className="bg-gray-700 z-50">
         {({ open }: any) => (
            <>
               <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative z-10 flex h-16 items-center justify-between">
                     <div className="absolute inset-y-0 left-0 z-10 flex items-center sm:hidden">
                        <Disclosure.Button className="relative inline-flex z-50 items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                           <span className="absolute -inset-0.5" />
                           <span className="sr-only">Open main menu</span>
                           {open ? (
                              <XMarkIcon
                                 className="block h-6 w-6"
                                 aria-hidden="true"
                              />
                           ) : (
                              <Bars3Icon
                                 className="block h-6 w-6"
                                 aria-hidden="true"
                              />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center logo"></div>
                        <div className="hidden sm:ml-6 sm:block">
                           <div className="flex space-x-4">
                              {navigationItems.map((item: any, index: number) => (
                                 <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleClick(index)}
                                    className={classNames(
                                       item.current
                                          ? "bg-gray-900 text-white"
                                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                       "rounded-md px-3 py-2 text-sm font-medium"
                                    )}
                                    aria-current={
                                       item.current ? "page" : undefined
                                    }
                                 >
                                    {item.name}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                           type="button"
                           className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                           <span className="absolute -inset-1.5" />
                        </button>

                        <UserMenu />
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className="sm:hidden z-50 ">
                  <div className="space-y-1 px-2 pb-3 pt-2 z-50 ">
                     {navigationItems.map((item: any) => (
                        <Disclosure.Button
                           key={item.name}
                           as="a"
                           href={item.href}
                           className={classNames(
                              item.current
                                 ? "bg-gray-900 text-white"
                                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block rounded-md px-3 py-2 text-base font-medium"
                           )}
                           aria-current={item.current ? "page" : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
