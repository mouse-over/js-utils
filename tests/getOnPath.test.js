import {getOnPath} from "../src";

test('getOnPath existing value', () => {
    expect(getOnPath({foo: {bar: 'baz'}}, ['foo', 'bar'])).toBe('baz');
});

test('getOnPath not existing value', () => {
    expect(getOnPath({foo: 'bar'}, ['bar'])).toBeUndefined();
});

test('getOnPath not existing value container', () => {
    expect(getOnPath({foo: null}, ['foo','bar'])).toBeUndefined();
});

test('getOnPath children', () => {
    const path = [
        "children",
        "expectedSolutions",
        "children",
        0,
        "children",
        "value",
        "valid"
    ];
    const object = {
        "children": {
            "owner": {
                "valid": false,
                "messages": [
                    "Není zadán koncový zákazník"
                ]
            },
            "dateExpected": {
                "valid": false,
                "messages": [
                    "Toto pole je vyžadováno!"
                ]
            },
            "phaseId": {
                "valid": false,
                "messages": [
                    "Toto pole je vyžadováno!"
                ]
            },
            "successProbability": {
                "valid": false,
                "messages": [
                    "Toto pole je vyžadováno!"
                ]
            },
            "expectedSolutions": {
                "valid": true,
                "messages": [],
                "children": {
                    "0": {
                        "children": {
                            "value": {
                                "valid": true,
                                "messages": []
                            }
                        },
                        "valid": true
                    }
                }
            }
        },
        "valid": false
    };
    expect(getOnPath(object, path)).toBe(true);
});