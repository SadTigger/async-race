export interface AttributesModel {
  name: string;
  value: string;
}

// Usage:
// constructor(someVars: type,private option: AttributesModel )
// super('tag',[classList], [
//   { name: option.name, value: option.value }
// ])
//
// constructor(private options: AttributesModel[] = [{name: 'name', value: 'value'}]) {
//   super('tag', [classList], [...options]);
// }
