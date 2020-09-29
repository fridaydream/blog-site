
import { IStores } from '../client/store/types';

interface RouterContext {
  url?: string;
}

interface Bundle {
  default: (routerContext: object, url: string) => any
  createStoreMap: () => IStores;
}

export {
  IStores,
  RouterContext,
  Bundle,
}
