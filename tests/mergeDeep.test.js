import {mergeDeep} from "../src";

test('merge deep', () => {
    const original = {
        number: 1,
        string: 'string',
        array: [1, 'string'],
        nested: {
            number: 2,
            string: 'string2',
        },
    };

    const result = mergeDeep(original, {
        string: 'newstring',
        array: [],
        nested: {
            number: 100
        }
    });

    expect(result).toStrictEqual({
        number: 1,
        string: 'newstring',
        array: [],
        nested: {
            number: 100,
            string: 'string2',
        },
    });

    // test if nested object is cloned
    result.nested.number = 999;
    // if original will not change
    expect(original.nested.number).toBe(2);
});

test('merge deep without change', () => {
    const original = {
        number: 1,
        string: 'string',
        array: [1, 'string'],
        nested: {
            number: 2,
            string: 'string2',
        },
    };

    const result = mergeDeep(original, {});

    expect(result).toBe(original);
});

test('merge deep two arrays', () => {
    const original = {
        array: [1, 'string'],
        foo: 'bar'
    };
    const newValues = {array: [2,3,1], foo: ['baz']};

    const result = mergeDeep(original, newValues);

    expect(
    {array: [2,3,1], foo: ['baz']}
    ).toStrictEqual(newValues);
});


test('merge deep containing two arrays', () => {
    const original = {
        array: [1, 'string'],
        foo: 'bar',
        baz: null
    };
    const newValues = {array: [2,3,1], foo: ['baz']};

    const result = mergeDeep(original, newValues);

    expect(result).toStrictEqual({array: [2,3,1], foo: ['baz'], baz: null});
});


test('merge deep containing function', () => {
    const original = {fce: () => 'foo'};
    const newValues = {fce: () => 'bar'};

    const result = mergeDeep(original, newValues);

    expect(result).toStrictEqual(newValues);

    //- but not `===` equal
    expect(result).not.toBe(newValues);
});
