import { useEffect, useState } from "react";

export default function Page2(props) {
  const [state, setState] = useState('');
  useEffect(() => {
    setState(localStorage.getItem('text'))
  }, [])
  return <section>
    <h1>Page 2 app 2 {state}</h1>
  </section>;
}