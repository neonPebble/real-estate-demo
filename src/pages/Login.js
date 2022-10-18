// Create a new credential and add client_id
export default function Login() {
  async function handleCredentialResponse(response) {
    console.log(response.credential);
  }

  async function handleGoogleLogin() {
    try {
      window.google.accounts.id.initialize({
        client_id:
          "898210389645-po609nrob379rmvihsapg6q9avfh4knv.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.prompt();
    } catch {}
  }
  return (
    <div className="Login">
      <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col items-center justify-center">
        <div
          id="signInContainer"
          className="p-5 space-y-3 shadow-xl flex flex-col bg-white rounded-lg"
        >
          <div className="px-1 text-center">SIGN IN</div>
          <input
            type="text"
            placeholder="User Name"
            className="border-2 px-1 text-center rounded-md"
          />
          <input
            placeholder="Email"
            type="text"
            className="border-2 px-1 text-center rounded-md"
          />
          <input
            placeholder="Password"
            type="text"
            className="border-2 px-1 text-center rounded-md"
          />
          <button className="border-2 border-green-600 bg-green-400 hover:bg-green-700 hover:text-white px-1 py-0.5 rounded-md">
            Log In
          </button>
          <button
            onClick={handleGoogleLogin}
            className="border-2 border-violet-600 bg-violet-400 hover:bg-violet-700 hover:text-white px-1 py-0.5 rounded-md"
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
}
