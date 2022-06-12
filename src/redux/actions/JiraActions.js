import { USER_SIGNIN_API ,USER_SIGNUP_API} from "../../util/constants/settingSystem"



export const signinAction = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email, 
            password: password
        }
    }
}
export const signupAction = (email,password,name,phoneNumber) => {
    return {
        type: USER_SIGNUP_API,
        userRegister: {
            email: email,
            password: password,
            name: name,
            phoneNumber: phoneNumber
        }
    }
}