import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h2: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-bold text-2xl md:text-[22px] sm:text-xl",
  h4: "text-lg",
  h5: "font-normal text-base",
  h6: "text-sm",
  body1: "font-normal text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
