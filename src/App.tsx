import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Dashboard, Analitycs, Admin } from "./pages/Index";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path="/landing" element={<Landing />}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/analitycs" element={<Analitycs />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
