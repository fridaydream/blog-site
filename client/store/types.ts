
interface ICounterServer {
  count: number;
}

export interface IThemeType {
  theme: string
}

export interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  toJson: () => ICounterServer;
}

export interface IThemeStore {
  theme: string;
  setTheme: () => void;
  toJson: () => IThemeType;
}

export interface IStores {
  counterStore: ICounterStore;
  themeStore: IThemeStore;
}

export type IStoresKey = 'counterStore' | 'themeStore'

declare global {
  interface Window {
    __INITIAL__STATE__: IStores;
  }
}
