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
  setThemeColor: () => void;
  toJson: () => IThemeType;
}

export interface IStores {
  counterStore: ICounterStore;
  themeStore: IThemeStore;
}
