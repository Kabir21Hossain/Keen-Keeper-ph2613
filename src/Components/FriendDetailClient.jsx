"use client";

import Image from "next/image";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { GoArchive } from "react-icons/go";
import { LuPhoneCall, LuMessageSquare, LuVideo } from "react-icons/lu";
import { UseDataContext } from "@/context/DataContext";

const FriendDetailClient = ({ friend }) => {
    const { data, setData } = UseDataContext();

    const handleAudioCall = () => {
        const obj = {
            date: Date.now(),
            type: "audio",
            timestamp: new Date().toISOString(),
            name: friend.name,
        };

        setData([...data, obj]);
        console.log(data);
    };

    const handleText = () => {
        const obj = {
            date: Date.now(),
            type: "text",
            timestamp: new Date().toISOString(),
            name: friend.name,
        };

        setData([...data, obj]);
        console.log(data);
    };

    const handleVideoCall = () => {
        const obj = {
            date: Date.now(),
            type: "video",
            timestamp: new Date().toISOString(),
            name: friend.name,
        };
        setData([...data, obj]);
        console.log(data);
    };

    return (
        <div className='friend-container'>

            <div className="flex flex-col md:flex-row gap-6 ">

                <div className="upper space-y-4">

                    <div className="user-card w-full flex flex-col items-center shadow-2xl rounded-xl bg-[#fff] py-6 hover:shadow-3xl transition-shadow">
                        <Image src={friend.picture} alt={friend.name} width={80} height={80} className="rounded-full object-cover mb-3" />
                        <h2 className="text-lg font-semibold">{friend.name}</h2>

                        <p className={`${friend.status.toLowerCase() === 'overdue' ? 'bg-[#EF4444]' : friend.status.toLowerCase() === 'on_track' ? 'bg-[#244D3F]' : 'bg-[#EFAD44]'} text-sm mt-2 mb-2 text-white rounded-full py-1 px-3 capitalize`}>
                            {friend.status.split('_').join(' ')}
                        </p>
                        <p className="text-sm bg-[#CBFADB] text-[#244D3F] py-1 px-3 rounded-full">
                            {friend.tags?.[0]?.toUpperCase()}
                        </p>

                        <p className=" my-2 text-center text-gray-400 text-sm italic font-semibold">{`"${friend.bio}"`}</p>
                        <p className="text-center text-[14px] text-gray-400 ">Gmail: {friend.email}</p>
                    </div>

                    <div className="lower">
                        <div className="function-btn flex flex-col gap-2">
                            <button className="bg-[#fff] shadow-xl btn text-black py-2 px-4 rounded-lg  transition-colors">
                                <RiNotificationSnoozeLine /> Snooze 2 weeks
                            </button>
                            <button className="bg-[#fff] shadow-xl btn text-black py-2 px-4 rounded-lg  transition-colors">
                                <GoArchive /> Archive
                            </button>
                            <button className="bg-[#fff] shadow-xl btn text-red-500 py-2 px-4 rounded-lg hover:bg-[#d93838] hover:text-white transition-colors">
                                <RiDeleteBin6Line /> Delete
                            </button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-2 lg:gap-6 items-center,md:mr-40">

                    <div className="w-full flex flex-col md:flex-row justify-center gap-2">
                        <div className="left shadow-xl rounded-lg bg-[#ffffff] px-4 py-2 min-w-[150px] h-20 flex flex-col items-center justify-center text-center">
                            <h3 className=" text-md md:text-lg font-bold text-[#244D3F] truncate whitespace-nowrap">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm truncate whitespace-nowrap">Days Since Contact</p>
                        </div>

                        <div className="middle shadow-xl rounded-lg bg-[#ffffff] py-4 px-2 min-w-[150px] h-20 flex flex-col items-center justify-center text-center">
                            <h3 className="text-lg font-bold text-[#244D3F] truncate whitespace-nowrap">{friend.goal}</h3>
                            <p className="text-gray-500 text-sm truncate whitespace-nowrap">Goal(days)</p>
                        </div>

                        <div className="shadow-xl rounded-lg bg-[#ffffff] py-4 px-2 min-w-[150px] h-20 flex flex-col items-center justify-center text-center">
                            <h3 className="text-lg font-bold text-[#244D3F] truncate whitespace-nowrap">{friend.next_due_date}</h3>
                            <p className="text-gray-500 text-sm truncate whitespace-nowrap">Next Due</p>
                        </div>

                    </div>

                    <div className="w-full relationship-goal p-3 lg:p-6 shadow-xl rounded-lg bg-[#ffffff]">

                        <div className="upper flex justify-between items-center">
                            <h2 className="text-[#244D3F] text-lg font-semibold">Relationship Goal</h2>
                            <button className='btn text-sm'>Edit</button>

                        </div>

                        <p className="text-gray-500 text-sm">
                            Connect Every <span className="font-bold text-md">{friend.goal}  days</span>
                        </p>

                    </div>

                    <div className="w-full flex flex-col shadow-xl rounded-xl p-6 bg-[#ffffff] space-y-4 flex-1 justify-evenly">
                        <p className="text-[#244D3F] text-sm">Quick Check-In</p>

                        <div className="call-text-video grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <button onClick={handleAudioCall} className="hover:translate-y-0.5 hover:cursor-pointer flex flex-col items-center gap-2 rounded-xl shadow-xl  bg-[#F8FAFC]  p-4  transition-colors">
                                <LuPhoneCall />
                                <span>Call</span>
                            </button>
                            <button onClick={handleText} className=" hover:translate-y-0.5 hover:cursor-pointer flex flex-col items-center gap-2 rounded-xl shadow-xl  bg-[#F8FAFC]  p-4  transition-colors">
                                <LuMessageSquare />
                                <span>Text</span>
                            </button>
                            <button onClick={handleVideoCall} className="hover:translate-y-0.5 hover:cursor-pointer flex flex-col items-center gap-2 rounded-xl shadow-xl  bg-[#F8FAFC]  p-4  transition-colors">
                                <LuVideo />
                                <span>Video</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetailClient;
