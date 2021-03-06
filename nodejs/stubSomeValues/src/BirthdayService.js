"use strict";

class BirthdayService {

    constructor(clientRepository){
        this.repository = clientRepository
    }

    greeting(name) {

        let greeting

        return this.repository.birthdayIsTodayFor(name).then(isBirthday => {
            if (isBirthday) {
                greeting = "Happy birthday " + name + "!"
            } else {
                greeting = "Good morning " + name + "."
            }
            return greeting
        })
    }
}
module.exports = BirthdayService
