import Obra from './Obra.model'

class User {
    public email: string
    public password: string
    public name: string

    constructor(email: string, password: string){
        this.email = email
        this.password = password
    }
}

export default User