"use client";
import { useState, useEffect } from "react";
import UserCard from "@/Components/UserCard";

const FriendListPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            </div>
        );
    }

    const totalFriends = data.length;
    const onTrack = data.filter(friend => friend.status === "on_track").length;
    const needAttention = data.filter(friend => friend.status === "due_soon" || friend.status === "overdue").length;
    const interactionThisMonth = data.filter(friend => friend.days_since_contact <= 30).length;

    return (
        <div className="w-full px-4 lg:px-[80px]">
            <div className="upper flex flex-col items-center justify-between py-10 gap-2 mb-[40px]">
                <h2 className='text-4xl font-bold text-black text-center'>Friends to keep close in your life</h2>
                <p className='mt-4 text-gray-600 text-xs text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className="mt-6 text-white font-bold btn bg-[#244D3F] hover:bg-[#1a3a2f]"> + Add a Friend</button>
            </div>

            {/* Card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="total-friends flex flex-col justify-center items-center w-full shadow-2xl rounded-xl bg-[#fff] py-8 gap-2 hover:shadow-3xl transition-shadow">
                    <p className="text-xl font-bold text-[#244D3F]">{totalFriends}</p>
                    <p className='text-sm text-[#64748B]'>Total Friends</p>
                </div>
                <div className="on-track flex flex-col justify-center items-center w-full shadow-2xl rounded-xl bg-[#fff] py-8 gap-2 hover:shadow-3xl transition-shadow">
                    <p className="text-xl font-bold text-[#244D3F]">{onTrack}</p>
                    <p className='text-sm text-[#64748B]'>On Track</p>
                </div>
                <div className="need-attention flex flex-col justify-center items-center w-full shadow-2xl rounded-xl bg-[#fff] py-8 gap-2 hover:shadow-3xl transition-shadow">
                    <p className="text-xl font-bold text-[#244D3F]">{needAttention}</p>
                    <p className='text-sm text-[#64748B]'>Need Attention</p>
                </div>
                <div className="interaction-this-month flex flex-col justify-center items-center w-full shadow-2xl rounded-xl bg-[#fff] py-8 gap-2 hover:shadow-3xl transition-shadow">
                    <p className="text-xl font-bold text-[#244D3F]">{interactionThisMonth}</p>
                    <p className='text-sm text-[#64748B]'>Interaction This Month</p>
                </div>
            </div>

            <div className="w-full mt-10 mb-16">
                <h3 className="text-2xl text-black font-bold mb-6">Your Friends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map(friend => <UserCard key={friend.id} friend={friend}></UserCard>)}
                </div>
            </div>
        </div>
    );
}

export default FriendListPage;