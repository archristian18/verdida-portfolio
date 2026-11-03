import LandingPage from "./components/templates/LandingPage.jsx";
import TechStackPage from "./components/templates/TechStackPage.jsx";

export default function App() {
  if (window.location.pathname === "/survey-products") {
    return <TechStackPage />;
  }

  return <LandingPage />;
}
