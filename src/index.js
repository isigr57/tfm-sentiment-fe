import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from "./home/DashboardPage";
import LoginPage from "./auth/login/LoginPage";
import { AuthContextProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/components/ProtectedRoute";
import UnProtectedRoute from "./auth/components/UnProtectedRoute";
import { SnackbarProvider } from "notistack";
import SignUpPage from "auth/signup/SignUpPage";
import RecoverPasswordPage from "auth/recoverPassword/RecoverPasswordPage";
import VerifyEmailPage from "auth/verifyemail/VerifyEmailPage";
import { createTheme, ThemeProvider } from "@mui/material";
import { FirestoreProvider } from "data/FirestoreContext";


const root = createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: "'DM Sans', sans-serif",
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={3737}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/healthcheck" element={<div>OK</div>} />
            <Route path="/verifyemail" element={<UnProtectedRoute><VerifyEmailPage /></UnProtectedRoute>} />
            <Route path="/recoverpassword" element={<UnProtectedRoute><RecoverPasswordPage /></UnProtectedRoute>} />
            <Route path="/signup" element={<UnProtectedRoute><SignUpPage /></UnProtectedRoute>} />
            <Route path="/login" element={<UnProtectedRoute><LoginPage /></UnProtectedRoute>} />
            <Route path="/*"
              element={
                <FirestoreProvider>
                  <Routes>
                    <Route path="/*" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                  </Routes>
                </FirestoreProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </SnackbarProvider>
  </ThemeProvider>
);