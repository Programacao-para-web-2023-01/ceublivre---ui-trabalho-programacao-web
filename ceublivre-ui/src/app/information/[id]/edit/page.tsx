'use client'
import { useEffect, useState } from 'react'
import './styles.css'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';



export interface User {
    id: string | undefined
    cpf: string
    data_nascimento: string
    preferencia_comunicacao: string
    telefone: string
    created_at: string
    email: string
    nome_completo: string
    genero: string
    senha: string
    cep: string
    endereco: string
    updated_at: string
}


async function getUsers(id: string): Promise<User> {
    
    const response = await fetch(`https://ceublivreapi-1-n3530025.deta.app/user?userId=${id}`)    
    const users: User = await response.json();
    return users
}
export default function Information({params}: {
    params: {
        id: string
    }

}) 
    
{
    const [user, setUser] = useState<User>({
        id: '',
        cpf: '',
        data_nascimento: '',
        preferencia_comunicacao: '',
        telefone: '',
        created_at: '',
        email: '',
        nome_completo: '',
        genero: '',
        senha: '',
        cep: '',
        endereco: '',
        updated_at: '',
      });
    const router = useRouter()

    //const user = await getUsers(params.id)
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const fetchedUser = await getUsers(params.id);
            console.log(fetchedUser)
            setUser(fetchedUser);
          } catch (error) {
            console.error('Erro ao obter os dados do usuário:', error);
          }
        };
    
        fetchUser();
      }, [params.id]);

      const handleSaveProfile = async () => {
        try {
         // const response = await axios.put(`https://ceublivreapi-1-n3530025.deta.app/users/${params.id}`, user);
          //console.log(response.data);
          toast.promise(
            axios.put(`https://ceublivreapi-1-n3530025.deta.app/users/${params.id}`, user),
            {
              loading: 'Salvando...',
              success: 'Perfil salvo com sucesso!',
              error: 'Erro ao salvar perfil.',
            },  
          );
          router.push(`/information/${params.id}`) // Tratar a resposta do backend conforme necessário
        } catch (error) {
          console.error('Erro ao salvar perfil:', error);
        }
      };

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    


        return (
        <div className='form'>
            <h1>Dados Pessoais</h1>
            <fieldset>
                   <legend>
                       <h2>Dados do usuário</h2>
                   </legend>
                <div className="field-group">
                   <div className="field">
                           <label htmlFor="name">Id usuário</label>
                           <input type="text" name="id" required defaultValue={user?.id} readOnly/>
                    </div>
                       <div className="field">
                           <label htmlFor="nome_completo">Nome Completo</label>
                           <input type="text" name="nome_completo" required defaultValue={user?.nome_completo} onChange={handleInputChange} />   
                       </div>
                    </div>
                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="genero">Genero</label>
                               <input type="text" name="genero" defaultValue={user?.genero} required onChange={handleInputChange}/>
                           </div>
                           <div className="field">
                                   <label htmlFor="data_nascimento">Data nascimento</label>
                                   <input type="text" name="data_nascimento" required defaultValue={user?.data_nascimento} readOnly/>
                               </div>
                        </div>

                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="email">Email</label>
                               <input type="text" name="email" defaultValue={user?.email} onChange={handleInputChange}/>
                           </div>
                           <div className="field">
                               <label htmlFor="cpf">CPF</label>
                               <input type="text" name="cpf" defaultValue={user?.cpf} readOnly/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="telefone">Telefone</label>
                               <input type="text" name="telefone" defaultValue={user?.telefone} onChange={handleInputChange}/>
                           </div>
                           <div className="field">
                               <label htmlFor="preferencia_comunicacao">Preferencia comunicacao</label>
                               <input type="text" name="preferencia_comunicacao" defaultValue={user?.preferencia_comunicacao} onChange={handleInputChange}/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="cep">CEP</label>
                               <input type="text" name="cep" defaultValue={user?.cep} onChange={handleInputChange}/>
                           </div>
                           <div className="field">
                               <label htmlFor="endereco">Endereco</label>
                               <input type="text" name="endereco" defaultValue={user?.endereco} onChange={handleInputChange}/>
                           </div>
                        </div>

               </fieldset>
               <button type="submit" style={{marginRight: 10}} onClick={handleSaveProfile}>
                Salvar Perfil
               </button>
               <button  onClick={() => router.push('/')} style={{backgroundColor:'orange'}}>
                Voltar pagina inicial
               </button>
            </div>
           )
    
}