import { BrowserRouter, Route } from "react-router-dom";

import App from "./pages/Landing/App";
import Profile from "./pages/Profile/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default Routes;
