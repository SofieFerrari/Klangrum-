import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userName }),
      });

      const data = await response.json();

      if (response.ok) {
        setRedirect(true);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="bg-gray font-montserrat flex flex-col p-8 text-center">
      <form onSubmit={handleSubmit} className="self-center py-3">
        <div className="mb-2 flex flex-col self-center">
          <label>User Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2 flex flex-col self-center">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow font-montserrat rounded-xl border px-6 py-2 font-medium"
        >
          Register
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};
