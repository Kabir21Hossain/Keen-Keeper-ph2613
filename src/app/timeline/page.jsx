"use client"
import { UseDataContext } from "@/context/DataContext";

const TimeLinePage=()=>{
const{data}=UseDataContext();
console.log('Timeline data:', data);
    return(
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-[#244D3F]">Timeline</h1>
            
            {data.length === 0 ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <p className="text-gray-600">No interactions yet. Make calls, texts, or videos to see them here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    <p className="font-semibold text-[#244D3F]">Total Interactions: {data.length}</p>
                    <div className="space-y-3">
                        {data.map((event, idx) => (
                            <div key={idx} className="bg-white border-l-4 border-blue-400 p-4 shadow rounded">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-[#244D3F] capitalize">
                                            {event.type} - {event.name}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {new Date(event.timestamp).toLocaleString()}
                                        </p>
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
