type NodeAccount = {
  name: string;
  children?: Record<string, Node>;
};

type Account = {
  name: string;
  code: Array<number>;
};
