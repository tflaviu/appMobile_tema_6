import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})


export class Tab2Page {
  checkedCars = [];
  text: string;

  selectCar(checked, car) { 
    if (car === 'Dacia') {
      car = 'Dacia - Daca Ai Cap Ia-ti Altceva';
    }

    checked ? this.checkedCars.push(car) : this.checkedCars.splice(this.checkedCars.indexOf(car), 1);
    this.text = this.checkedCars.length ?(this.checkedCars.length > 1 ? 'Imi plac: ' : 'Imi place ') + this.checkedCars.toString() : '';
  }
}
