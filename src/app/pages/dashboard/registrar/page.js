'use client'
import { postUser } from "@/app/functions/handlerAcessAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import  Navbar  from "../../../componentes/Navbar";

export default function Registrar() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerRegistrar = async (e) => {
    e.preventDefault();
    try {
      await postUser(user);
      await new Promise((resolve)=>{
        toast.success("Usuário registrado com sucesso!");
        setTimeout(resolve, 5000)
      });
      return push("/pages/dashboard");
  } catch {
    return toast.error("Erro")
  }}
  
  return (
    <div className="register">
      <Navbar/>
      <div className="se registre">
        <center><h1><i>Registra-se</i></h1></center>
        <form onSubmit={handlerRegistrar}>
          <div className="name">
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