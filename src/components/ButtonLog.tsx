import { useState } from "react";

function ButtonLog() {
    const [user, setUser] = useState(null);
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

export default ButtonLog;