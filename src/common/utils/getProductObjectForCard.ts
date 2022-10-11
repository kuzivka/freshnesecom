export function getProductObjectForCard(product: any) {
  return {
    id: product.id,
    name: product.name,
    img: product.img[0],
    rate:
      product.rate.reduce((a: number, b: number) => a + b, 0) /
      product.rate.length,
    freshness: product.freshness,
    farm: product.farm,
    delivery: product.delivery,
    stock: product.stock,
    price: product.price,
    discount: product.discount,
  };
}
