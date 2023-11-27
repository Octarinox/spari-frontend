import React from "react";

export const generateImageTag = (icon: any, alt: string, styles: any) => {
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
