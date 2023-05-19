import styles from './styles.module.css'

export interface User {
    id: number,
    name: string
    email: string
    phone: string
}
async function getUsers(id: number): Promise<User> {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
    return users
}
export default async function Information({params}: {
    params: {
        id: number
    }

}) {



    /*
    const [user, setUser] = useState<User>()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setUser(response)
            } )

    }, [params.id])

     */

    const user = await getUsers(params.id)

    return (
        <form action="/send-data-here" method="post">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="first" value={user?.name}/>


            <label htmlFor="gender">Sexo</label>
            <input type="text" id="gender" name="gender" value={"M"}/>

            <label htmlFor="data">Data nascimento</label>
            <input type="date" id="date" name="date" value={"1999-07-24"}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={user?.email}/>

            <label htmlFor="cpf">Cpf: </label>
            <input type="text" id="cpf" name="cpf" value={"3344dddd"}/>

            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" name="phone" value={user?.phone}/>

            <label htmlFor="cep">Cep:</label>
            <input type="text" id="cep" name="cep" value={"xxxdddfff"}/>

            <label htmlFor="address">Endereco:</label>
            <input type="text" id="address" name="address" value={" rua rua 89 lote 223"}/>

            <button type="submit">Submit</button>
        </form>

    )
}