import './styles.css'
import ChangePassword from '../change_password/page'
export default function PurchaseInformation({params}: {
    params: {
        id: string
    }

}) {
        return (
        <>
        <form action="/test" method="POST">
            <h1>Histórico de pedidos</h1>
            <fieldset>
                   <legend>
                       <h2>Dados dos pedidos</h2>
                   </legend>
                <div className="field-group">
                   <div className="field">
                           <label htmlFor="id">Id pedido</label>
                           <input type="text" name="id" required value={"teste"}/>
                    </div>
                       <div className="field">
                           <label htmlFor="endereco">Endereço de entrega</label>
                           <input type="text" name="endereco" value={"teste"}/>   
                       </div>
                    </div>
                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="frete">Frete</label>
                               <input type="text" name="frete" value={"teste"} required/>
                           </div>
                           <div className="field">
                                   <label htmlFor="valor">Valor Total</label>
                                   <input type="text" name="valor" required value={"teste"}/>
                               </div>
                        </div>

                       <div className="field-group">
                           <div className="field">
                               <label htmlFor="status">Status</label>
                               <input type="text" name="status" value={"teste"}/>
                           </div>
                           <div className="field">
                               <label htmlFor="criado_em">Criado</label>
                               <input type="text" name="criado_em" value={"teste"}/>
                           </div>
                        </div>
                        <div className="field-group">
                           <div className="field">
                               <label htmlFor="produto">Produto</label>
                               <input type="text" name="produto" value={"teste"}/>
                           </div>
                         </div>

               </fieldset>
               <button type="submit" style={{marginRight: 10}}>
                Visualizar Perfil
               </button>
               <button type="submit">
               Alterar senha
               </button>
            </form>
            </>
           )
    
}