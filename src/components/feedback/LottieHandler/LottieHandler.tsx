import Lottie from "lottie-react";
import cartEmpty from "@assets/lotties/cartEmpty.json";
import cartLoading from "@assets/lotties/cartLoading.json";
import error from "@assets/lotties/error.json";
import notFound from "@assets/lotties/notFound.json";
import success from "@assets/lotties/success.json";
import wishlistEmpty from "@assets/lotties/wishlistEmpty.json";
import wishlistLoading from "@assets/lotties/wishlistLoading.json";

const lottieFilesMap = {
  cartEmpty,
  cartLoading,
  error,
  notFound,
  success,
  wishlistEmpty,
  wishlistLoading,
};

type TLottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
};

const LottieHandler = ({ type, message }: TLottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };
  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={lottie} style={{ width: "200px" }} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
