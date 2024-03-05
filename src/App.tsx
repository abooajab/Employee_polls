import { Route, Routes } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
