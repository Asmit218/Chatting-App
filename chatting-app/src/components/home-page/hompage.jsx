import { useState } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { ChatPage } from "../chat-open/chatopen";

export function Homepage() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [active, setActive] = useState("btn1");

    return (
        <div className="bg-gray-200 h-screen w-screen flex">
            <Sidebar setName={setName} setImage={setImage} active={active} setActive={setActive} />

            {active === "btn1" ?
                <div className="flex-1 relative overflow-hidden">
                    <div
                        className={`
            absolute inset-0 flex items-center justify-center
            text-2xl text-gray-500
            transition-all duration-300 ease-in-out
            ${name ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}
          `}>
                        <p>Select a Chat to Display</p>
                    </div>

                    <div
                        className={`
            absolute inset-0
            transition-all duration-300 ease-in-out
            ${name ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
          `}>
                        <ChatPage user={name} image={image} />
                    </div>
                </div>
            : <div className="flex-1 flex items-center justify-center">
                <h1 className="text-3xl font-semibold text-gray-500">Settings Page Coming Soon!</h1>
            </div>
            }
        </div>
    );
}
