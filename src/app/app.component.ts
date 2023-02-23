import { Component } from "@angular/core";

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number){
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  text: string = "";
  price: number = 0;

  items: Item[] =
  [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Сосиска в тесте", done: false, price: 17.5 },
    { purchase: "Кола", done: false, price: 25 },
  ];

  addItem(text: string, price: number): void {
    if(text == null || text.trim() == "" || price == null)
      return;
    this.items.push(new Item(text, price));
  }

  removeDoneItems(): void {
    this.items = this.items.filter(item => !item.done);
  }
}
