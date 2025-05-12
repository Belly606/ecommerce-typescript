import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import { TLoading } from "@types";

const sekeletonTypes = {
  cart: CartSkeleton,
  category: CategorySkeleton,
  product: ProductSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
  type?: keyof typeof sekeletonTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = sekeletonTypes[type];

  if (status === "pending") {
    return <Component />;
  }

  if (status === "failed") {
    <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
