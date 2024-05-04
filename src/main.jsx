import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import routes from "./router/routes.jsx";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#127f18"
    },
    secondary: {
      main: "#ff6d00"
    }
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={routes} />
  </ThemeProvider>
);
