export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

type ProductId = {
  productId: string;
};

type Product = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  price?: number;
};
export function createProduct({
  title,
  imageUrl,
  description,
  price,
}: Product) {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      imageUrl,
      description,
      price,
    },
  };
}

export function updateProduct({ id, title, imageUrl, description }: Product) {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      imageUrl,
      description,
    }
  };
}

export function deleteProduct(productId: ProductId) {
  return { type: DELETE_PRODUCT, pid: productId };
}
