import About from "../pages/About";
import CargoIdPage from "../pages/CargoIdPage";
import Cargos from "../pages/Cargos";
import Companies from "../pages/Deliveries";
import CompanyIdPage from "../pages/CompanyIdPage";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Register from "../pages/Register";
import TruckIdPage from "../pages/TruckIdPage";
import Trucks from "../pages/Trucks";
import DeliveryIdItem from "../components/deliveryComponents/DeliveryIdItem";
import Deliveries from "../pages/Deliveries";
import DeliveryIdPage from "../pages/DeliveryIdPage";
import MyCabinet from "../pages/MyCabinet";
import MyCargos from "../pages/MyCargos";
import MyDeliveries from "../pages/MyDeliveries";
import CreateCargo from "../pages/CreateCargo";
import CreateDelivery from "../pages/CreateDelivery";

export const privateRoutes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/cargos", component: <Cargos />, exact: true },
  { path: "/cargos/:id", component: <CargoIdPage />, exact: true },
  { path: "/trucks", component: <Trucks />, exact: true },
  { path: "/trucks/:id", component: <TruckIdPage />, exact: true },
  { path: "/deliveries", component: <Deliveries />, exact: true },
  { path: "/deliveries/:id", component: <DeliveryIdPage />, exact: true },
  { path: "/my", component: <MyCabinet />, exact: true },
  { path: "/my-cargos", component: <MyCargos />, exact: true },
  { path: "/my-deliveries", component: <MyDeliveries />, exact: true },
  { path: "/add-cargo", component: <CreateCargo />, exact: true },
  { path: "/add-delivery", component: <CreateDelivery />, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: <Login />, exact: true },
  { path: "/register", component: <Register />, exact: true },
];
