import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function App() {
  const { isSignedIn, user } = useUser();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to IntervueX 🚀</h1>

      {!isSignedIn ? (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      ) : (
        <>
          <UserButton />
          <p>Hello {user?.firstName} 👋</p>
        </>
      )}
    </div>
  );
}

export default App;