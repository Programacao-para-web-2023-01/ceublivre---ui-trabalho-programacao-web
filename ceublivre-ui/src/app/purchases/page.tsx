'use client'
import { useRouter } from 'next/navigation'
import './styles.css'
export default function PurchaseInformation({params}: {
    params: {
        id: string
    }

}) {
    const router = useRouter()
        return (
        <>
        <div className='form'>
            <h1>Histórico de pedidos</h1>
            <fieldset>
                   <legend>
                       <h2>Dados dos pedidos</h2>
                   </legend>
                <div className="field-group">
                   <div className="field">
                           <label htmlFor="id">Id pedido</label>
                           <input type="text" name="id" required value={"teste"} readOnly/>
                    </div>
                       <div className="field">
                           <label htmlFor="endereco">Endereço de entrega</label>
                           <input type="text" name="endereco" value={"teste"} readOnly/>   
                       </div>
                    </div>
                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="frete">Frete</label>
                               <input type="text" name="frete" value={"teste"} required readOnly/>
                           </div>
                           <div className="field">
                                   <label htmlFor="valor">Valor Total</label>
                                   <input type="text" name="valor" required value={"teste"} readOnly/>
                               </div>
                        </div>

                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="status">Status</label>
                               <input type="text" name="status" value={"teste"} readOnly/>
                           </div>
                           <div className="field">
                               <label htmlFor="criado_em">Criado</label>
                               <input type="text" name="criado_em" value={"teste"} readOnly/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="produto">Produto</label>
                               <input type="text" name="produto" value={"teste"} readOnly/>
                           </div>
                         </div>

               </fieldset>
               <button type="submit" style={{marginRight: 10}}  onClick={() => router.push('/information/faf8094b-ec17-4461-a449-b01538d50e59')}>
                Visualizar Perfil
               </button>
               <button type="submit" style={{backgroundColor: 'orange'}}  onClick={() => router.push('/change_password')}>
               Alterar senha
               </button>
            </div>
            </>
           )
    
}