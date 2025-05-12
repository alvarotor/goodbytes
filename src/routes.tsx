import { LocationProvider, Router, Route } from "preact-iso"
import App from "./app"
import Profile from "./profile"
import Contact from "./contact"
import NotFound from "./404"
import baseRoute from './baseRoute'

import "./i18n";

export default function Routes() {
  return (
    <LocationProvider>
      <Router>
        <Route path={`${baseRoute}/`} component={App} />
        <Route path={`${baseRoute}/profile`} component={Profile} />
        <Route path={`${baseRoute}/contact`} component={Contact} />
        <Route 
          path={`${baseRoute}/cv`}  
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
