import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = 'Curso Platzi de ANGULAR';

  prodcuts = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Una camiseta de la conferencia del 2019'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 90000,
      description: 'Un sudadero para que te sientas parte del equipo'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 0000,
      description: 'Taza para beber positivismo todos los días'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 10000,
      description: 'Siéntete identificado'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 8000,
      description: 'Chulas, bonitas y adornan tu computadora u otro espacio'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 8000,
      description: 'Chulas, bonitas y adornan tu computadora u otro espacio'
    }
  ];
}
