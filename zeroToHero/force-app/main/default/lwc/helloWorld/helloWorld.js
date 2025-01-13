import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  //TODO: Two way binding example on field/property
  name = "John Carter";
  changeHandler(event) {
    this.name = event.target.value;
  }

  //TODO: Two way binding example on object field/property
  address = {
    city: "Melbourne",
    country: "Australia",
    postalcode: "3000",
    state: "Victoria",
    street: "123 Main Street"
  };

  addressHandler(event) {
    //this.address.city = event.target.value; //without @track to address field, this will not work
    this.address = { ...this.address, city: event.target.value }; //without @track to address field, this will  work because lwc will track as new object is creating and assigning not just one key-value pair
  }

  //TODO: Need of Getters
  arr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ];
  get firstItem() {
    return arr[0]; //in lwc template {arr[0]} ,{num1+num2}expression cant render so getters were introduced
  }

  num2 = 0;
  num1 = 0;

  num1Handler(event) {
    this.num1 = parseFloat(event.target.value);
  }

  num2Handler(event) {
    this.num2 = parseFloat(event.target.value);
  }
  get num3() {
    return this.num1 + this.num2;
  }
}