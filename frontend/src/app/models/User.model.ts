import Obra from './Obra.model'

class User {
    private email: string
    private password: string
    public name: string

    constructor(email: string, password: string){
        this.email = email
        this.password = password
    }
}

export default User