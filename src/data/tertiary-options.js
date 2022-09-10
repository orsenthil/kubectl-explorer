export const tertiaryOptions = {
  'default-cluster': [
    {
      value: 'default-cluster-option',
      label: 'a default cluster',
      usage: 'eksctl create cluster',
      nb: 'Creates a default EKS cluster with a managed nodes.\n\nKubernetes API endpoint access will use default of {publicAccess=true, privateAccess=false} for cluster.\n\n.CloudWatch logging will not be enabled.'
    },
    {
        value: 'default-cluster-dry-run',
        label: 'dry run',
        usage: 'eksctl create cluster --dry-run',
        nb: 'Prints the manifest yaml for the cluster to stdout without creating the cluster.'
    },
  ],
};
