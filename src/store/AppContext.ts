import { createContext } from 'react';
import { initState as userInit } from './jikandata/context';
import JikanState from './jikandata/context';
export type Dispatch = {
  data: any;
  type: string;
  action: string;
};

export type AppState = {
  jikanState: JikanState;
};

export type Context = {
  state: AppState;
  dispatch(data: Dispatch): void;
};

const initialState: AppState = {
  jikanState: userInit,
};

const context: Context = {
  state: initialState,
  dispatch: (data): void => {
    throw new Error('dispatch function must be overridden');
  }
};

const AppContext = createContext<Context>(context);

export default AppContext;
