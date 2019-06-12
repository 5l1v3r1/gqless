import { File } from '../File'

export class IndexFile extends File {
  constructor() {
    super('index')
  }

  public generate() {
    return `
      ${super.generate()}

      export * from './generated'
    `
  }
}