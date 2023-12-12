'use client'
import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../../componentes/Navbar";

export default function Alter({params}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerAlter = async (e) => {
    e.preventDefault();
    try {
      await UpdateUser(user, params.id);
      await new Promise((resolve)=>{
        toast.success("Usuário alterado com sucesso!");
        setTimeout(resolve, 5000)
      });
      return push("/pages/dashoboard");
    } catch {
      return toast.error("Erro")
    }}

    return (
      <div className="alter">
        <Navbar/>
        <div className="se altere">
          <center><h1><i>Altera-se</i></h1></center>
          <form onSubmit={handlerAlter}>
            <div className="alteriii">
            <center><label for="">Nome:</label>
            <input id="nome" type="text" placeholder="Nome" onChange={(e) => { setUser({...user, name: e.target.value }) }}/></center>
            </div><br/>
            <div className="email">
            <center><label for="">Email:</label>
            <input id="email" type="email" placeholder="email@gmail.com" onChange={(e) => { setUser({...user, email: e.target.value }) }}/></center>
            </div><br/>
            <div className="password">
            <center><label for="">Senha:</label>
            <input id="senha" type="text" placeholder="senha" onChange={(e) => { setUser({...user, senha: e.target.value }) }}/></center>
            </div><br/>
  
            <center><button className="botao">ENTRAR</button></center>
          </form>
          <ToastContainer />
        </div>
      </div>
    );
  };