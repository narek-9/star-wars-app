import routesConfig from "@routes/routesConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@components/Header";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            {routesConfig.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
