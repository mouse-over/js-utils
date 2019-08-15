import {getValue} from "../src";

test('getValue on path', () => {
   expect(getValue({foo: {bar: 'baz'}}, ['foo', 'bar'])).toBe('baz');
});

test('getValue', () => {
   expect(getValue({foo: 'bar'}, 'foo')).toBe('bar');
});