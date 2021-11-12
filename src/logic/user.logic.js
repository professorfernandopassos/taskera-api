import User from "../model/user.js";
import UserData from "../data/user.data.js"

class UserLogic {

    // registrarUsuario()
    signup(name, email, password){
        const userData = new UserData()
        const user = new User()
        user.name = name
        user.email = email
        user.password = password
        const result = userData.create(user)
        return result
        // return new User()
    }

    // autenticarUsuario()
    login(email, senha){
        return new User()
    }

    changePassword(email, newPassword){

    }

    sendChangePasswordEmail(email){
        return false
    }

    logout(email){

    }
}