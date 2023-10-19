const dummy1 = {
  name: 'root',
  isRevenue: true,
  launch: false,
  children: {
    1: {
      name: 'primeiro',
      isRevenue: true,
      launch: false,
      children: {
        1: {
          name: 'segundo',
          isRevenue: true,
          launch: false,
          children: {
            1: {
              name: 'terceiro',
              isRevenue: true,
              launch: false,
              children: {
                999: {
                  name: 'quarto2',
                  isRevenue: true,
                  launch: false,
                },
              },
            },
            2: {
              name: 'pjsdf',
              isRevenue: true,
              launch: false,
              children: {
                1: {
                  name: '3434',
                  isRevenue: true,
                  launch: false,
                },
              },
            },
          },
        },
        2: {
          name: 'primeiro2',
          isRevenue: true,
          launch: false,
          children: {
            999: {
              name: 'last',
              isRevenue: true,
              launch: false,
            },
          },
        },
      },
    },
  },
};

function suggestNodes(parentIndex) {
  const parent = getNodeById(dummy1.children, parentIndex);
  if (!parent.children) {
    return {parent: parentIndex, children: [...parentIndex, 1]};
  }
  const latestChildId = getLatestChildId(parent);

  if (latestChildId === 999) {
    return suggestNodes(parentIndex.slice(0, parentIndex.length - 1));
  } else {
    return {parent: parentIndex, children: [...parentIndex, latestChildId + 1]};
  }
}

function suggestNodes2(parentIndex, rootNode) {
  const parent = getNodeById(rootNode, parentIndex);
  if (!parent.children) {
    return {parent: parentIndex, children: [...parentIndex, 1]};
  }
  const latestChildId = getLatestChildId(parent);

  if (latestChildId === 999) {
    return suggestNodes2(
      parentIndex.slice(0, parentIndex.length - 1),
      rootNode,
    );
  } else {
    return {parent: parentIndex, children: [...parentIndex, latestChildId + 1]};
  }
}

function getNodeById(nodes, ids) {
  const node = nodes[ids[0]];
  if (ids.length === 1 || (node && !node.children)) {
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

// console.log(getNodeById(dummyAsObject.children, [1, 1, 1]));

console.log(suggestNodes2([1, 1, 1], dummy1.children));
