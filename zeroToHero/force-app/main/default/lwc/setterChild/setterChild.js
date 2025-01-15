import { LightningElement, api } from "lwc";

export default class SetterChild extends LightningElement {
  modifiedData;

  @api
  get User() {
    return this.modifiedData;
  }

  set User(data) {
    let newAge = data.age * 2;
    this.modifiedData = { ...data, age: newAge }; // creating copoy of parent data and overwiritng age with new age;
  }
}
