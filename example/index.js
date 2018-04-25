import Mhr from "menhera";
import Message from "../src";

Mhr.$use({
  _mount: {
    Message
  },
  messages: {
    test: {
      success() {
        console.log("success");
      },
      fail() {
        console.log("fail");
      }
    },
    hello: {
      _: ({ _val }) => console.log(`${_val} world`)
    }
  }
}).$use({
  Message: {
    test: {
      success: ""
    },
    hello: "hello"
  }
});
