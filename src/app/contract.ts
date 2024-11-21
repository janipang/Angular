import { Customer } from "./customer";
import { MotorbikeProfile } from "./motorbike-profile";

export interface Contract {
  createdAt: Date;
  activationDate: Date;
  terminationDate: Date;
  customer: Customer;
  motorbike: MotorbikeProfile;
  termsAndConditions: string[];
  remarks: string[];
  customerAccepted: boolean;
  ownerAccepted: boolean;
}
