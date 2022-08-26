import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import routes from "./routes";

import GlobalStyle from "./store/Global.styled";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
      </Routes>
    </Fragment>
  );
}

export default App;
