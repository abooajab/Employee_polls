import { Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
