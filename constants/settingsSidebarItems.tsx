import React from "react";
import styles from "@/shared/activeItems.module.scss";
import { generateImageTag } from "@/utils/generateImageTag";
import { activeClass, inactiveClass } from "@/shared/constant";
import EditIcon from "@mui/icons-material/Edit";

export const settingsSidebarItems = [
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
   {
      text: "Edit Users",

      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/edit-name.svg",
            "blacklist_icon",
            activeItemStyle
         );
      },
      href: "/settings/users-edit",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
];
