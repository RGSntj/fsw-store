import Image from "next/image";
import { Categories } from "./components/categories";
import { ProductUseCase } from "@/use-cases/products";
import { ProductList } from "./components/product-list";

export default async function Home() {
  const productUseCase = new ProductUseCase();
  const productsWithDeal = await productUseCase.allProductWithDeals();

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={productsWithDeal} />
      </div>
    </div>
  );
}
