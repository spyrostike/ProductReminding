import { Action, action , Thunk ,thunk } from 'easy-peasy';
import { AppRoute } from '../../navigation/app-routes';

export interface ProductProps {
  name: string;
  status: string;
}

export interface ActivityProps {
  name: string;
  data: any;
  index: number | null
}

export interface ProductModel {
  items: ProductProps[];
  item: ProductProps | null;
  showState: 'ALL' | 'ACTIVE' | 'COMPLETE';
  undoList: ActivityProps[];
  redoList: ActivityProps[];
  setItems: Action<ProductModel, ProductProps[] | []>;
  setItem: Action<ProductModel, ProductProps | null>;
  add: Action<ProductModel, ProductProps>;
  setShowState: Action<ProductModel, 'ALL' | 'ACTIVE' | 'COMPLETE'>;
  addUndo: Action<ProductModel, ActivityProps>;
  setUndoList: Action<ProductModel, ActivityProps[] | []>;
  addRedo: Action<ProductModel, ActivityProps>;
  setRedoList: Action<ProductModel, ActivityProps[] | []>;
  
}

const productModel : ProductModel = {
  items: [],
  item: null,
  showState: 'ALL',
  undoList: [],
  redoList: [],
  setItems: action((state, payload) => {
    state.items = payload
  }),
  setItem: action((state, payload) => {
    state.item = payload
  }),
  add: action((state, payload) => {
    state.items.push(payload)
  }),
  setShowState: action((state, payload) => {
    state.showState = payload
  }),
  addUndo: action((state, payload) => {
    state.undoList.push(payload)
  }),
  setUndoList: action((state, payload) => {
    state.undoList = payload
  }),
  addRedo: action((state, payload) => {
    state.redoList.push(payload)
  }),
  setRedoList: action((state, payload) => {
    state.redoList = payload
  })
};

export default productModel;