import { Contract } from "./contract";
import { EngineSizeEnum } from "./engine-size-enum";
import { FuelTypeEnum } from "./fuel-type-enum";
import { GearTypeEnum } from "./gear-type-enum";
import { MotorbikeCategoryEnum } from "./motorbike-category-enum";

export interface MotorbikeProfile {
  bikeId: string;
  brandName: string;
  modelName: string;
  category: MotorbikeCategoryEnum;
  engineSize: EngineSizeEnum;
  year: number;
  color: string;
  mileage: number;
  fuelType: FuelTypeEnum;
  gearType: GearTypeEnum;
  pricePerMonth: number;
  image: string;
  minimumRentalPeriod: number; // in month unit
  specialities: string[];
  description: string;
  available: boolean;
  contractId: string | null;
}
