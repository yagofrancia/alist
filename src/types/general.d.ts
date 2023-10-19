type NodeAccount = {
  name: string;
  isRevenue: boolean;
  launch: boolean;
  children?: Record<string, Node>;
};

type Account = {
  name: string;
  code: Array<number>;
  isRevenue: boolean;
  launch: boolean;
};

type FormRef = {
  submitForm: () => void;
};
