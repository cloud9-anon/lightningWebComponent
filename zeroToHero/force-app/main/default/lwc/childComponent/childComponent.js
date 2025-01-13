import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  progressValue = 20;

  handleChange(event) {
    this.progressValue = event.target.value;
  }

  @api resetSlider() {
    this.progressValue = 50;
  }
}
