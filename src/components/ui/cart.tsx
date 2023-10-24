import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";

import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.365rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} /> Carrinho
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      {products.map((product) => {
        return <h1 key={product.id}>{product.name}</h1>;
      })}
    </div>
  );
};
