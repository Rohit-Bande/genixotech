import ReactGA from "react-ga4";

const TRACKING_ID = "G-QKWZ48GMSY";

// Yeh check karega ki agar GA pehle se initialized nahi hai, tabhi initialize kare
if (!window.GA_INITIALIZED) {
  ReactGA.initialize(TRACKING_ID);
  window.GA_INITIALIZED = true;
  console.log("Google Analytics Initialized Successfully.");
}

export default ReactGA;
