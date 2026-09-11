export function omit<ObjectType extends object, Key extends keyof ObjectType>(
  object: ObjectType,
  keys: Key | Key[],
): Omit<ObjectType, Key> {
  const keysToOmit = new Set(Array.isArray(keys) ? keys : [keys]);

  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !keysToOmit.has(key as Key)),
  ) as Omit<ObjectType, Key>;
}