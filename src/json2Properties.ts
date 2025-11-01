import { Property } from "./types";

const traverse = (givenKey: string, given: any): Property[] => {
  console.log(given);
  if (given !== undefined && given !== null && typeof given === "object") {
    return Object.entries(given)
      .map(([key, value]) => {
        const builtKey = givenKey !== "" ? `${givenKey}.${key}` : key;

        return traverse(builtKey, value);
      })
      .flatMap((x) => x);
  } else if (
    typeof given === "number" ||
    typeof given === "string" ||
    typeof given === "boolean"
  ) {
    return [
      {
        key: givenKey,
        value: given,
      },
    ];
  } else {
    throw Error("Invalid type given for parameter");
  }
};

export const json2Properties = (givenJson: any): Property[] => {
  const result = traverse("", givenJson);

  return result;
};
