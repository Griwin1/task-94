import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    // update the emojis array
    this.emojis = emojis;

    // get the emojis wrapper div from the DOM (id="emojis" in HTML)
    const emojisWrapperDiv = document.getElementById("emojis");

    // create new paragraph
    const para = document.createElement("p");
    // set the text content of the new paragraph to be equal to the new emojis array (parameter)
    para.textContent = this.emojis;

    // add the new paragraph element to the emojis wrapper div
    emojisWrapperDiv.replaceChildren(para);
  }

  addBananas() {
    const monkeysWithBananas = this.emojis.map((monkey) => {
      return monkey + this.banana;
    })
    this.setEmojis(monkeysWithBananas)
  }
}
