import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./page/Home";
import Natiq from "./page/Natiq";
import About from "./page/About";
import NotFound from "./page/NotFound";
import { NatiqProvider } from "./context/NatiqContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <NatiqProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/natiq" element={<Natiq />} />
            <Route path="/about" element={<About />} />

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
