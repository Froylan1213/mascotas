import { Component } from '@angular/core'; 
 import {faSearch, faHeart, faHouse,} from '@fortawesome/free-solid-svg-icons';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { FormComponent } from '../../components/form/form.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { Pet } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
 

@Component({
  selector: 'app-home',
  imports: [ CarruselComponent, FormComponent, TestimonialComponent, FontAwesomeModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faSearch=faSearch;
  faHeart=faHeart;
  faHouse=faHouse;
  

  petArray:Pet[]=[];
  randomImg:string[]=[];

  constructor(private petsService:PetsService){}

  fnGetLostPets():Pet[]{
    return this.petsService.fnGetLostPets();
  }
  fnGetHomeLessPets():Pet[]{
    return this.petsService.fnGetHomeLessPets();
  }
  fnGetFound():Pet[]{
    return this.petsService.fnGetFound();
  }

}


