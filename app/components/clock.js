import clock from "clock";
import { preferences } from "user-settings";

import * as document from "document";
import * as util from "../../common/utils";
import { KEY_DISPLAY_SECONDS } from '../../common/constants';

export default class Clock {
  constructor() {
    this.time = document.getElementById("time");
    this.date = document.getElementById("date");
    this.timeSecs = document.getElementById("timeSecs");
  }

  setDisplaySeconds(displaySeconds) {
    clock.granularity = displaySeconds ? 'seconds' : 'minutes';
    this.timeSecs.style.opacity = displaySeconds ? 1 : 0;
  }

  init(connector) {
    this.setDisplaySeconds(connector.getValue(KEY_DISPLAY_SECONDS));

    clock.ontick = (evt) => {
      let today = evt.date;
      let hours = today.getHours();
      if (preferences.clockDisplay === "12h") {
        hours = hours % 12 || 12;
      } else {
        hours = util.zeroPad(hours);
      }
      let mins = util.zeroPad(today.getMinutes());
      let secs = util.zeroPad(today.getSeconds());
      const sideTextX = hours.toString().length > 1 ? 284 : 260;
      this.time.text = `${hours}:${mins}`;
      this.timeSecs.text = secs;
      this.timeSecs.x = sideTextX;

      const date = new Date();
      const day = date.getDate();
      const dayOfWeek = util.dayOfWeek(date.getDay());
      const monthName = util.nameOfMonth(date.getMonth());
      this.date.text = `${dayOfWeek}, ${monthName} ${day}`;
    }
  }

  static instance = new Clock();

  static run(connector) {
    Clock.instance.init(connector);
  }
}