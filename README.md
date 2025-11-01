# json-2-properties
A library to convert JSON files to .properties style object, and back again.

These can be used to write to a file, or be inserted into a runtime.

## Installation
- `npm -i @dev-team-tool/json-2-properties`
- NodeJS 22+

## Usage - converting JSON to properties

You can use it to convert a JSON object into into `Property`. This has two fields on it: `key` and `value`.

For example:
```json
{
  "firstKey": 321,
  "secondKey": {
    "anotherKey": {
      "actualValue": true
    },
    "somethingElse": "Hello"
  }
}
```

Would then become in a `.properties` file:
```properties
firstKey=321
secondKey.anotherKey.actualValue=true
secondKey.somethingElse=true
```

When converted in code, each of these would become:
```javascript
// where givenJson is the example above
const converted = json2Properties(givenJson);

// converted[0].key would be "firstKey"
// converted[0].value would be 123

// converted[1].key = "secondKey.anotherKey.actualValue"
// converted[1].value = true

// converted[2].key = "secondKey.somethingElse"
// converted[2].value = "hello"
```

## Usage - converting properties to JSON
You can call `properties2Json` to convert from properties to JSON. Each `.` of a property becomes another node in the JSON tree.

For example:
```properties
firstKey=321
secondKey.anotherKey.actualValue=true
secondKey.somethingElse=true
```

Would become:
```json
{
  "firstKey": 321,
  "secondKey": {
    "anotherKey": {
      "actualValue": true
    },
    "somethingElse": "Hello"
  }
}
```

When converted in code, each of these would become:
```javascript
const givenProperties: Property[] = getProperties() // maybe read from a file, but converted into Property type
const converted = properties2Json<YourType>(givenProperties); // Providing a type doesn't do a lot, so ensure you use a TypeGuard!

console.log(converted.firstKey) // would print 321
console.log(converted.secondKey.anotherKey.actualValue) // would produce true
console.log(converted.secondKey.somethingElse) // would produce "hello"
```

## Issues
You can raise issues via our [GitHub issues page](https://github.com/dev-team-tools/feature-switches-node/issues).

## Contributing
// TBD
