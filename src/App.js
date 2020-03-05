import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker"
import AppRouter from "./routers/AppRouter";


export const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
