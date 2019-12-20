import {getOnPath} from "../src";

test('getOnPath existing value', () => {
    expect(getOnPath({foo: {bar: 'baz'}}, ['foo', 'bar'])).toBe('baz');
});

test('getOnPath not existing value', () => {
    expect(getOnPath({foo: 'bar'}, ['bar'])).toBeUndefined();
});