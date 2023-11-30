// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function objectToDoubleQuotedString(obj) {
    if (typeof obj === 'string') {
        return `"${obj.replace(/"/g, '\\"')}"`;
    }
    else if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            const result = obj.map((element) => objectToDoubleQuotedString(element));
            return `[${result.join(', ')}]`;
        }
        else {
            const parts = Object.entries(obj).map(([key, value]) => {
                if (typeof value === 'string') {
                    // eslint-disable-next-line no-param-reassign
                    value = processAndQuoteText(value);
                }
                return `"${key}":${objectToDoubleQuotedString(value)}`;
            });
            return `{${parts.join(', ')}}`;
        }
    }
    else {
        return String(obj);
    }
}
function processAndQuoteText(text) {
    const regex = /`([^`]+)`/g;
    const convertText = text.replace(regex, (_match, group) => {
        const insideBackticks = group.replace(/\n/g, ' ').replace(/\r/g, '');
        return `'${insideBackticks}'`;
    });
    return convertText.replace(/\s+/g, ' ').trim();
}
