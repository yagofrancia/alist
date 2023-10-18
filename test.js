const dummyAsObject = {
  1: {
    id: 1,
    children: {
      1: {
        name: 'um',
        children: {
          1: {
            children: {
              998: {
                id: 998,
                name: 'novenoveoito',
              },
              999: {
                id: 999,
                name: 'novenovenove',
              },
            },
          },
        },
      },
      2: {
        children: {
          1: {
            name: '',
          },
          999: {
            name: 'nonoonnono',
          },
        },
      },
    },
  },
};

function suggestNewParent(parentIndex) {
  const parent = getNodeById(dummyAsObject, parentIndex);
  if (!parent.children) {
    return {parent: parentIndex, children: [...parentIndex, 1]};
  }
  const latestChildId = getLatestChildId(parent);

  if (latestChildId === 999) {
    return suggestNewParent(parentIndex.slice(0, parentIndex.length - 1));
  } else {
    return {parent: parentIndex, children: [...parentIndex, latestChildId + 1]};
  }
}

function getNodeById(nodes, ids) {
  const node = nodes[ids[0]];
  if (ids.length === 1) return node;

  return getNodeById(node.children, ids.slice(1));
}

function getLatestChildId(node) {
  const keys = Object.keys(node.children).map(Number);
  const idMax = Math.max(...keys);
  return idMax;
}

console.log(suggestNewParent([1, 2]));
