export type Item<
  IdType extends string | number = string | number,
  ValueType extends string | number = string | number,
> = {
  id: IdType;
  value: ValueType;
};