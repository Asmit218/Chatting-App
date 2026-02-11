import { RiSendInsLine } from '@remixicon/react';
export function ChatPage({user , image}) {
    
    return (
        <div className="flex-1 flex flex-col bg-gray-100">
            <div className="flex flex-row items-center border-b border-b-gray-300 bg-white">
                <img src={image} alt={user} className="h-10 w-10 m-5" />
                <div className="flex flex-col">
                    <p className='text-xl font-medium'> {user} </p>
                    <div className="flex flex-row items-center gap-2">
                        <img src="/src/assets/Status/active-dot.png" alt="Active" className="h-2 w-2" />
                        <p className="text-1xs text-gray-500">Online</p>
                    </div>
                </div>
            </div>
            <div className="chat h-[79vh]"></div>
            <div className="h-15 bg-white flex items-center rounded-full py-2 px-5 m-3 border border-gray-300">
                <input type="text" placeholder="Type a Message" className="bg-white w-full rounded-full px-4 py-2 focus:outline-none "/>
                <RiSendInsLine className='cursor-pointer' />
            </div>
        </div>
    );
}