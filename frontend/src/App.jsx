import { Header } from "./components/Hero"
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

export const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Services />
    <Contact />
    </>
  );
};
