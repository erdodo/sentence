// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fCloneDeep(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (const item of obj) {
            arrCopy.push(fCloneDeep(item));
        }
        return arrCopy;
    }
    const objCopy = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            objCopy[key] = fCloneDeep(obj[key]);
        }
    }
    return objCopy;
}
