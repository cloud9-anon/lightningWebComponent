import { LightningElement } from "lwc";

export default class ChildModalComponent extends LightningElement {
  dispatchHandler() {
    const myEvent = new CustomEvent("close");
    this.dispatchEvent(myEvent);
  }
}
