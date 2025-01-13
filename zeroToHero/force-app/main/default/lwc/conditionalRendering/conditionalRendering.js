import { LightningElement } from "lwc";

export default class ConditionalRendering extends LightningElement {
  isVisible = false;

  showDataHandle() {
    this.isVisible = true;
  }
}