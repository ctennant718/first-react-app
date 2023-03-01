import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import List from "./pages/List";
import Add from "./pages/Add";
import Update from "./pages/Update";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
