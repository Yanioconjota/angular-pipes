import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo:string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: 'James Howlett',
    aliases: ['Logan', 'Wolverine'],
    edad: 197,
    direccion: {
      calle: '1407 Graymalkin Lane, Salem Center',
      condado: 'Westchester County',
      Estado: 'NY'
    }
  }
}
