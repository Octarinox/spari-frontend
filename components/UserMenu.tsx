import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "@/utils/classConcatenate";
import Link from "next/link";
import { useAuthActions, useAuthState } from "@/contexts/LoginContext/context";
import { useRouter } from "next/navigation";

const UserMenu = () => {
   const { logOut } = useAuthActions();
   const { email } = useAuthState();
   const router = useRouter();
   const handleLogout = async () => {
      await logOut();
      router.replace("/login");
   };
   return (
      <Menu as="div" className="relative ml-3">
         <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
               <span className="absolute -inset-1.5" />
               <span className="sr-only">Open user menu</span>
               <img className="h-8 w-8 rounded-full" src="/user.png" alt="" />
            </Menu.Button>
         </div>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
               <Menu.Item>
                  {({ active }) => (
                     <>
                        <Link
                           href="/login"
                           onClick={handleLogout}
                           className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                           )}
                        >
                           Sign out
                        </Link>
                     </>
                  )}
               </Menu.Item>
               <Menu.Item>
                  <>
                     {email && (
                        <p
                           className={classNames(
                              "block px-4 py-2 text-sm text-gray-700"
                           )}
                        >
                           {email}
                        </p>
                     )}
                  </>
               </Menu.Item>
            </Menu.Items>
         </Transition>
      </Menu>
   );
};
export default UserMenu;
