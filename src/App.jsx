import LandingPage from "./components/templates/LandingPage.jsx";
import SurveyProductsPage from "./components/templates/SurveyProductsPage.jsx";

export default function App() {
  if (window.location.pathname === "/survey-products") {
    return <SurveyProductsPage />;
  }

  return <LandingPage />;
}
