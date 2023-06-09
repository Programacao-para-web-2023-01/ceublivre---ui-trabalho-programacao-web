'use client'
import { useEffect, useState } from 'react'
import './styles.css'
import { useRouter } from 'next/navigation'
import { Toaster } from 'react-hot-toast'



export interface User {
    id: string
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
    const [user, setUser] = useState<User | null>(null);
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

        return (
            <>
            <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 4000
            }}
            />
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
                           <label htmlFor="name">Nome Completo</label>
                           <input type="text" name="name" required defaultValue={user?.nome_completo} readOnly/>   
                       </div>
                    </div>
                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="genero">Genero</label>
                               <input type="text" name="genero" defaultValue={user?.genero} required readOnly/>
                           </div>
                           <div className="field">
                                   <label htmlFor="data_nascimento">Data nascimento</label>
                                   <input type="text" name="data_nascimento" required defaultValue={user?.data_nascimento} readOnly/>
                               </div>
                        </div>

                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="email">Email</label>
                               <input type="text" name="email" defaultValue={user?.email} readOnly/>
                           </div>
                           <div className="field">
                               <label htmlFor="cpf">CPF</label>
                               <input type="text" name="cpf" defaultValue={user?.cpf} readOnly/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="telefone">Telefone</label>
                               <input type="text" name="telefone" defaultValue={user?.telefone} readOnly/>
                           </div>
                           <div className="field">
                               <label htmlFor="preferencia_comunicacao">Preferencia comunicacao</label>
                               <input type="text" name="preferencia_comunicacao" defaultValue={user?.preferencia_comunicacao} readOnly/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="cep">CEP</label>
                               <input type="text" name="cep" defaultValue={user?.cep} readOnly/>
                           </div>
                           <div className="field">
                               <label htmlFor="endereco">Endereco</label>
                               <input type="text" name="endereco" defaultValue={user?.endereco} readOnly/>
                           </div>
                        </div>

               </fieldset>
               <button type="submit" style={{marginRight: 10}} onClick={() => router.push(`/information/${params.id}/edit`)}>
                Editar Perfil
               </button>
               <button  onClick={() => router.push('/')} style={{backgroundColor:'orange'}}>
                Voltar pagina inicial
               </button>
            </div>
            </>
           )
    
}