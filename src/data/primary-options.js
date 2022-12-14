const options = [
    { value: 'create', label: 'create' },
    { value: 'install', label: 'install' },
    { value: 'get', label: 'get' },
];

export const primaryOptions = options.sort((x, y) => {
    if (x.value < y.value) {
        return -1;
    }
    if (x.value > y.value) {
        return 1;
    }
    return 0;
});
