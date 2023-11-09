import React from "react";
import styles from "@/shared/activeItems.module.scss";

const activeClass = `flex items-center p-2 hover:text-gray-900 rounded-lg ${styles.activeItem} group text-white`;
const inactiveClass =
   "flex items-center p-2 text-gray-600 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group";
const generateImageTag = (icon: string, alt: string, styles: any) => {
   return (
      <img
         src={icon}
         width={"20px"}
         height={"20px"}
         alt={alt}
         className={styles}
      />
   );
};

export const settingsMenuItems = [
   {
      text: "User Register",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/users.svg",
            "user_register_icon",
            activeItemStyle
         );
      },
      href: "/settings/user-register",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
   {
      text: "Branch Register",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/branch.svg",
            "branch_register_icon",
            activeItemStyle
         );
      },
      href: "/settings/branch-register",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
   {
      text: "Blacklist",

      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/blacklist.svg",
            "blacklist_icon",
            activeItemStyle
         );
      },
      href: "/settings/blacklist",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
];
