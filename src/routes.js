import { Crop, Edit, Flag, HomeOutlined } from "@material-ui/icons";
import ClipPage from "./pages/ClipPage";
import EditorPage from "./pages/EditorPage";
import Home from "./pages/Home";

const routes = [
    {pathname: "/",component: <Home /> , props: {exact: true}, name: "Home", icon: <HomeOutlined />},
    {pathname: "/editor/:id",component: <EditorPage /> , props: {}, name: "Editor", icon: <Edit/>},
    {pathname: "/flag",component: <ClipPage /> , props: {}, name: "Flag", icon: <Flag />},
]

export default routes;