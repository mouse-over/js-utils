import {mutateOnPath} from "../src";

test('mutate object on path', () => {
    const source = {};
    mutateOnPath(source, ['foo', 'bar'], 'baz');
    expect(source).toStrictEqual({foo: {bar: 'baz'}});
});
