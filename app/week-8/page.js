"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/Auth-context";

const Page = () => {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const isSignIn = () => {
    return (
      <div>
        <button onClick={firebaseSignOut}>Sign Out</button>
        <br />
        <Link href="/week-7">
          <a className="bg-red">Continue to your Shopping List</a>
        </Link>
      </div>
    );
  };

  return (
    <main>
      <div className="m-2">
        <h1 className="text-3xl font-bold text-white">
          Week 8 Shopping List App
        </h1>
        <p>{user ? "Hi! there!" : "Please sign in"}</p>
        {user && <p>{user.displayName}</p>}
        {user && <p>{user.email}</p>}
        <p>
          {user ? (
            isSignIn()
          ) : (
            <button onClick={gitHubSignIn}>Sign in with GitHub</button>
          )}
        </p>
      </div>
    </main>
  );
};

export default Page;