import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="upper container mx-auto flex flex-col items-center justify-between py-10 gap-2">
        <h2 className='text-xl font-bold text-black'>Friends to keep close in your life</h2>
        <p className='mt-4 text-gray-600 text-xs text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.</p>
        <button className="mt-6 text-white font-bold btn bg-[#244D3F]"> + Add Friend</button>
      </div>
    </div>
  );
}
