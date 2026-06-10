"use client"
import { UseDataContext } from "@/context/DataContext";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import text from '../../assets/text.png';
import call from '../../assets/call.png';
import video from '../../assets/video.png';
import Image from "next/image";

const TimeLinePage = () => {
    const { data } = UseDataContext();
    const [selectedType, setSelectedType] = useState('');
    const [sortedData, setSortedData] = useState([...data]);


    const handleSorting = (type) => {
        setSelectedType(type);

        if (!data) {
            setSortedData([]);
            return;
        }

        if (type.toLowerCase() === 'all') {
            setSortedData([...data]);
        } else {
            const filtered = data.filter(
                (obj) => obj?.type?.toLowerCase() === type.toLowerCase()
            );
            setSortedData(filtered);
        }
    };


    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-black]">Timeline</h1>

            {data.length === 0 ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-gray-600">No interactions yet. Make calls, texts, or videos to see them here.</p>
                </div>
            ) : (
                <div className="space-y-4">

                    <div className="dropdown dropdown-start mb-20">
                        <div tabIndex={0} role="button" className="btn m-1">
                            Filter by {selectedType || 'All'} <FaAngleDown />
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleSorting('all')}><a>All</a></li>
                            <li onClick={() => handleSorting('Text')}><a>Text</a></li>
                            <li onClick={() => handleSorting('Audio')}><a>Audio</a></li>
                            <li onClick={() => handleSorting('Video')}><a>Video</a></li>
                        </ul>
                    </div>


                    <div className="space-y-3">
                        {sortedData.map((event, idx) => (
                            <div key={idx} className="bg-white border-l-4 border-blue-400 p-4 shadow rounded">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-2">

                                        {event.type.toLowerCase() === 'text' ? <Image src={text} alt={'text'} width={24} height={24}></Image> : event.type.toLowerCase() === 'audio' ? <Image src={call} alt={'audio'} width={24} height={24}></Image> : <Image src={video} alt={'video'} width={24} height={24}></Image>}

                                        <div><p className="font-semibold text-[#244D3F] capitalize">
                                            {event.type} with <span className="text-sm text-gray-400">{event.name}</span>
                                        </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {new Date(event.timestamp).toDateString()}
                                            </p></div>
                                    </div>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs capitalize">
                                        {event.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TimeLinePage;
