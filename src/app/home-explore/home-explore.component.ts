import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardComponent } from '../app-card/app-card.component';
import { MotorbikeProfile } from '../motorbike-profile';
import { MotorbikeCategoryEnum } from '../motorbike-category-enum';
import { EngineSizeEnum } from '../engine-size-enum';
import { FuelTypeEnum } from '../fuel-type-enum';
import { GearTypeEnum } from '../gear-type-enum';

@Component({
  selector: 'app-home-explore',
  standalone: true,
  imports: [CommonModule, AppCardComponent],
  templateUrl: './home-explore.component.html',
  styleUrl: './home-explore.component.css',
})
export class HomeExploreComponent {
  motorbikes: MotorbikeProfile[] = [
    {
      bikeId: 'PCX0001',
      brandName: 'Honda',
      modelName: 'PCX',
      category: MotorbikeCategoryEnum.HOME_USE,
      engineSize: EngineSizeEnum.SIZE_160,
      year: 2022,
      color: 'น้ำเงิน',
      mileage: 12095,
      fuelType: FuelTypeEnum.GASOHOL,
      gearType: GearTypeEnum.AUTOMATIC,
      pricePerMonth: 2300,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uhub.co.th%2Fbranch%2Fmbk%2Fmotor%2FdmpNcnNhdGNqWEcxMWZuU2wrL25EQT09&psig=AOvVaw3bQZGzBKdjFy8dqnZQGaiP&ust=1732346957124000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjc5Lq174kDFQAAAAAdAAAAABAE',
      minimumRentalPeriod: 12,
      specialities: ['เปลี่ยนเฟืองขาวแล้ว', 'แต่งโคมไฟหน้า rgb'],
      description: '-',
      available: true,
      contractId: null,
    },
    {
      bikeId: 'WVE0001',
      brandName: 'Honda',
      modelName: 'Wave',
      category: MotorbikeCategoryEnum.HOME_USE,
      engineSize: EngineSizeEnum.SIZE_125,
      year: 2021,
      color: 'น้ำเงิน',
      mileage: 21542,
      fuelType: FuelTypeEnum.GASOHOL,
      gearType: GearTypeEnum.GEAR,
      pricePerMonth: 1800,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.srisomboongroup.com%2Fproduct%2F145730&psig=AOvVaw1IjaINIs3BURkWxUN07usU&ust=1732347195135000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi9iKy274kDFQAAAAAdAAAAABAE',
      minimumRentalPeriod: 12,
      specialities: [],
      description: '-',
      available: true,
      contractId: null,
    },
    {
      bikeId: 'SCP0001',
      brandName: 'Honda',
      modelName: 'Scoopy',
      category: MotorbikeCategoryEnum.HOME_USE,
      engineSize: EngineSizeEnum.SIZE_110,
      year: 2021,
      color: 'ขาว-ชมพู',
      mileage: 14620,
      fuelType: FuelTypeEnum.GASOHOL,
      gearType: GearTypeEnum.AUTOMATIC,
      pricePerMonth: 1800,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.srisomboongroup.com%2Fproduct%2F146610&psig=AOvVaw2wx8R7sbq0JGWaN_wh2N6a&ust=1732347391538000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjY9Im374kDFQAAAAAdAAAAABAE',
      minimumRentalPeriod: 12,
      specialities: [],
      description: '-',
      available: true,
      contractId: null,
    },
  ];
}
