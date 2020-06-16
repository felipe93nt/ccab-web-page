import { CompanyModel } from './company-model';
import { AddressModel } from './address-model';

export class UserModel {

  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}
