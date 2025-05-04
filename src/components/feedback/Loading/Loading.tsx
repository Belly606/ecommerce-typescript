import { TLoading } from "@customTypes/shared";
import React from "react";

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    <p>Loading Please Wait...</p>;
  }

  if (status === "failed") {
    <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
