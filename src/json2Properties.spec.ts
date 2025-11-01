import { json2Properties } from "./json2Properties";

describe("json2Properties", () => {
  it("Should convert JSON blob", () => {
    const given = {
      firstKey: 321,
      secondKey: {
        anotherKey: {
          actualValue: true,
        },
        somethingElse: "Hello",
      },
    };

    const actual = json2Properties(given);

    expect(actual[0]).toStrictEqual({
      key: "firstKey",
      value: 321,
    });
    expect(actual[1]).toStrictEqual({
      key: "secondKey.anotherKey.actualValue",
      value: true,
    });
    expect(actual[2]).toStrictEqual({
      key: "secondKey.somethingElse",
      value: "Hello",
    });
  });

  it("Should throw exception when given an invalid type", () => {
    const given = {
      invalidType: undefined,
    };

    expect(() => {
      json2Properties(given);
    }).toThrow(new Error("Invalid type given for parameter"));
  });
});
