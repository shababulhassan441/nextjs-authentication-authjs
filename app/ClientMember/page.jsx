"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const client = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMemeber");
    },
  });
  return (
    <div>
      <h1>Member client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default client;
