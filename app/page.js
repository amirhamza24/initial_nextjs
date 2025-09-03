// "use client";

import { Login } from "@/lib/login";
import Image from "next/image";

export default function Home() {
  // sales-fusion login api test
  // const [userId, setUserId] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setErrorMsg("");

  //   console.log("Login userId:", userId);
  //   console.log("Login password:", password);

  //   try {
  //     const data = await Login(userId, password);
  //     console.log("Login status:", data);

  //     setLoginStatus(data.message);

  //     // Example: save token
  //     // if (data.token) {
  //     //   localStorage.setItem("authToken", data.token);

  //     //   // Redirect to dashboard after login
  //     //   router.push("/dashboard");
  //     // }
  //   } catch (err) {
  //     setErrorMsg(err.message || "Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <main className="mt-10">
      <div>
        Lorem aaaa Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>

      {/* sales-fusion login api test */}
      {/* <div className="flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />

          {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}

          {loginStatus && (
            <p className="text-green-500 text-sm mb-2 font-bold">
              {loginStatus}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div> */}
    </main>
  );
}
