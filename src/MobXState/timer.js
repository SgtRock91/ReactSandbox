import { observable, action, makeObservable } from 'mobx';

class Timer {
    time = 0;

    constructor() {
        makeObservable(this, {
            time: observable,
            startTimer: action,
        });
    }

    startTimer = () => {
        console.log('here');
        setInterval(() => {
            this.time = this.time + 1;
        }, 1000);
    }
}

export default Timer;