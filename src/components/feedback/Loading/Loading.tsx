import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";

import { TLoading } from "@types";

const skeletonsTypes = {
  cart: CartSkeleton,
  category: CategorySkeleton,
  product: ProductSkeleton,
};

type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: TLoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return <div>{children}</div>;
};

export default Loading;
