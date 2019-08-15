import {isEmpty} from "./is";

export {
    isEmpty, isObject, isValidMin, isValidMax, isValidMaxLength, isValidMinLength, isNumber, isValidPattern, isEmail, isRequired,
    normalizeToString
}from './is';

export {shallowEqual} from './shalowEqueal';
export {mergeDeep} from './mergeDeep';
export {updateValue} from './updateValue';
export {getValue} from './getValue';
export {mutateOnPath} from './mutateOnPath';
export {withChangeOnPath} from './withChangeOnPath';
export {pathWithChildren} from './pathWithChildren';
export {getOnPath} from './getOnPath';

export const parseIntOrNull = (value) => !isEmpty(value) ? parseInt(value) : null;
export const parseFloatOrNull = (value) => !isEmpty(value) ? parseFloat(value) : null;