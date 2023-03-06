export interface Glass{

  id: number;
  name: string;
  description: string;
  price: number;
  material: string;
  size: Map<string,string>;
  complect: Array<string>;
  image: string;
}
