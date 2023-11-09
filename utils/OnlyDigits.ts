import React from "react";

const OnlyDigits = (e: any) => {
   e.target.value = e.target.value.replace(/\D/, "");
};

export default OnlyDigits;
