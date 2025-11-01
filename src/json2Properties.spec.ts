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
      key: "secondKey.anotherKey.actual",
      value: true,
    });
    expect(actual[2]).toStrictEqual({
      key: "secondKey.sopmethingElse",
      value: "Hello",
    });
  });
});
