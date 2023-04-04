export interface Order{
  id?: number | null;
  fullName: string;
  mobilePhone: string;
  city: string;
  mail: string;
  mailAddress: string;
  email: string;
  price: number;
  products: Array<number>;
}
