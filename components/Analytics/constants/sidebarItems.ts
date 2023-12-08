import styles from "@/shared/activeItems.module.scss";
import { generateImageTag } from "@/utils/generateImageTag";
import { activeClass, inactiveClass } from "@/shared/styleConstant";

export const sidebarItems = [
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
      href: "/analytics/queue",
      current: false,
      className: inactiveClass,
      classNameCurrent: activeClass,
   },
];