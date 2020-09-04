import { createStore, createTypedHooks } from "easy-peasy";
import model, { StoreModel } from "./models";

const { useStoreDispatch, useStore, useStoreActions , useStoreState } = createTypedHooks<StoreModel>();

export { useStoreDispatch, useStoreActions, useStore , useStoreState };

const store = createStore(model);

export default store;