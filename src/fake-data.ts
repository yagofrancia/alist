export const dummy1: NodeAccount = {
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
