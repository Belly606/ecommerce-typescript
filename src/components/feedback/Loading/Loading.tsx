import { TLoading } from "@types";

type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <div>Loading Please Wait...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return <div>{children}</div>;
};

export default Loading;
