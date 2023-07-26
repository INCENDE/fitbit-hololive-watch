import document from "document";
import { battery, charger } from "power";
import Connector from "../connector";
import { KEY_DISPLAY_BATTERY } from "../../common/constants";
import { display } from "display";

export default class Battery {
  constructor() {
    this.txtBattery = document.getElementById("battery");
    this.imgBattery = document.getElementById("battery_img");

    this.watchBattery();
    this.watchCharger();
  }

  update() {
    if (!Connector.instance.getValue(KEY_DISPLAY_BATTERY)) {
      this.hideIcon();
      this.hideText();
      return;
    }

    this.showIcon();
    this.showText();

    let batteryChargeLevel = Math.floor(battery.chargeLevel);
    if (batteryChargeLevel > 95) {
      this.imgBattery.href = "icons/battery_solid_24px.png";
    }
    else if (batteryChargeLevel > 66) {
      this.imgBattery.href = "icons/battery_solid_75_24px.png";
    }
    else if (batteryChargeLevel > 33) {
      this.imgBattery.href = "icons/battery_solid_50_24px.png";
    }
    else if (batteryChargeLevel > 15) {
      this.imgBattery.href = "icons/battery_solid_25_24px.png";
    }
    else {
      this.hideIcon();
    }

    this.txtBattery.text = `${batteryChargeLevel}%`;
  }

  start() {
    if (this.interval != null) return;

    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    if (this.interval == null) return;

    clearInterval(this.interval);
    this.interval = null;
  }

  watchBattery() {
    display.addEventListener("change", () => {
      if (display.on) {
        this.start();
      }
      else {
        this.stop();
      }
    });
  }

  watchCharger() {
    charger.addEventListener("change", () => {
      if (charger.connected) {
        this.hideIcon();
      } else {
        this.showIcon();
      }
    });
  }

  hideIcon() {
    this.imgBattery.style.display = "none";
  }

  showIcon() {
    this.imgBattery.style.display = "inline";
  }

  hideText() {
    this.txtBattery.style.display = "none";
  }

  showText() {
    this.txtBattery.style.display = "inline";
  }

  static run() {
    let battery = new Battery();

    battery.start();
  }
}