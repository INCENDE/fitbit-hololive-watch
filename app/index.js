import Battery from "./components/battery";
import Clock from "./components/clock";
import Messaging from "./components/messaging";

import Background from "./background";
import Connector from "./connector";
import UI from "./ui";

const bg = new Background();
UI.instance.restore();

Battery.run();
Clock.run(Connector.instance);
Messaging.run();