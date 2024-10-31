import { Route, Routes } from "react-router";
import { Index } from "./router/Index";
import Header from "./components/Header";

const App = () => {
  const routes = Index();

  return (
    <div>
      <Header />
      <Routes>
        {routes?.map(({ element, path, children }, key) => (
          <Route key={key} element={element} path={path}>
            {children?.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
