import { useState } from 'react';
import './styles.css'
export default function Root(props) {
  const [state, setState] = useState("")
  return <section>
    <h1>app 1 </h1>
    <label htmlFor="text">Digite aqui</label>
    <input type="text" id="text" value={state} onChange={e => setState(e.target.value)} />
    <button type='button' onClick={
      () => { localStorage.setItem("text", state) }
    }>salvar</button>
  </section>;
}
