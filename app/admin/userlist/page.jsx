"use client";
import Auth from "@components/Auth";
import RoleAuth from "@components/RoleAuth";
import Verified from "@components/Verified";
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
    <Auth>
      <Verified>
        <RoleAuth role={['developer', 'teacher', 'organising member']}>
          <main>
            <section className="flex flex-col gap-5 p-5">
              {userList?.length ?
              userList?.map((user) => (
                  <div key={user._id.toString()} className="w-full bg-white h-32 rounded-2xl flex justify-between items-center p-2"><img src={user.image} alt="" className="rounded-full" /> <p>{user.email}</p><span>Role: {user.role}</span><span>{user.is_verfied ? <>verified</> : <>not verified</>}</span></div>
                ))
                : <p>No users found</p>
              }
            </section>
          </main>
        </RoleAuth>
      </Verified>
    </Auth>
  )
}

export default UserListPage;