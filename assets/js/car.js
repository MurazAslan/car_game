
const honk = document.querySelector('#honk')
const work = document.querySelector('#work')
const world = document.querySelector('#world')
const tuneUp = document.querySelector('#tuneup')
var stats = document.querySelector('#stats')


const car = {

    marka: '',
    model: '',
    kilometraj: 0,
    workingEngine: false,
    isBroken: false,

    honk: function () {
        if (this.isBroken) {
            alert('car need tune up')
            return;
        }
        this.workingEngine = true
    },

    driveToWork: function () {
        if (!this.workingEngine) {
            alert('start engine')
            return;
        } else if (this.isBroken) {
            alert('car need tune up')
            return
        }
        const randomDistance = Math.floor(Math.random() * (17 - 3) + 3)
        // alert('last mil: ' + this.kilometraj)
        this.kilometraj += randomDistance
        // alert('new mil: ' + this.kilometraj)
        this.workingEngine = false;
    },

    driveToWorld: function () {
        if (!this.workingEngine) {
            alert('start engine')
            return;
        } else if (this.isBroken) {
            alert('car need tune up')
            return
        }
        const randomDistance = Math.floor(Math.random() * (15000 - 5000) + 5000)
        // alert('last mil: ' + this.kilometraj)
        this.kilometraj += randomDistance
        // alert('new mil: ' + this.kilometraj)
        this.isBroken = true;
        this.workingEngine = false;
        // alert('car was broken!!!')
    },

    tuneUp: function () {
        this.isBroken = false
       
        // alert('car working')
    },


    showStats: function () {
        const message = ` 
    
        Marka: ${this.marka}<br />
        Model: ${this.model}<br />
        Kilometraj: ${this.kilometraj} <br />
        Work car?: ${this.isBroken ? 'broken' : 'work'}<br />
        Engine is working: ${this.workingEngine ? 'Yes' : 'No'}
`;
        stats.innerHTML = message

    }


}

car.marka = prompt('enter your car marka').trim()
car.model = prompt('enter your car model').trim()




honk.addEventListener('click', function (e) {
    car.honk()

    car.showStats()
})


work.addEventListener('click', function (e) {
    car.driveToWork()

    car.showStats()
})

world.addEventListener('click', function (e) {
    car.driveToWorld()

    car.showStats()

})


tuneUp.addEventListener('click', function (e) {
    car.tuneUp()

    car.showStats()
})