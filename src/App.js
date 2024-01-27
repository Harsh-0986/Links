import "./App.css";
import { Header } from "./components/Header.jsx";
import { Links } from "./components/Links.jsx";
import SocialAccounts from "./components/SocialAccounts.jsx";

function App() {
  return (
    <div className="text-white flex justify-center items-center mx-auto flex-col">
      <Header />
      <SocialAccounts />
      <Links />
    </div>
  );
}

export default App;
