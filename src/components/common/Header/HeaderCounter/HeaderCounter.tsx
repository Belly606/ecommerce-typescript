import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

type THeaderCounterProps = {
  title: string;
  path: string;
  totalQuantity: number;
  svgIcon: React.ReactNode;
};

const HeaderCounter = ({
  title,
  path,
  totalQuantity,
  svgIcon,
}: THeaderCounterProps) => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = isAnimate ? `${totalNum} ${pumpAnimate}` : totalNum;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);
  return (
    <div className={container} onClick={() => navigate(path)}>
      <div className={iconWrapper}>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderCounter;
