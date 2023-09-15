import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="container">
      {isAuthenticated ? <Dashboard /> : <SignIn />}
    </main>
  );
}

export default App;
