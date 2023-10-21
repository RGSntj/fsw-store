import { prismaClient } from "@/lib/prisma";

export class ProductUseCase {
  async allProductWithDeals() {
    const productsWithDeals = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    });

    return productsWithDeals;
  }
}
