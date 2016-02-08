export const SET_AS_BOLD = Symbol.for('SET_AS_BOLD');

export function setAsBold() {
  return {
    type: SET_AS_BOLD
  };
}


export const SET_AS_ITALIC = Symbol.for('SET_AS_ITALIC');

export function setAsItalic() {
  return {
    type: SET_AS_ITALIC
  };
}


export const CREATE_LINK = Symbol.for('CREATE_LINK');

export function createLink() {
  return {
    type: CREATE_LINK
  };
}


export const CREATE_IMAGE_LINK = Symbol.for('CREATE_IMAGE_LINK');

export function createImageLink() {
  return {
    type: CREATE_IMAGE_LINK
  };
}


export const CREATE_QUOTE = Symbol.for('CREATE_QUOTE');

export function createQuote() {
  return {
    type: CREATE_QUOTE
  };
}

export const CREATE_UL_LIST = Symbol.for('CREATE_UL_LIST');

export function createUlList() {
  return {
    type: CREATE_UL_LIST
  };
}


export const CREATE_OL_LIST = Symbol.for('CREATE_OL_LIST');

export function createOlList() {
  return {
    type: CREATE_OL_LIST
  };
}


export const CREATE_CODE_BLOCK = Symbol.for('CREATE_CODE_BLOCK');

export function createCodeBlock() {
  return {
    type: CREATE_CODE_BLOCK
  };
}


export const CREATE_HEADER = Symbol.for('CREATE_HEADER');

export function createHeader() {
  return {
    type: CREATE_HEADER
  };
}
