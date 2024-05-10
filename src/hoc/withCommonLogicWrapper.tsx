import { FC } from "react";

export const withCommonLogicWrapper = (Component: FC) => {
  const WrapperComponent = (props: any) => {
    return (
      <div>
        <h2>Block With Commn Logic</h2>
        <Component {...props} />
        <h3>Block With Commn Logic</h3>
      </div>
    );
  };

  return WrapperComponent;
};
