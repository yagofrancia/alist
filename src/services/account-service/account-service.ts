export function flatten(
  node: NodeAccount,
  list: Array<Account> = [],
  keys: Array<number> = [],
) {
  if (!node.children) {
    list.push({...node, code: keys});
    return list;
  }

  const childrenKeys = Object.keys(node.children);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {children, ...nodeContent} = node;

  list.push({...nodeContent, code: keys});

  for (let key of childrenKeys) {
    flatten(node.children[key], list, [...keys, Number(key)]);
  }

  return list;
}

export function getNodeById(
  nodes: Record<string, NodeAccount>,
  ids: Array<string>,
) {
  const node = nodes[ids[0]];
  if (ids.length === 1 || !node.children) {
    return node;
  }

  return getNodeById(node.children, ids.slice(1));
}

export function getLatestChildId(node: NodeAccount) {
  if (!node.children) {
    throw new Error('This node has no children');
  }
  const keys = Object.keys(node.children).map(Number);
  const idMax = Math.max(...keys);
  return idMax;
}

export function suggestNodes(
  parentIndex: Array<string>,
  rootNode: Record<string, NodeAccount>,
) {
  const parent = getNodeById(rootNode, parentIndex);
  if (!parent.children) {
    return {parent: parentIndex, children: [...parentIndex, 1]};
  }
  const latestChildId = getLatestChildId(parent);

  if (latestChildId === 999) {
    return suggestNodes(parentIndex.slice(0, parentIndex.length - 1), rootNode);
  } else {
    return {parent: parentIndex, children: [...parentIndex, latestChildId + 1]};
  }
}

// suggestNodes([1,1], accounts.children)
