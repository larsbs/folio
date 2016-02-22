import path from 'path';


export function getName(filename) {
  const dirname = path.dirname(filename);
  return filename.replace(dirname + '/', '');
}


export class FileState {
  constructor(filename, contents) {
    this.name = getName(filename);
    this.path = filename;
    this.contents = contents ? contents : '';
  }
}
