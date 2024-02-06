import { makeAutoObservable } from "mobx";


class CalendarStore {
    year = new Date().getFullYear();

    constructor() {
        makeAutoObservable(this)
    }

    setNextYear() {
        this.year = this.year + 1
    } 
    setPrevYear() {
        this.year = this.year - 1
    }

}

export default new CalendarStore();