/**
 * Return's value on given path
 *
 * @example getOnPath({foo: {bar: 'baz'}}, ['foo', 'bar']}
 * // 'baz'
 *
 * @example getOnPath({foo: {bar: 'baz'}}, ['foo']}
 * // {bar: 'baz'}
 *
 * @example getOnPath({foo: {bar: 'baz'}}, ['baz']}
 * // undefined
 *
 * @param {object} object
 * @param {array} path
 *
 * @returns {*} value on given path or undefined if invalid path
 */
export const getOnPath = (object, path) => {
    let leaf = object;
    let index = 0;
    const length = path.length;

    while (leaf !== undefined && index < length) {
        leaf = leaf[path[index++]];
    }

    return leaf;
};