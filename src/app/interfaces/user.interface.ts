export interface User {
  id: number;
  imageurl: string;
  fullname: string;
  email: string;
  companyfields: Field[];
  personalfields: Field[];
}

export interface Field {
  name: string;
  data: string;
}
