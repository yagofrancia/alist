const dummyAsObject = {
  name: 'root',
  children: {
    1: {
      name: 'primeiro',
      children: {
        1: {
          name: 'segundo',
          children: {
            1: {
              name: 'terceiro',
              children: {
                997: {
                  name: 'quarto',
                },
                999: {
                  name: 'quarto2',
                },
              },
            },
            2: {
              name: 'pjsdf',
              children: {
                999: {
                  name: '3434',
                },
              },
            },
          },
        },
        2: {
          name: 'primeiro2',
          children: {
            1: {
              name: 'onebutlast',
            },
            999: {
              name: 'last',
            },
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
  if (ids.length === 1 || !node.children) {
    return node;
  }

  return getNodeById(node.children, ids.slice(1));
}

function getLatestChildId(node) {
  const keys = Object.keys(node.children).map(Number);
  const idMax = Math.max(...keys);
  return idMax;
}

// console.log(suggestNewParent([1, 2]));

console.log(getNodeById(dummyAsObject.children, [1, 1, 1]));
