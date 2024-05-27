import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Navs from "./Navs";
function App() {
  return (


          <div className="app-container">
            <div className="subcontianer">
              <Navs />
            </div>
          </div>

  );
}

    // <ErrorBoundary>
      {/* <CustomeThemeprovider theme={theme}> */}
      {/* </CustomeThemeprovider> */}
    // </ErrorBoundary>
export default App;
