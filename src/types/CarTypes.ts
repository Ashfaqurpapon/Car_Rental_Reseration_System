export type CarTypes = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TCarUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  address: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
