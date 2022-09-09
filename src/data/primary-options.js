const options = [
  { value: 'create', label: 'create a cluster' },
  { value: 'associate', label: 'associate resource' },
  { value: 'revert', label: 'create' },
  { value: 'initialize', label: 'delete' },
  { value: 'modify', label: 'deregister' },
  { value: 'show', label: 'disassociate' },
  { value: 'delete', label: 'drain' },
  { value: 'compareCommits', label: 'enable' },
  { value: 'configure', label: 'get' },
  { value: 'clone', label: 'register' },
  { value: 'ignore', label: 'scale' },
  { value: 'rename', label: 'set' },
  { value: 'merge', label: 'unset' },
  { value: 'squash', label: 'upgrade' },
  { value: 'stash', label: 'utils' },
  { value: 'debug', label: 'version' },
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
