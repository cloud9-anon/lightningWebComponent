import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
  carList = ["Maruti", "Toyota", "Honda", "Suzuki", "Mazda"];

  ceo = [
    {
      id: 1,
      name: "Rohan",
      company: "Zerotohero"
    },
    {
      id: 2,
      name: "Sundar",
      company: "Google Inc."
    },
    {
      id: 3,
      name: "Tim",
      company: "Apple Inc."
    }
  ];
}