
import FriendDetailClient from "@/Components/FriendDetailClient";

const Friend = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/data.json');
    if (!res.ok) {
        throw new Error('Failed to fetch Friend data:', res.status);
    }

    const friendsData = await res.json();

    const friend = friendsData.find((fr) => fr.id === parseInt(id));
    if (!friend) {
        return (
            <div className="w-full px-4 py-20 sm:px-6 lg:px-10">
                <p className="text-gray-700 text-center">Friend not found.</p>
            </div>
        );
    }

    return (
        <div>
            <FriendDetailClient friend={friend} />
        </div>
    );
}

export default Friend;