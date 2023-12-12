import Link from "next/link";

export default async function ListUsers({users}) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div key={index} className="bg-white shadow-md rounded p-4 text-center">
                {users?.map((user, index) => 
                  <Link href={"/pages/dashboard/alter/"+ user.id}>
                      <p>{user.name}</p>
                 </Link>    
                )}
                </div>
        </div>
    );
}