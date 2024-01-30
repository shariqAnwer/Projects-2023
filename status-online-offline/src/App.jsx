import "./App.css";

import { useOnlineStatus } from "./customHooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      {isOnline ? <h1>You are - ✅ ONLINE</h1> : <h1>You are - ❌ OFFLINE</h1>}
    </>
  );
}

export default App;
