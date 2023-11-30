// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function argsParserUtils(args) {
    let attr = '';
    for (const key of Object.keys(args)) {
        if ((typeof args[key] === 'string' || typeof args[key] === 'number') &&
            args[key] !== '') {
            attr += ` ${key}="${args[key]}" `;
        }
        else if (typeof args[key] === 'boolean' && args[key]) {
            attr += ` ${key} `;
        }
        else if (typeof args[key] === 'object' && args[key]) {
            attr += ` ${key}='${JSON.stringify(args[key])}' `;
        }
    }
    return attr;
}
