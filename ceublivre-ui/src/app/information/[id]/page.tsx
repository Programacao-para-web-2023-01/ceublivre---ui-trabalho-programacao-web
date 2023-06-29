'use client'
import './styles.css'
import { useRouter } from 'next/navigation'



export interface User {
    id: number
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
    console.log(users.id)
    return users
}
export default async function Information({params}: {
    params: {
        id: string
    }

}) 
    
{
    const router = useRouter()
    const user = await getUsers(params.id)

        return (
        <form action="/test" method="POST">
            <h1>Dados Pessoais</h1>
            <fieldset>
                   <legend>
                       <h2>Dados do usuário</h2>
                   </legend>
                <div className="field-group">
                   <div className="field">
                           <label htmlFor="name">Id usuário</label>
                           <input type="text" name="id" required value={user?.id}/>
                    </div>
                       <div className="field">
                           <label htmlFor="name">Nome Completo</label>
                           <input type="text" name="name" required value={user?.nome_completo}/>   
                       </div>
                    </div>
                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="genero">Genero</label>
                               <input type="text" name="genero" value={user?.genero} required/>
                           </div>
                           <div className="field">
                                   <label htmlFor="data_nascimento">Data nascimento</label>
                                   <input type="text" name="data_nascimento" required value={user?.data_nascimento}/>
                               </div>
                        </div>

                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="email">Email</label>
                               <input type="text" name="email" value={user?.email}/>
                           </div>
                           <div className="field">
                               <label htmlFor="cpf">CPF</label>
                               <input type="text" name="cpf" value={user?.cpf}/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="telefone">Telefone</label>
                               <input type="text" name="telefone" value={user?.telefone}/>
                           </div>
                           <div className="field">
                               <label htmlFor="preferencia_comunicacao">Preferencia comunicacao</label>
                               <input type="text" name="preferencia_comunicacao" value={user?.preferencia_comunicacao}/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="cep">CEP</label>
                               <input type="text" name="cep" value={user?.cep}/>
                           </div>
                           <div className="field">
                               <label htmlFor="endereco">Endereco</label>
                               <input type="text" name="endereco" value={user?.endereco}/>
                           </div>
                        </div>

               </fieldset>
               <button type="submit" style={{marginRight: 10}}>
                Editar Perfil
               </button>
               <button onClick={() => router.push('/')} style={{backgroundColor:'orange'}}>
                Voltar pagina inicial
               </button>
            </form>
           )
    
}