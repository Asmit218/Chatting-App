import { Homepage } from "../home-page/hompage"
import { RiChat1Fill, RiChat1Line, RiSettingsLine, RiSettingsFill } from '@remixicon/react';
// import { useNavigate } from "react-router";

export function Sidebar({ setName, setImage, active, setActive }) {
    

    // const navigate = useNavigate();
    return (
        <div className="w-80 bg-white h-screen p-5 border-r border-r-gray-300">
            <div className='flex flex-row gap-5'>
                <img src="/src/assets/ProfilePhoto/man.png" alt="ProfilePhoto" className='h-20 w-20' />
                <div className="">
                    <h2 className='text-xl font-semibold mt-2'>Aditya Kumar</h2>
                    <div className="flex flex-row items-center gap-2 mt-1">
                        <img src="/src/assets/Status/active-dot.png" alt="ActiveDot" className='h-4 w-4' />
                        <p className='text-gray-500'>Active on Work</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p className='text-2xl font-semibold'>Chats</p>
                <div className="flex flex-row gap-5 mt-5 items-center cursor-pointer border-b-gray-200 border-b pb-5" onClick={() => {
                    setName("Ashish"), setImage("/src/assets/ProfilePhoto/man-1.png")
                }}>
                    <img src="/src/assets/ProfilePhoto/man-1.png" alt="Chat1" className='h-10 w-10' />
                    <div className="flex flex-col">
                        <p className='font-medium'>Ashish</p>
                        <p className='text-gray-500'>Not Available</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 mt-5 items-center cursor-pointer border-b-gray-200 border-b pb-5" onClick={() => {
                    setName("Asmit"), setImage("/src/assets/ProfilePhoto/man-2.png")
                }}>
                    <img src="/src/assets/ProfilePhoto/man-2.png" alt="Chat1" className='h-10 w-10' />
                    <div className="flex flex-col">
                        <p className='font-medium'>Asmit</p>
                        <p className='text-gray-500'>Work</p>
                    </div>
                </div>
            </div>
            <div className="my-5 bottom-0 absolute w-70 px-5 flex justify-center gap-20">
                {active === "btn1"? <RiChat1Fill className="cursor-pointer" onClick={() => setActive("btn1")}/> : <RiChat1Line className="cursor-pointer" onClick={() => setActive("btn1")}/>}
                {active === "btn2"? <RiSettingsFill className="cursor-pointer" onClick={() => setActive("btn2")}/> : <RiSettingsLine className="cursor-pointer" onClick={() => setActive("btn2")}/>}
            </div>
        </div>
    );
}
{/* <button onClick={() => navigate("/login")} className="bg-slate-400 text-white py-3 my-3 rounded-2xl hover:bg-slate-600 w-full">
                    Logout
                </button> */}