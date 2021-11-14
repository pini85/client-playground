import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  useEffect(() => {
    api.get("/test");
  }, []);
  return <div></div>;
}

export default App;
