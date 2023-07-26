import * as document from "document";
import { display } from "display";

export default class Background {
  constructor() {
    this.backgroundHolder = document.getElementById('background-holder');
    this.totalFrames = this.backgroundHolder.children.length;
    this.frameCounter = 1;
    
    this.showFrame(this.frameCounter);
    this.start();

    display.addEventListener("change", () => {
      if (display.on) {
        this.start();
      }
      else {
        this.stop();
      }
    });
  }

  start() {
    if (this.interval != null) return;

    this.update();
    this.interval = setInterval(() => this.update(), 100);
  }

  stop() {
    if (this.interval == null) return;

    clearInterval(this.interval);
    this.interval = null;
  }

  incrementFrameCounter() {
    this.frameCounter = (this.frameCounter % this.totalFrames) + 1;
  }

  hideFrame(id) {
    document.getElementById(`background-image-${id}`).style.opacity = 0;
  }

  showFrame(id) {
    document.getElementById(`background-image-${id}`).style.opacity = 1;
  }

  update() {
    const previousFrameCounter = this.frameCounter;
    this.incrementFrameCounter();
    // console.log(`Background: Update: Hide ${previousFrameCounter}, Show ${this.frameCounter}`);
    this.showFrame(this.frameCounter);
    this.hideFrame(previousFrameCounter);
  }
}
