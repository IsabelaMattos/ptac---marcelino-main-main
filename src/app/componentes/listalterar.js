import { getUsers } from "@/app/functions/handlerAcessAPI";
import { ToastContainer, toast } from "react-toastify";

export default async function Alterar() {
    const users = await getUsers();
    return(
      <div className='alterarUsers'>
        {users?.map((user, index) =>
          <p className='uAlterar' key={index}>
              {user.name}: 
              <button className='on-alterar alterar'>Alterar</button>
              <button className='on-alterar excluir'>Excluir</button>
          </p>
        )}
          <ToastContainer toastStyle={{backgroundColor:"#030029"}} />
     </div>
    )
  }