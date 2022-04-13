export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

type Product = {
  productId: string;
};

export function updateProduct({ productId }: Product) {
    return { type: UPDATE_PRODUCT, pid: productId };
}

export function deleteProduct(productId: Product) {
  return { type: DELETE_PRODUCT, pid: productId };
}
