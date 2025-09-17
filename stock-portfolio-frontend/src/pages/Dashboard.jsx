import { useEffect, useState } from "react";
import { getHello } from "../services/api";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHello().then(data => setMessage(data));
  }, []);

  return <h2>{message}</h2>;
}
