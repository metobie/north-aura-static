import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Confirmation from "./pages/Confirmation.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Confirmation",
    to: "/confirmation",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Confirmation />,
  },
];