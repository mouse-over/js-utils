import {isObject} from "./is";

/**
 * Merge two objects deeply together
 *
 * Objects and their values of type objects are merged except Arrays. Arrays are treated as scalar
 *
 * @example mergeDeep({scalar: 1, foo: 'foo'}, {scalar: 2, bar: 'bar'}
 * // {scalar: 2, foo: 'foo', bar: 'bar'}
 *
 * @example mergeDeep({a: [1,2,3]}, {a: [4,5,6]}
 * //  {a: [4,5,6]}
 *
 * @example mergeDeep({f: () => 'foo'}, {f: () => 'bar'}
 * //  {f: () => 'bar'}
 *
 * @param {object} currentObject
 * @param {object} values
 *
 * @returns {object} Result object
 */
export const mergeDeep = (currentObject, values) => {
    const entries = Object.entries(values);

    if (entries.length === 0) {
        // no changes no reason to mutate by spreading object
        return currentObject;
    }

    const newObject = {
        ...currentObject
    };

    entries.forEach(([key, value]) => {
        if (!Array.isArray(value) && isObject(value)) {
            newObject[key] = mergeDeep(newObject[key] || {}, value);
        } else {
            newObject[key] = value;
        }
    });

    return newObject;
};

export default mergeDeep;