import React from "react";
import "../create-nonce";
import Foo from "./components/Foo";

import "suomifi-ui-components/dist/main.css";
import { Button } from "suomifi-ui-components";

const App = () => {
  return (
    <div>
      <Foo />
      <Button>suomifi-ui-button</Button>
    </div>
  );
};

export default App;
