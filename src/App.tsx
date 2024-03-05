import { Route, Routes } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
