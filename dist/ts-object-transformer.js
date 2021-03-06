"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformObject(src, fieldMap, computedMap) {
    let result = {};
    for (let key in src) {
        let value = src[key];
        let transformedValue;
        if (fieldMap && (key in fieldMap)) {
            let transformer = fieldMap[key];
            if (transformer) {
                transformedValue = transformer(value, src);
            }
            else {
                transformedValue = value;
            }
        }
        else {
            transformedValue = value;
        }
        result[key] = transformedValue;
    }
    if (computedMap) {
        for (let key in computedMap) {
            let transformer = computedMap[key];
            result[key] = transformer(src);
        }
    }
    return result;
}
exports.transformObject = transformObject;
