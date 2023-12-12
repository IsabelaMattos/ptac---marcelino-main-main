'use client'

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
export default function Navbar() {
    const { push, refresh } = useRouter();
    const handlerRemoveCookies = async (e) => {
        e.preventDefault();
        Cookies.remove('token');
        localStorage.removeItem('name');
        refresh('/')
    }

    return(
    <ul>

      <li className="links"> <a href="/">Logo</a></li>     
      <li className="links"> <a href="/pages/dashboard/registrar">Registrar</a></li>
      <li className="links"><a href="/pages/dashboard/alter/id">Alterar</a></li>
      <li className="links"><button className="open" onClick={handlerRemoveCookies}><a href="#" className="open">Sair</a></button></li>
   </ul>
    )
}