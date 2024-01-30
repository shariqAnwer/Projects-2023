import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])



  return (
    <>
      {
        online ? <h1>You are - ✅ ONLINE</h1> : <h1>You are - ❌ OFFLINE</h1>
      }
    </>
  );
}

export default App;
