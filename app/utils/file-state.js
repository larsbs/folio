export default class FileState {

  constructor(filename, contents) {
    this.name = filename ? filename.replace(/^.*[\\\/]/, '') : 'Untitled';
    this.path = filename;
    this._contents = contents ? contents : '';
    this._saved = filename ? true : false;
    this._lastSavedContents = this._contents;
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

  set saved(saved) {
    this._lastSavedContents = this._contents;
    this._saved = saved;
  }

  get saved() {
    return this._saved;
  }

  restoreLastSavedContents() {
    this._contents = this._lastSavedContents;
    this._saved = true;
  }

}
