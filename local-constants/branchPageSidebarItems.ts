import styles from "@/shared/activeItems.module.scss";
import { generateImageTag } from "@/utils/generateImageTag";
import { activeClass, inactiveClass } from "@/shared/styleConstant";

export const branchPageSidebarItems = [
   {
      text: "Queue Analytics",
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
      key: "analytics",
      href: "analytics",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
   {
      text: "Branch Edit",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/branch.svg",
            "user_register_icon",
            activeItemStyle
         );
      },
      key: "edit-branch",
      href: "edit-branch",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
];
