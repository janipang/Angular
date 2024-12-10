import { Component } from '@angular/core';
import { MotorbikeProfile } from '../motorbike-profile';
import { MotorbikeCategoryEnum } from '../motorbike-category-enum';
import { EngineSizeEnum } from '../engine-size-enum';
import { FuelTypeEnum } from '../fuel-type-enum';
import { GearTypeEnum } from '../gear-type-enum';
import { AppCardComponent } from '../app-card/app-card.component';

@Component({
  selector: 'app-home-favorite',
  standalone: true,
  imports: [AppCardComponent],
  templateUrl: './home-favorite.component.html',
  styleUrl: './home-favorite.component.css',
})
export class HomeFavoriteComponent {
  title: string = "Your Favorites"
  addFavorite(){
    this.favorites.push(this.favorites[0]);
  }

  deleteFavorite(index:number){
    this.favorites.splice(index,1);
  }

  favorites: MotorbikeProfile[] = [
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
    }] 
}
