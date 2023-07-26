import { HeartRateSensor } from "heart-rate";
import document from "document";

export default class HeartRate {
  constructor() {
    this.hrm = new HeartRateSensor();
    this.hrm.addEventListener("reading", () => {
      this.txtHeartRate.text = this.hrm.heartRate;
    });
    
    this.txtHeartRate = document.getElementById('heartrate');
    this.imgHeartRate = document.getElementById('heartrate_img');

    this.txtHeartRate.text = "--";

    this.stop();
  }

  show() {
    this.txtHeartRate.style.opacity = 1;
    this.imgHeartRate.style.opacity = 1;
  }

  hide() {
    this.txtHeartRate.style.opacity = 0;
    this.imgHeartRate.style.opacity = 0;
  }

  start() {
    this.show();
    this.hrm.start();
  }

  stop() {
    this.hide();
    this.hrm.stop();
  }
}