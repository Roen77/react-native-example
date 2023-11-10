export const productKeys = {
  getAll: ['products'],
  getProduct: (id: number) => [...productKeys.getAll, id],
};
