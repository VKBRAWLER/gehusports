"use client";
import { Auth } from "@pages/Auth";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ProfileDetailsForm from "@components/ProfileDetailsForm";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session?.user)
  return (
    <Auth>
      <main className="flex flex-col items-center justify-center bg-white">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image
              src={session?.user.image}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-4">{session?.user.name}</h1>
            <p className="text-gray-500">{session?.user.email}</p>
            <p className="text-gray-500">{session?.user.role}</p>
            <p className="text-gray-500">
              {session?.user.is_verfied ? "Verified" : "Not verified"}
            </p>
          </div>
          {session?.user.is_verfied || 
          <ProfileDetailsForm user={session?.user}/>}
      </main>
    </Auth>
  );
};

export default ProfilePage;