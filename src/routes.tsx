import { LocationProvider, Router, Route } from "preact-iso"
import App from "./app"
import Profile from "./profile"
import Contact from "./contact"
import NotFound from "./404"

import "./i18n";

export default function Routes() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route 
          path="/cv" 
          component={() => {
            window.location.href = '/cv.html';
            return null;
          }} 
        />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
}
