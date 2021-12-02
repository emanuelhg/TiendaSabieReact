export const validateEmail = (email) => {

    const validateMail = /\S+@\S+\.\S+/
    return validateMail.test(email)

}

export const validateName = (name) => {

    const validateName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s,]+$/
    return validateName.test(name)
}

export const validatePhone = (phone) => {

    const validatePhone = /^[\d]{10}$/
    return validatePhone.test(phone)
}

export const initialState = {
    name: "",
    lastname: "",
    phone: "",
    email1: "",
    email2: ""
}