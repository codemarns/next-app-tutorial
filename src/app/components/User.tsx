import React from "react";

export interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const User: React.FC<UserProps> = (props) => {
  const { id, name, username, email, phone, website } = props;
  return (
    <div className="flex-1 h-auto space-y-4">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">{name}</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <div
          className="w-full max-w-[500px] p-6 grid gap-4 border border-emerald-500 rounded-lg"
          style={{ gridTemplateColumns: "180px 1fr" }}
        >
          <div className="space-y-2">
            <p className="text-right font-bold opacity-60">ID :</p>
            <p className="text-right font-bold opacity-60">Username :</p>
            <p className="text-right font-bold opacity-60">Email :</p>
            <p className="text-right font-bold opacity-60">Phone :</p>
            <p className="text-right font-bold opacity-60">Website :</p>
          </div>
          <div className="space-y-2">
            <p className="text-left">{id}</p>
            <p className="text-left">{username}</p>
            <p className="text-left">{email}</p>
            <p className="text-left">{phone}</p>
            <p className="text-left">{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
