const store = new Map();


export const OPENED_FILES = 'OPENED_FILES';
export const CURRENT_FILE_INDEX = 'CURRENT_FILE_INDEX';


// Default values
store.set(OPENED_FILES, []);
store.set(CURRENT_FILE_INDEX, null);


const oldGet = store.get;
store.get = key => {
  // Return cloned in order to make data inmutable
  const result = oldGet.apply(store, [key]);
  if (Array.isArray(result)) {
    return result.slice(0);
  }
  else if (typeof result === 'object') {
    return Object.assign({}, result);
  }
  else {
    return result;
  }
};

export default store;
