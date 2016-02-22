export default class FileState {
  constructor(filename, contents) {
    this.name = filename.replace(/^.*[\\\/]/, '');
    this.path = filename;
    this.contents = contents ? contents : '';
  }
}
