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

function flatten(node, list = [], keys = []) {
  if (!node.children) {
    list.push({...node, code: keys});
    return;
  }

  const childrenKeys = Object.keys(node.children);
  const {children, ...nodeContent} = node;

  list.push({...nodeContent, code: keys});

  for (let key of childrenKeys) {
    flatten(node.children[key], list, [...keys, Number(key)]);
  }

  return list;
}

console.log(flatten(dummyAsObject));
