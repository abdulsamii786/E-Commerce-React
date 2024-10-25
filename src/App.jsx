import { Route, Routes } from "react-router";
import { Index } from "./router/Index";
import Header from "./components/Header";

const App = () => {
  const routes = Index();

  return (
    <div>
      <Header />
      <Routes>
        {routes.map(({ element, path }, key) => (
          <Route key={key} element={element} path={path} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
