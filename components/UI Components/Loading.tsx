import styles from "@/styles/Loading.module.scss";

export const Loading: React.FC<any> = ({ message }) => {
   return (
      <div className={styles.loader}>
         <div className={styles.spinner}></div>
      </div>
   );
};
