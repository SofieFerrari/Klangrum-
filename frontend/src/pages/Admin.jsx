import { useEffect, useState } from "react";

export const Admin = () => {
  const [loading, setLoading] = useState(true); // För att visa laddningsstatus

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem("accessToken"); // Hämta token från localStorage

      if (!token) {
        // Om det inte finns någon token, skickar vi användaren till login-sidan eller hanterar det på annat sätt
        window.location.href = "/login"; // Detta skickar användaren till login-sidan
        return;
      }

      try {
        // Skicka token i Authorization-headern för att autentisera användaren
        const response = await fetch("/admin", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Lägg till token i begäran
          },
        });

        if (!response.ok) {
          // Om svaret inte är OK (t.ex. användaren inte har behörighet)
          window.location.href = "/login"; // Skicka användaren till login-sidan
          return;
        }

        // Här kan du hämta och hantera data om du vill visa något annat när användaren är autentiserad
      } catch (error) {
        console.error("Error fetching admin page:", error);
        // Vid fel kan vi också skicka användaren till login-sidan
        window.location.href = "/login"; // Skicka användaren till login-sidan
      } finally {
        setLoading(false); // När begäran är klar, stoppa laddningen
      }
    };

    fetchAdminData(); // Anropa funktionen för att hämta data
  }, []); // Denna kod körs bara en gång när sidan laddas

  if (loading) {
    return <p>Loading...</p>; // Visa laddningsmeddelande medan vi väntar på svar
  }

  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      {/* Här kan du lägga till innehåll för admin, t.ex. formulär för att lägga till projekt */}
    </div>
  );
};
