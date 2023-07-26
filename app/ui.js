import document from 'document';
import { display } from 'display';

import Calories from './components/calories';
import HeartRate from './components/heartrate';
import Steps from './components/steps';
import Distance from './components/distance';
import Connector from './connector';
import { KEY_COLOR } from "../common/constants"

export default class UI {
  static instance = new UI();

  constructor() {
    this.statComponentCounter = 0;
    this.statComponentList = [
      new Steps(),
      new Calories(),
      new Distance(),
      new HeartRate(),
    ];

    this.hasStarted = false;
    this.startCurrentComponent();

    this.colorConfigurableElements = document.getElementsByClassName('color-changeable');
    document.getElementById('tapzone').onclick = this.onClick.bind(this);
    display.addEventListener("change", () => {
      if (display.on) {
        this.startCurrentComponent();
      } else {
        this.stopCurrentComponent();
      }
    });
  }

  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }

  restore() {
    this.updateColor(Connector.instance.getValue(KEY_COLOR));
    this.startCurrentComponent();
  }

  onClick() {
    this.stopCurrentComponent();
    this.statComponentCounter = (this.statComponentCounter + 1) % this.statComponentList.length;
    this.startCurrentComponent();
  }

  startCurrentComponent() {
    if (this.hasStarted) return;
    this.statComponentList[this.statComponentCounter].start();
    this.hasStarted = true;
  }

  stopCurrentComponent() {
    if (!this.hasStarted) return;
    this.statComponentList[this.statComponentCounter].stop();
    this.hasStarted = false;
  }
}