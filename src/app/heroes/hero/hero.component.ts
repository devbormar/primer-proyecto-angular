import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'spiderman';
  public age:  number = 45;

  // Los getter definen métodos como propiedades
  // Desde el HTML debe invocar a la propiedad NO al método
  get capilaizeName(): string {
    return this.name.toUpperCase();
  }
  // Mientras que los métodos deben ser siempre invocados como tales desde el HTML.
  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'ironman';
  }

  changeAge(): void {
    this.age = 23;
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 45;
  }

}
