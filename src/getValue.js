import {getOnPath} from "./getOnPath";

/**
 * Return's object value of property of give name or path
 *
 * @example getValue({foo: {bar: 'baz'}}, ['foo', 'bar']}
 * // 'baz'
 *
 * @example getValue({foo: 'bar'}, 'foo'}
 * // 'bar'
 *
 * @example getValue({foo: 'bar'}, 'baz'}
 * // undefined
 *
 * @see getOnPath
 *
 * @param {object} object
 * @param {string|string[]} name
 *
 * @returns {*} value for given name or undefined if not exists
 */
export const getValue = (object, name) => {
    if (Array.isArray(name)) {
        return getOnPath(object, name);
    } else {
        return object[name];
    }
};