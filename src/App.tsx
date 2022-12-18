import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Dashboard, Analitycs, Admin } from "./pages/Index";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    const [user, setUser] = useState(null);

    function ButtonLog() {
        const login = () => {
            //request done
            setUser({
                id: 1,
                name: "John",
            });
        };

        const logout = () => setUser(null);

        return (
            <>
                {user ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </>
        );
    }

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ButtonLog />
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path="/landing" element={<Landing />}></Route>
                    <Route path="/home" element={
                        <ProtectedRoute user={user} redirectTo='/'>
                            <Home/>
                        </ProtectedRoute>
                    } />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/analitycs" element={<Analitycs />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
