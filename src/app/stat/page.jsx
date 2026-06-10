"use client";
import { UseDataContext } from '@/context/DataContext';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Sector, Legend, TooltipIndex } from 'recharts';


const renderActiveShape = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
}) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={(outerRadius ?? 0) + 6}
                outerRadius={(outerRadius ?? 0) + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


const StatPage = ({ isAnimationActive = true, defaultIndex = undefined }) => {

    const { data } = UseDataContext();
    const total_text = data.filter(obj => obj.type.toLowerCase() === 'text').length;
    const total_audio = data.filter(obj => obj.type.toLowerCase() === 'audio').length;
    const total_video = data.filter(obj => obj.type.toLowerCase() === 'video').length;

    const graph = [
        { name: 'Text', value: total_text, color: '#22c55e' },
        { name: 'Audio', value: total_audio, color: '#ef4444' },
        { name: 'Video', value: total_video, color: '#f472b6' },

    ];


    if (data.length === 0) {
        return (
            <div className="flex justify-center items-center bg-blue-200 p-4 rounded-xl shadow-xl">
                <p> No Phone Call!, No Text!, No Video Call!!! </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto my-[80px] space-y-6">

            <h2 className="text-black font-bold text-3xl bg-[#fffff] rounded-md shadow-md py-3">Friendship Analytics</h2>

            <div className='bg-[#ffffff] shadow-xl rounded-xl p-8 '>
                <p className="text-sm text-[#244D3F]">By Interaction Type</p>
                {/* graph */}

                <div className="flex justify-center items-center ">
                    <div className="w-full max-w-[500px] h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart
                                margin={{
                                    top: 50,
                                    right: 120,
                                    bottom: 0,
                                    left: 120,
                                }}
                            >
                                <Pie
                                    activeShape={renderActiveShape}
                                    data={graph}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="value"
                                    isAnimationActive={isAnimationActive}
                                >
                                    {graph.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip content={() => null} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StatPage;