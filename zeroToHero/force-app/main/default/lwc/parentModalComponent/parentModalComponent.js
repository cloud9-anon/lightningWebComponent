import { LightningElement } from "lwc";

export default class ParentModalComponent extends LightningElement {
  showModal;

  clickHandler() {
    this.showModal = true;
  }
  closeHandler() {
    this.showModal = false;
  }
}
