import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Layout contains `Header` & `Footer` which will be constant in all pages
import Layout from "./layout";
import { Home, PageNotFound } from "./pages";

import "./App.css";

const App: React.FC<any> = () => {
  const paths = {
    home: "/",
  };

  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact key={paths.home} path={paths.home} component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
};

export default App;
