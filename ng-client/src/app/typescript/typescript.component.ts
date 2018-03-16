import { Component, OnInit } from '@angular/core';

import { Person, Product } from './demo-type';
import { PERSONS, PRODUCTS } from './demo-array';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  
  result: string;
  btnStatePerson: boolean = false;
  btnStateProduct: boolean = false;
  
  persons: Person[] = PERSONS;
  products: Product[] = PRODUCTS;
  
  user = { firstName: "Petr", lastName: "Santana" };
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  
  constructor() {}
  
  ngOnInit() {
    console.log("Debuger => ");
  }
  
  fail(): any {
    return Error("Something failed");
  }

  
  getPerson(person: Person): any {
    return "Ahoj " + person.firstName + " " + person.lastName;
  }

  // show person or products and set state after click
  showPersons(): void {
    this.btnStatePerson = !this.btnStatePerson;
  }
  
  showProducts(): void {
    this.btnStateProduct = !this.btnStateProduct;
  }
  
  // set buton against to btnState parameter
  setBtn(btn: string) {
    if (btn == "person") {
      return this.btnStatePerson ? "Hide persons" : "Show persons"; 
    } else if (btn == "product") {
      return this.btnStateProduct ? "Hide products" : "Show products";
    }
  }
  
  // set icon if it's sold
  setIcon(isSold: boolean): any {
    if (isSold) {
      return "minus-circle";
    } else {
      return "check";
    }
  }
}
