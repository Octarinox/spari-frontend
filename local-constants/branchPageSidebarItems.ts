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
      key: "queue-analytics",
      href: "queue-analytics",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
   {
      text: "Face Analytics",
      getCurrentItem() {
         const activeItemStyle = this.current
            ? styles.activeIcon
            : styles.inactiveIcon;
         return generateImageTag(
            "/face-recognition-icon.svg",
            "user_register_icon",
            activeItemStyle
         );
      },
      key: "face-analytics",
      href: "face-analytics",
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
      bannedRole: "manager",
      key: "edit-branch",
      href: "edit-branch",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
];
