import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProgrammingLang from "./pages/ProgrammingLang";
import SoftwareTranning from "./pages/SoftwareTranning";
import Home from "./pages/Home";
import Layout from "./app layout/Layout";
import { Toaster } from "react-hot-toast";
import PythonProg from "./programing language/PythonProg";
import JavascriptProg from "./programing language/JavascriptProg";
import Cprogrami from "./programing language/Cprogrami";
import CPP from "./programing language/CPP";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ComingSoon from "./components/ComingSoon";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPage";
import TermsAndConditions from "./pages/TermPage";
import RefundAndCancellationPolicy from "./pages/Refund&Cancellation";
import HelpPage from "./pages/HelpPage";
import Robotics from "./pages/wokshop/Robotics";
import Embedded from "./pages/wokshop/Embedded";
import EmbeddedTran from "./pages/training/EmbeddedTran";
import Iot from "./pages/wokshop/Iot";
import IotTraining from "./pages/training/IotTraining";
import { HelmetProvider } from "react-helmet-async";
import BlogPage from "./pages/Blog";
import CareersPage from "./pages/CareersPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "programminglang",
          element: <ProgrammingLang />,
        },

        {
          path: "softwaretranning",
          element: <SoftwareTranning />,
        },
        {
          path: "python",
          element: <PythonProg />,
        },
        {
          path: "javascript",
          element: <JavascriptProg />,
        },
        {
          path: "cprograme",
          element: <Cprogrami />,
        },
        {
          path: "cpp",
          element: <CPP />,
        },
        {
          path: "contactUs",
          element: <ContactUs />,
        },
        {
          path: "coming-soon",
          element: <ComingSoon />,
        },
        {
          path: "privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "term",
          element: <TermsAndConditions />,
        },
        {
          path: "refund",
          element: <RefundAndCancellationPolicy />,
        },
        {
          path: "help",
          element: <HelpPage />,
        },
        {
          path: "robotics",
          element: <Robotics />,
        },
        {
          path: "embedded",
          element: <Embedded />,
        },
        {
          path: "iot",
          element: <Iot />,
        },
        {
          path: "embeddedTraining",
          element: <EmbeddedTran />,
        },
        {
          path: "iotTraining",
          element: <IotTraining />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "career",
          element: <CareersPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <HelmetProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { zIndex: 99999 },
          }}
        />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
