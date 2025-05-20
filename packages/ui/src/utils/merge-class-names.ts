import cls from "@fvilers/cls";

/**
 * React aria allows className to either be a string or a function that returns a string.
 * When using a function, it receives an object with the default class name and other such as the component state.
 * This function handles both cases and merges the default class with the user-provided class.
 */
export function mergeClassNames<T extends object>(
  defaultClass: string,
  userClassName?:
    | ((values: T & { defaultClassName?: string }) => string)
    | string,
): (values: T & { defaultClassName?: string }) => string {
  if (typeof userClassName === "function") {
    return (values) => cls(defaultClass, userClassName(values));
  }
  return () => cls(defaultClass, userClassName);
}
