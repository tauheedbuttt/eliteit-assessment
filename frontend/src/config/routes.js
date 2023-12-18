import Home from "../pages/Home/Home";
import Listing from "../pages/Listing/Listing";

export const publicRoutes = [
    {
        path: "",
        page: Home,
    },
    {
        path: "listing",
        page: Listing,
    },
]