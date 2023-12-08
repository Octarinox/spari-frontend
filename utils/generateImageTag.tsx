import React from "react";

export const generateImageTag = (icon: any, alt: string, styles: any) => {
   return (
      <img
         src={icon}
         width={"25px"}
         height={"25px"}
         alt={alt}
         className={styles}
      />
   );
};
