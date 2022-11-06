import { Route, Routes, useLocation } from "@solidjs/router";
import { lazy, Show } from "solid-js";

import Navbar from "./Navbar";
import Home from "./Home";
import DocRoutes from "./doc_comps/DocRoutes";

function App() {
  return (
    <>
      <Show when={!useLocation().pathname.includes("docs")}>
        <Navbar />
      </Show>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/docs" component={lazy(() => import("./Docs"))}>
          <DocRoutes />
        </Route>
      </Routes>
    </>
  );
}

export default App;
