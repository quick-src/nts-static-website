import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Layout contains `Header` & `Footer` which will be constant in all pages
import Layout from "./layout";
import {
  Home,
  PageNotFound,
  AboutUs,
  CorporateTraining,
  ITStaffing,
  ContactUs,
  Projects,
  Blogs,
} from "./pages";
import { routes } from "./helpers";

import "./App.css";

const App: React.FC<any> = () => {
  const paths = routes;

  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route
              exact
              key={paths.aboutUs}
              path={paths.aboutUs}
              component={AboutUs}
            />
            <Route
              exact
              key={paths.onlineTraining}
              path={paths.onlineTraining}
              component={CorporateTraining}
            />
            <Route
              exact
              key={paths.itStaffing}
              path={paths.itStaffing}
              component={ITStaffing}
            />
            <Route
              exact
              key={paths.contactUs}
              path={paths.contactUs}
              component={ContactUs}
            />
            <Route
              exact
              key={paths.projects}
              path={paths.projects}
              component={Projects}
            />
            <Route
              exact
              key={paths.blogs}
              path={paths.blogs}
              component={Blogs}
            />
            <Route exact key={paths.home} path={paths.home} component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
};

export default App;
