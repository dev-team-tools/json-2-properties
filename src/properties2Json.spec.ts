import { properties2Json } from "./properties2Json";
import { Property } from "./types";

interface Example {
  firstKey: number;
  secondKey: {
    anotherKey: {
      actualValue: boolean;
    };
    somethingElse: string;
  };
}

describe("propertiesToJson", () => {
  it("Should convert Properties array ", () => {
    const given: Property[] = [
      {
        key: "firstKey",
        value: 321,
      },
      {
        key: "secondKey.anotherKey.actualValue",
        value: true,
      },
      {
        key: "secondKey.somethingElse",
        value: "hello",
      },
    ];

    const actual = properties2Json<Example>(given);

    expect(actual?.firstKey).toStrictEqual(321);
    expect(actual?.secondKey.anotherKey.actualValue).toBeTruthy();
    expect(actual?.secondKey.somethingElse).toBe("hello");
  });

  it("Should return undefined when given empty array", () => {
    const given: Property[] = [];

    const actual = properties2Json<Example>(given);

    expect(actual).toBeUndefined();
  });

  it("Should return undefined when given undefined", () => {
    const given: Property[] = [];

    //@ts-ignore
    const actual = properties2Json<any>(undefined);

    expect(actual).toBeUndefined();
  });

  it("Should return undefined when given null", () => {
    const given: Property[] = [];

    //@ts-ignore
    const actual = properties2Json<any>(null);

    expect(actual).toBeUndefined();
  });
});
