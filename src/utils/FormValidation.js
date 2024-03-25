
export const SignUpValidation=(name,email,password)=>{

    // const Name = /^[a-zA-Z]+$/.test(name)
    const Email =  /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)
    const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // if(name.length>15) return " Name must be less than 15 coreactors ."
    if(name=== " "){
        return " Name is required!"
    }
    if(email === " "){
        return " Email is required!"
       }else if (!Email){
        return  "please enter valid  email!"
       }
    if(!Password) return "Try another password"

     return null
}


export const SignInValidation=(email,password)=>{
    // const EmailRegex = "/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/"
    // const PasswordRegex = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"

    const Email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)
    const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if(email === " "){
        return " Email is required!"
       }else if (!Email){
        return  "please enter valid  email!"
       }
    // if(!Email) return "Email ID is not valid"
    if(!Password) return "Password is not valid"

    return null
}