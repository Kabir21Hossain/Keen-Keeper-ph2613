import Image from "next/image";
import Link from "next/link";
const UserCard = ({ friend }) => {

  return (
    <Link href={`/friendlist/${friend.id}`} className="user-card flex flex-col items-center w-full shadow-2xl rounded-xl bg-[#fff] py-6 hover:shadow-3xl transition-shadow">
      <Image src={friend.picture} alt={friend.name} width={80} height={80} className="rounded-full object-cover mb-3" />
      <h2 className="text-lg font-semibold">{friend.name}</h2>
      <p className="mb-2 text-gray-400 text-sm">{friend.days_since_contact}d ago</p>
      <p className="text-sm bg-[#CBFADB] text-[#244D3F] py-1 px-3 rounded-full">
        {friend.tags[0].toUpperCase()}
      </p>
      <p className={`${friend.status.toLowerCase() === 'overdue' ? 'bg-[#EF4444]' : friend.status.toLowerCase() === 'on_track' ? 'bg-[#244D3F]' : 'bg-[#EFAD44]'} text-sm mt-2 text-white rounded-full py-1 px-3 capitalize`}>
        {friend.status.split('_').join(' ')}
      </p>
    </Link>
  );
}

export default UserCard;