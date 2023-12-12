'use client'
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push, toast } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha, verifique por favor!");
      }
      push('/pages/dashboard');
    } catch {
      toast.error("erro");
    }
  };

  return (
    <div className="login">
      <div className="login do usuario">
      <center><h1><i>Login</i></h1></center>
      <form onSubmit={handlerLogin}>
        <div className="register">
          <center><label for="">Email:</label>
          <input type="email" placeholder="isabela@gmail.com"
          onChange={(e) => { setUser({...user, email: e.target.value }) }}
        /></center>

        </div><br/>
        <div className="register">
          <center><label for="">Senha:</label>
          <input type="password" placeholder="senha"
          onChange={(e) => { setUser({...user, password: e.target.value }) }}
        /></center>

        </div> <br/> 

        <center><button className="button">ENTRAR</button></center>
        </form>
        <ToastContainer />
        </div>
        </div>
        
  )
}
