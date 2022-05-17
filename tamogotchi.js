const tamogotchi = {
    name: "Anduin",
    meal: 1,
    energy: 2,
    mood: 4,

    getStatus: function () {
        let result
        let hungry
        let sleepy
        let moody
        let died
        if (this.meal < 3) {
            hungry = "Я голоден"
        } else {
            hungry = "Я не голоден"
        }
        if (this.energy < 3) {
            sleepy = "Я хочу спать"
        } else {
            sleepy = "Я не хочу спать"
        }
        if (this.mood < 3) {
            moody = "Мне скучно"
        } else {
            moody = "Мне весело"
        }

        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            result = `${this.name} умер :(`
        } else {
    
        result = `Имя: ${this.name}, Еда: ${hungry}(${this.meal}), Энергия: ${sleepy}(${this.energy}), Настроение: ${moody}(${this.mood}).`
        }
        console.log(result) 
    },

    setName: function (newName) {
        this.name = newName
    },

    eat: function () {
        if (this.meal < 5) {
        this.meal += 1
        this.mood -= 1
        }
        
    },

    sleep: function () {
        if (this.energy < 5) {
            this.energy += 1
            this.meal -= 1
        }


    },

    play: function () {
        if (this.mood < 5) {
            this.mood += 1
            this.energy -= 1
        }
    }



  }




  