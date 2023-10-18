const dummyAsObject = {
  name: 'first',
  children: {
    1: {
      id: 1,
      name: 'xis',
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
  },
};

const babyDummy = {
  name: 'dfasf',
  children: {
    1: {
      name: 'asdas',
      children: {
        1: {
          name: 'adasd',
          children: {
            1: {
              name: 'ultimo',
            },
          },
        },
      },
    },
    2: {
      name: 'segundo',
      children: {
        1: {
          name: 'filho do segundo',
        },
      },
    },
  },
};

function flatten(node, list = []) {
  if (!node.children) {
    list.push(node);
    return;
  }

  const childrenKeys = Object.keys(node.children);

  const {children, ...nodeContent} = node;

  list.push(nodeContent);

  for (let key of childrenKeys) {
    flatten(node.children[key], list);
  }

  return list;
}

console.log(flatten(dummyAsObject));
