export const tertiaryOptions = {
    'pod-yaml': [
        {
            value: 'default-cluster-option',
            label: 'A simple busybox pod.',
            usage: 'kubectl create -f pod.yaml',
            nb: 'Get pod.yaml from \n\ncurl -O https://raw.githubusercontent.com/orsenthil/kubernetes-library/master/cka-practice/pods/pod.yaml \n\n This is a simple busybox pod. It is a good starting point for learning how to use kubectl.',
        },
    ],
    'install-kubectl': [
        {
            value: 'install-kubectl-linux',
            label: 'Install kubectl on Linux',
            usage: 'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n\nchmod +x ./kubectl \n\nsudo mv ./kubectl /usr/local/bin/kubectl \n\nkubectl version --client',
            nb: 'This installs kubectl.\nYou must use a kubectl version that is within one minor version difference of your cluster. For example, a v1.25 client can communicate with v1.24, v1.25, and v1.26 control planes',
        },
        {
            value: 'install-kubectl-v122-linux',
            label: 'Install kubectl v1.22 on Linux',
            usage: 'curl -LO "https://dl.k8s.io/release/v1.22.0/bin/linux/amd64/kubectl"\n\nchmod +x ./kubectl \n\nsudo mv ./kubectl /usr/local/bin/kubectl \n\nkubectl version --client',
            nb: 'This installs kubectl v1.22.\nYou must use a kubectl version that is within one minor version difference of your cluster. For example, a v1.22 client can communicate with v1.21, v1.22, and v1.23 control planes',
        },
    ],
    'get-pods-not-running': [
        {
            value: 'get-pods-not-running',
            label: 'Get pods not running',
            usage: 'kubectl get pods --field-selector=status.phase!=Running --sort-by=.status.startTime',
            nb: 'This command lists all pods in all namespaces.',
        },
    ],
    'get-pods-running': [
        {
            value: 'get-pods-running',
            label: 'Get pods running',
            usage: 'kubectl get pods --field-selector=status.phase=Running --sort-by=.status.startTime',
            nb: 'This command lists all pods in all namespaces.',
        },
    ],
    'get-pods-all-namespaces': [
        {
            value: 'get-pods-all-namespaces',
            label: 'Get pods in all namespaces',
            usage: 'kubectl get pods --all-namespaces',
            nb: 'This command lists all pods in all namespaces.',
        },
    ],
    'get-endpoints': [
        {
            value: 'get-endpoints',
            label: 'Get endpoints',
            usage: 'kubectl get endpoints',
            nb: 'This command lists all endpoints in all namespaces. Endpoints give ip addresses and ports for objects exposed by the services.'
        },
    ],
};
