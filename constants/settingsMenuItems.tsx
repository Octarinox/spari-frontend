import React from "react";
import styles from "@/shared/active.module.css";

export const settingsMenuItems = [
   {
      text: "User Register",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return (
            <img
               src="/users.svg"
               width={"20px"}
               height={"20px"}
               alt={"user_register_icon"}
               className={activeItemStyle}
            />
         );
      },
      href: "/settings/user-register",
      current: false,
      className:
         "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 group",
      classNameCurrent:
         "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
   },
   {
      text: "Branch Register",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return (
            <img
               src="/branch.svg"
               width={"20px"}
               height={"20px"}
               alt={"branch_register_icon"}
               className={activeItemStyle}
            />
         );
      },
      href: "/settings/branch-register",
      current: false,
      className:
         "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group",
      classNameCurrent:
         "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
   },
   {
      text: "Blacklist",

      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return (
            <img
               src="/blacklist.svg"
               width={"20px"}
               height={"20px"}
               alt={"blacklist_icon"}
               className={activeItemStyle}
            />
         );
      },
      href: "/settings/blacklist",
      current: false,
      className:
         "flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group",
      classNameCurrent:
         "flex items-center p-2 hover:text-gray-900 rounded-lg bg-gray-200 group",
   },
];
