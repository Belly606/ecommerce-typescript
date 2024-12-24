import { TLoading } from "@cutomTypes/shared";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return <>{children}</>;
};

export default Loading;
