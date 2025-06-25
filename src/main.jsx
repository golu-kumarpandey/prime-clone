import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemProvider } from "./context/ThemContext";
import { LoadingProvider } from "./context/LoadingContext";
import StyledThem from "./context/StyledThem";
import { CategoryProvider } from "./context/CategoryContext";
import { CustomeLoadingProvider } from "./context/CustomeLoadingContext";
import { VideoContextProvider } from "./context/VideoContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemProvider>
    <StyledThem>
      <LoadingProvider>
        <CustomeLoadingProvider>
          <CategoryProvider>
            <VideoContextProvider>
              <App />
            </VideoContextProvider>
          </CategoryProvider>
        </CustomeLoadingProvider>
      </LoadingProvider>
    </StyledThem>
  </ThemProvider>
);
