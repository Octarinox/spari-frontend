import styles from '@/shared/activeItems.module.scss';

export const activeClass = `flex items-center p-2 hover:text-gray-900 rounded-lg ${styles.activeItem} group text-white`;
export const inactiveClass =
    "flex items-center p-2 text-gray-600 hover:text-gray-900 rounded-lg  hover:bg-gray-100 group";
