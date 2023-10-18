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
