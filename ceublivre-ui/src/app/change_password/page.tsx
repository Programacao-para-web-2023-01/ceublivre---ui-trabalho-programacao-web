'use client'
import { useState } from 'react';
import './styles.css'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

async function getUsers(id: string): Promise<User> {
    
    const response = await fetch(`https://ceublivreapi-1-n3530025.deta.app/user?userId=${id}`)    
    const users: User = await response.json();
    return users
}


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

export default function ChangePassword({params}: {
    params: {
        id: string
    }

}) 
    
{
    const router = useRouter()
    const [senha, setSenha] = useState('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSenha(value);
      };
      const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    
        try {
            const user = await getUsers('faf8094b-ec17-4461-a449-b01538d50e59')
            user.senha = senha
            toast.promise(
                axios.put(`https://ceublivreapi-1-n3530025.deta.app/users/faf8094b-ec17-4461-a449-b01538d50e59`, user),
                {
                  loading: 'Salvando...',
                  success: 'Senha alterada com sucesso',
                  error: 'Erro ao salvar perfil.',
                },  
              );
              router.push('/information/faf8094b-ec17-4461-a449-b01538d50e59')
        } catch (error) {
          console.error('Erro ao alterar a senha:', error);
          // toast.error('Erro ao alterar a senha.');
        }
      };
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
            <h1>Senha</h1>
            <fieldset>
                   <legend>
                       <h2>Alterar senha</h2>
                   </legend>
                <div className="field-group">
                   <div className="field">
                           <label htmlFor="name">Nova Senha</label>
                           <input  type="password" name="senha" required placeholder="Nova senha" value={senha} onChange={handleInputChange}/>
                    </div>
                      
                    </div>
                       
               <button type='submit'  style={{backgroundColor:'orange', marginRight: 10}} onClick={handleSubmit}>
                Enviar
               </button>
               <button onClick={() => router.push('/')}  style={{backgroundColor:'orange'}}>
                Voltar para tela inicial
               </button>
               </fieldset>
            </div>
            </>
           )
    
}