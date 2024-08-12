import style from './topo.module.css'
import Link from 'next/link';

export default function Topo() {
  return (
    <header className={style.container_topo}>
      <h1>Navegação React</h1>
      <nav>
        <Link href="/frontend">Front-end</Link>
        <Link href="/backend">Back-end</Link>
        <Link href="/mobile">Mobile</Link>
      </nav>
    </header>
  );
};