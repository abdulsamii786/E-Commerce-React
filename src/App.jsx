import { Route, Routes } from "react-router"
import { Index } from "./router/Index"


const App = () => {
const routes=Index()

  return (
    <div>
      <Routes>

        {routes.map(({ element, path }, key) => <Route key={key} element={element} path={ path} />)}
      </Routes>

    </div>
  )
}

export default App
