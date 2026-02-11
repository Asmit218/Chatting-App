import { useState } from "react";

export function SignUpPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [type, setType] = useState("password");
    const [eye, setEye] = useState("/src/assets/Password/show.png");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setType(passwordVisible ? "text" : "password");
        setEye(passwordVisible ? "/src/assets/Password/hidden.png" : "/src/assets/Password/show.png");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
            <h2 className=" text-3xl font-semibold mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block">Username</label>
                    <input
                        className="w-full px-3 py-2 border-gray-400 border rounded-full"
                        id="username"
                        type="text"
                        placeholder="Enter a Username"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block">Email</label>
                    <input
                        className="w-full px-3 py-2 border-gray-400 border rounded-full"
                        id="email"
                        type="email"
                        placeholder="Enter a Email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block">Password</label>
                    <div className="flex justify-between items-center gap-2">
                        <input type={ type } id="password" placeholder="Enter a Password " className="w-full px-3 py-2 border-gray-400 border rounded-full" />
                        <button type="button" className="w-6" onClick={togglePasswordVisibility}><img src={ eye } alt="button"/></button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-slate-400 text-white py-3 my-3 rounded-2xl hover:bg-slate-600 w-full"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="">Do you have an account? <a href="/" className="text-slate-400 hover:text-slate-600">Login</a></div>
        </div>
    );
}