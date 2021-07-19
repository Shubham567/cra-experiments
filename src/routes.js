import { HomeOutlined } from "@material-ui/icons";
import Home from "./pages/Home";

const routes = [
    {pathname: "/",component: <Home /> , props: {}, name: "Home", icon: <HomeOutlined />}
]

export default routes;