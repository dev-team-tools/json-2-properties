import { Property } from "./types";

const buildNestedObject = (properties: Property[]): Record<string, any> => {
  const result: Record<string, any> = {};

  for (const { key, value } of properties) {
    const parts = key.split(".");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      // If we're at the last part, assign the value
      if (i === parts.length - 1) {
        current[part] = value;
      } else {
        // Otherwise, ensure the sub-object exists
        if (typeof current[part] !== "object" || current[part] === null) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }

  return result;
};

export const properties2Json = <T>(properties: Property[]): T | undefined => {
  if (
    properties === undefined ||
    properties === null ||
    properties.length === 0
  ) {
    return undefined;
  }

  const built = buildNestedObject(properties);

  return built as T;
};
