"use client";
import { Verified } from "@pages/Auth";
import { useEffect, useState } from "react";
const UserListPage = () => {
  const [userList, setUserList] = useState([]);
  const getUsers = async () => {
    const res = await fetch("/api/users/userlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUserList(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Verified>
      <main>
          <section className="flex flex-col gap-5 p-5">
          { userList?.length ?
          userList?.map((user) => (
            <div key={user._id.toString()} className="w-full bg-white h-32 rounded-2xl flex justify-between items-center p-2"><img src={user.image} alt="" className="rounded-full" /> <p>{user.email}</p><span>Role: {user.role}</span><span>{user.is_verfied? <>verified</>: <>not verified</>}</span></div>
          ))
          : <p>No users found</p>  
          }
          </section>
      </main>
    </Verified>
    )
}

export default UserListPage;