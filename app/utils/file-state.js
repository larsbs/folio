export default class FileState {

  constructor(filename, contents) {
    this.name = filename ? filename.replace(/^.*[\\\/]/, '') : 'Untitled';
    this.path = filename;
    this._contents = contents ? contents : '';
    this.saved = true;
  }

  set contents(contents) {
    if (this._contents !== contents) {
      this.saved = false;
    }
    this._contents = contents;
  }

  get contents() {
    return this._contents;
  }

}
