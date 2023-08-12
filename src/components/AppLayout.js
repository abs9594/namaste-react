import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../rtk/appStore";

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
  </Provider>
);

export default AppLayout;
