export interface BaseModelConstructor<T> {
  fromMap(data: any): T;
  example(): T;
}