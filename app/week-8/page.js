"use client";

import { useUserAuth } from "./_utils/Auth-context";

const Page = () => {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const isSignIn = () => {
    return (
      <div>
        <button onClick={firebaseSignOut}>Sign Out</button>
      </div>
    );
  };

  return (
    <main>
      <div className="m-2">
        <h1 className="text-3xl font-bold text-white">
          Week 8 Shopping List App
        </h1>
        {user ? (
          <p>Welcome, {user.displayName} ({user.email})</p>
        ) : (
          <p>Please sign in</p>
        )}
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