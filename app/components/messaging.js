import * as messaging from "messaging";
import Connector from "../connector";
import UI from "../ui";
import Clock from './clock';
import { KEY_COLOR, KEY_DISPLAY_SECONDS } from "../../common/constants";

export default class Messaging {
  static run() {
    const connector = Connector.instance;
    const ui = UI.instance;

    messaging.peerSocket.onopen = () => {
      console.log("App Socket Open");
    };

    messaging.peerSocket.onclose = () => {
      console.log("App Socket Closed");
    };

    messaging.peerSocket.onmessage = evt => {
      console.log(evt.data.key + " : " + evt.data.newValue);
      if (!evt.data.newValue) return;
      try {
        const data = JSON.parse(evt.data.newValue);
        connector.setValue(evt.data.key, data);
      } catch (e) {
        console.warn("Failed to parse message: " + evt.data);
        return;
      }

      switch (evt.data.key) {
        case KEY_COLOR: {
          ui.updateColor(data);
          break;
        }
        case KEY_DISPLAY_SECONDS: {
          Clock.instance.setDisplaySeconds(data);
          break;
        }
      }
    };
  }
}