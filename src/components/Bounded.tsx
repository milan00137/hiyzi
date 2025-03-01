import React from "react";
import clsx from "clsx";

// Helper type for polymorphic components
type PolymorphicProps<
  C extends React.ElementType,
  Props = object
> = Props & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;

type BoundedProps<C extends React.ElementType = "section"> = PolymorphicProps<
  C,
  {
    className?: string;
    children?: React.ReactNode;
  }
>;

export function Bounded<C extends React.ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<C>) {
  const Component = as || "section";
  return (
    <Component
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Component>
  );
}
