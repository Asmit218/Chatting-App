import { useState } from "react";
import { useNavigate } from "react-router";
import { RiEyeFill, RiEyeOffFill } from '@remixicon/react';

export function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [type, setType] = useState("password");
    const [eye, setEye] = useState(<RiEyeFill />);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const checkUser = (e) => {
        e.preventDefault();

        if(email === "adityakumar20741@gmail.com" && password === "asdfghjkl") {
            navigate("/homepage");
        } else {
            setError("Invalid email or password");
        }
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setType(passwordVisible ? "text" : "password");
        setEye(passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-md max-w-sm">
                <h2 className="text-3xl font-semibold mb-4">Login</h2>
                <form onSubmit={checkUser}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter a Email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="w-full px-3 py-2 border-gray-400 border rounded-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block">Password</label>
                        <div className="flex justify-between items-center gap-2">
                            <input
                                type={type}
                                id="password"
                                placeholder="Enter a Password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className="w-full px-3 py-2 border-gray-400 border rounded-full" />
                            <button
                                type="button"
                                className="w-6 cursor-pointer"
                                onClick={togglePasswordVisibility}>
                                {eye}
                            </button>
                        </div>
                        <button
                            className="text-gray-400 hover:text-black text-sm pl-2">
                            Forgot Password?
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="bg-slate-400 text-white py-3 my-3 rounded-2xl hover:bg-slate-600 w-full">
                        Login
                    </button>
                </form>
            </div>
            <p>Don't have an account? <a href="/signup" className="text-slate-400 hover:text-slate-600">Sign Up</a></p>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}