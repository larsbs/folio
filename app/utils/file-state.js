export default class FileState {
  constructor(filename, contents) {
    this.name = filename ? filename.replace(/^.*[\\\/]/, '') : 'Untitled';
    this.path = filename;
    this.contents = contents ? contents : '';
  }
}
