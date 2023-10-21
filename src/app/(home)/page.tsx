import { Categories } from "./components/categories";
import { ProductUseCase } from "@/use-cases/products";
import { ProductList } from "./components/product-list";
import { SectionTitle } from "./components/section-title";
import { PromoBanner } from "./components/promo-banner";

export default async function Home() {
  const productUseCase = new ProductUseCase();
  const productsWithDeal = await productUseCase.allProductWithDeals();
  const keyboardsWithDeals =
    await productUseCase.productWithDealsBySlug("keyboards");

  return (
    <div className="">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productsWithDeal} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboardsWithDeals} />
      </div>
    </div>
  );
}
