export const validateEmail = (email) => {

    const validaMail = /\S+@\S+\.\S+/
    return validaMail.test(email)

}

export const initialState = {
    name: "",
    lastname: "",
    phone: "",
    email1: "",
    email2: ""
}
