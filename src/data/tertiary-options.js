export const tertiaryOptions = {
  'default-cluster': [
    {
      value: 'default-cluster-option',
      label: 'a default cluster',
      usage: 'eksctl create cluster',
      nb: 'Creates an EKS cluster with two managed nodes.\n\nKubernetes API endpoint access will use default of {publicAccess=true, privateAccess=false} for cluster.\n\nCloudWatch logging is not enabled.'
    },
    {
        value: 'default-cluster-dry-run',
        label: 'dry run',
        usage: 'eksctl create cluster --dry-run',
        nb: 'Prints eksctl cluster manifest yaml to stdout without creating the cluster.'
    },
  ],
    'addon': [

    ],

    'fargate-profile': [

    ],

    'iamserviceaccount': [

    ],

    'nodegroup': [

    ],

    'iamidentitymapping': [

    ],

};
