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
                permissions: ["analize"],
                roles: ["admin"],
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
                    <Route element={<ProtectedRoute isAllowed={!!user} />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route
                        path="/analitycs"
                        element={
                            <>
                                <ProtectedRoute
                                    isAllowed={
                                        !!user &&
                                        user.permissions.includes("analize")
                                    }
                                    redirectTo="/home"
                                >
                                    <Analitycs />
                                </ProtectedRoute>
                            </>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <>
                                <ProtectedRoute
                                    isAllowed={
                                        !!user && user.roles.includes("admin")
                                    }
                                    redirectTo="/home"
                                >
                                    <Admin />
                                </ProtectedRoute>
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
