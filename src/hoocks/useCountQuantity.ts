import { useState } from "react";

export const useCountQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return {
    quantity,
    handleDecreaseQuantityClick,
    handleIncreaseQuantityClick,
  };
};
