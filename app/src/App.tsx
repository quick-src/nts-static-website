import React from "react";

// Layout contains `Header` & `Footer` which will be constant in all pages
import Layout from "./layout";

import "./App.css";

const App: React.FC<any> = () => {
  return (
    <>
      <Layout>
        <h1>Children</h1>
      </Layout>
    </>
  );
};

export default App;
