import {updateValue, withChangeOnPath} from "../src";

test('with new object inserted on path', () => {
    const source = {first: 1, second: {test: [1, 2, 3, 4, 5]}};
    const result = updateValue(source, ['foo', 'bar'], 'baz');
    // not mutated source
    expect(result).not.toBe(source);
    // has expected new values on path
    expect(result).toStrictEqual({...source, foo: {bar: 'baz'}});
    // others are the same
    expect(result.first).toBe(source.first);
    expect(result.second).toBe(source.second);
});

test('change existing value on path', () => {
    const source = {first: 1, second: {test: [1, 2, 3, 4, 5]}, foo: {bar: 'baz'}};
    const result = updateValue(source, ['foo', 'bar'], 'changed');

    expect(result).toStrictEqual({...source, foo: {bar: 'changed'}});
    expect(result.foo).not.toBe(source.foo);
});

test ('change simple', () => {
    expect(updateValue({}, 'foo', 'bar')).toStrictEqual({foo: 'bar'});
});

