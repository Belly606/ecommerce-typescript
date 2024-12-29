import Lottie from "lottie-react";
import notFound from "@assets/lotties/notFound.json";
import cartEmpty from "@assets/lotties/cartEmpty.json";
import cartLoading from "@assets/lotties/cartLoading.json";
import wishlistEmpty from "@assets/lotties/wishlistEmpty.json";
import wishlistLoading from "@assets/lotties/wishlistLoading.json";
import error from "@assets/lotties/error.json";

const lottieFilesMap = {
  notFound,
  cartEmpty,
  cartLoading,
  wishlistEmpty,
  wishlistLoading,
  error,
};

type TLottieHandler = {
  type: keyof typeof lottieFilesMap;
  message?: string;
};

const LottieHandler = ({ type, message }: TLottieHandler) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", marginTop: "10px", color: "red" }
      : { fontSize: "19px", marginTop: "20px" };
  const lottieStyle =
    type === "cartEmpty" ? { width: "300px" } : { width: "200px" };
  return (
    <div className="d-flex flex-column align-items-center justify-content-start">
      <Lottie animationData={lottie} style={lottieStyle} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
