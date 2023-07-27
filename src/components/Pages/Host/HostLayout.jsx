import { Outlet } from "react-router-dom";
import HostNav from "./HostNav/HostNav";

export default function HostLayout() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
}
