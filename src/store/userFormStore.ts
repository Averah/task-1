import { makeAutoObservable } from "mobx";

export interface IFormData {
    email: string
    password: string
    extraInfo: string
}

class UserFormStore {
    formData = {
        email: '',
        password: '',
        extraInfo: ''
    }

    constructor() {
        makeAutoObservable(this)
    }

    sendUserData (data: IFormData ) {
        this.formData = data
    }
    
    clearUserData () {
        this.formData = {
            email: '',
            password: '',
            extraInfo: ''
        }
    }
}

export default new UserFormStore();