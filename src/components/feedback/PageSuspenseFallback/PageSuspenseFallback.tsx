import React, { Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

const PageSuspenseFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <LottieHandler type="cartLoading" message="Loading Please Wait..." />
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspenseFallback;
