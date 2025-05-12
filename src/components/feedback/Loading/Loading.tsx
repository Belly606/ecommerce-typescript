import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import { TLoading } from "@types";

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <CategorySkeleton />;
  }

  if (status === "failed") {
    <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
