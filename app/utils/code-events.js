import EventEmitter from 'events';


class CodeEvents extends EventEmitter {
}

const events = new CodeEvents();


export function setAsBold() {
  events.emit('SET_AS_BOLD');
  events.emit('AFTER_ALL');
}

export function setAsItalic() {
  events.emit('SET_AS_ITALIC');
  events.emit('AFTER_ALL');
}

export function createLink() {
  events.emit('CREATE_LINK');
  events.emit('AFTER_ALL');
}

export function createImageLink() {
  events.emit('CREATE_IMAGE_LINK');
  events.emit('AFTER_ALL');
}

export function createQuote() {
  events.emit('CREATE_QUOTE');
  events.emit('AFTER_ALL');
}

export function createListUl() {
  events.emit('CREATE_UL_LIST');
  events.emit('AFTER_ALL');
}

export function createListOl() {
  events.emit('CREATE_OL_LIST');
  events.emit('AFTER_ALL');
}

export function createCodeBlock() {
  events.emit('CREATE_CODE_BLOCK');
  events.emit('AFTER_ALL');
}

export function createHeader() {
  events.emit('CREATE_HEADER');
  events.emit('AFTER_ALL');
}

export function createTable() {
  events.emit('CREATE_TABLE');
  events.emit('AFTER_ALL');
}


export default events;
