export const secondaryOptions = {
    create : [
        {
            value: 'pod-yaml',
            label: 'Create a pod using the data in pod.yaml',
        },
    ],
    install : [
        {
            value: 'install-kubectl',
            label: 'Install kubectl',
        },
    ],
    get : [
        {
            value: 'get-pods-not-running',
            label: 'Get pods not running',
        },
        {
            value: 'get-pods-running',
            label: 'Get pods running',
        },
        {
            value: 'get-pods-all-namespaces',
            label: 'Get pods in all namespaces',
        },
        {
            value: 'get-endpoints',
            label: 'Get endpoints',
        }
    ],
};
