import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import NotFound from "./page/NotFound";
import { NatiqProvider } from "./context/NatiqContext";
import { Toaster } from "react-hot-toast";
import Loading from "./ui/Loading";

const Home = lazy(() => import("./page/Home"));
const Natiq = lazy(() => import("./page/Natiq"));
const About = lazy(() => import("./page/About"));

function App() {
  return (
    <NatiqProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={
                <Suspense fallback={<Loading/>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/natiq"
              element={
                <Suspense fallback={<Loading/>}>
                  <Natiq />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loading/>}>
                  <About />
                </Suspense>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "1rem" }}
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </NatiqProvider>
  );
}

export default App;
