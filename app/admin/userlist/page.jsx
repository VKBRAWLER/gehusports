"use client";
import Auth from "@components/Auth";
import Provider from "@components/Provider";
import RoleAuth from "@components/RoleAuth";
import Verified from "@components/Verified";
import { useEffect, useState } from "react";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/24/solid";
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
    <main>
      <section className="flex flex-col gap-5 p-5">
        {userList?.length ? (
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="text-xs text-white uppercase bg-black">
                <tr>
                  <th scope="col" class="px-6 py-3">Profile</th>
                  <th scope="col" class="px-6 py-3">E-mail</th>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Role</th>
                  <th scope="col" class="px-6 py-3">Verified</th>
                </tr>
              </thead>
              <tbody className="glassmorphic-table ">
                {userList?.map((user) => (
                  <tr class="border-b-[1px]" key={user._id.toString()}>
                    <th scope="row" class="px-6 py-4 font-medium flex justify-center">
                      <img src={user.image} alt="" className="rounded-full h-12" />
                    </th>
                    <td class="px-6 py-4 text-center">{user.email || "e-mail not found"}</td>
                    <td class="px-6 py-4 text-center" text-center>{user.name || "name not found"}</td>
                    <td class="px-6 py-4 text-center">{user.role || "N/A"}</td>
                    <td>
                      <span className="flex justify-center">
                        {user.is_verfied ? ( <CheckBadgeIcon className="h-8 w-8 text-center text-sky-500" /> ) : ( <XCircleIcon className="h-8 text-center w-8 text-red-500" /> )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <span className="w-full text-center text-4xl font-bold ">No users found :-</span>
        )}
      </section>
    </main>
  )
}
export default function () {
  return (
    <Provider>
      <Auth>
        <Verified>
          <RoleAuth role={
            ['developer', 'teacher', 'organising member']}>
            <UserListPage />
          </RoleAuth>
        </Verified>
      </Auth>
    </Provider>
  )
}