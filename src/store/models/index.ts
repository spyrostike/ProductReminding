import product, { ProductModel } from './product';

export interface StoreModel {
  product: ProductModel;
};

const model: StoreModel = {
  product
};

export default model;