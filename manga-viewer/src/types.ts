import { AxiosRequestConfig } from "axios";

export interface APIError {
  appName: string;
  code: string;
  data: any;
  message: string;
  status: number;
  errors: any;
}

export type CommonDataType = string | number | null;

export interface RequestConfig<T> extends AxiosRequestConfig {
  data?: T;
}

export interface ModuleReducerMap<S, A> {
  [action: string]: (state: S, action?: A) => S;
}

export interface PromiseMeta {
  meta: {
    resolve: (value?: any) => void;
    reject: (reason?: APIError) => void;
  };
}

export type WithMeta<T> = T & PromiseMeta;

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type ReduxAction<P, T = string> = {
  type: T;
  payload: P;
};
