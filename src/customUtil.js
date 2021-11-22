export const initialState = {
    name: "",
    lastname: "",
    phone: "",
    email1: "",
    email2: ""
}


export const validateEmail = (email) => {

    const validaMail = /\S+@\S+\.\S+/
    return validaMail.test(email)

}