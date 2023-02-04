import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [logging, setLogin] = useState(true);
    const [password, setPassword] = useState("");
    const { signin, signup } = useAuth();

    const handleUserLogin = async () => {
        if (!email || !password) {
            console.log("error handle");
            return;
        }

        if (logging) {
            try {
                await signin?.(email, password);
            } catch (error) {
                console.log(error);
            }
            return;
        }

        await signup?.(email, password);
    };

    return (
        <div className="flex flex-col gap-y-3 justify-center items-center">
            <h2 className="text-4xl font-black mt-10">
                {logging ? "LOGIN" : "REGISTER"}
            </h2>
            <input
                className="bg-gray-100 mt-5 w-[30ch] outline-none py-3 px-3 rounded-md"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="bg-gray-100 w-[30ch] outline-none py-3 px-3 rounded-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                className="bg-orange-300 text-white font-black hover:bg-orange-500 duration-200 active:bg-orange-600 w-[30ch] outline-none py-3 px-3 rounded-md"
                onClick={handleUserLogin}
            >
                Submit
            </button>
            <button
                type="button"
                className="mt-1 text-orange-400 hover:text-orange-500 duration-200 active:text-orange-600"
                onClick={() => setLogin(false)}
            >
                Register
            </button>
        </div>
    );
};

export default Login;
