import { Action, action , Thunk ,thunk } from 'easy-peasy';
import { AppRoute } from '../../navigation/app-routes';

export interface AppModel {
  state: string;
  qrcodeId: string | null;
  creatureId: string | null;
  prevState?: string | null;
  setState: Action<AppModel, string>;
  setQRCodeId: Action<AppModel, string | null>;
  setCreatureId: Action<AppModel, string | null>;
  setPrevState: Action<AppModel, string | null>;
}

const appModel : AppModel = {
  state: AppRoute.LOADING,
  qrcodeId: null,
  creatureId: null,
  prevState: null,
  setState: action((state, payload) => {
    state.state = payload
  }),
  setQRCodeId: action((state, payload) => {
      state.qrcodeId = payload
  }),
  setCreatureId: action((state, payload) => {
    state.creatureId = payload
  }),
  setPrevState: action((state, payload) => {
    state.prevState = payload
  })
};

export default appModel;