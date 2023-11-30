export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16;
        r = r | 0;
        let v = c === 'x' ? r : r & 0x3;
        v = v | 0x8;
        return v.toString(16);
    });
}
