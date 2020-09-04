import { Action, action, thunk, Thunk } from "easy-peasy";

export interface TestProps {
    id: string;
    name: string;
  }
  
  export interface TestModel {
    items: TestProps[];
    item: TestProps | null;
    setItems: Action<TestModel, TestProps[] | []>;
    setItem: Action<TestModel, TestProps | null>;
  }

  const test : TestModel = {
    items: [],
    item : null,
    setItems: action((state, payload) => {
      state.items = payload
    }),
    setItem: action((state, payload) => {
      state.item = payload
    })
  }


export default test;