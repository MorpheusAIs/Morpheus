import Store from 'electron-store';

export type SchemaType = {
  modelsPath: string;
};

const store = new Store<SchemaType>({
  defaults: {
    modelsPath: '',
  },
});

export const saveModelPathToStorage = (path: string) => {
  store.set('modelsPath', path);
};

export const getModelPathFromStorage = () => {
  return store.get('modelsPath');
};

export const clearStore = () => {
  store.clear();
};
