import Timer from './timer';

class Store {
    constructor() {
        this.timer = new Timer(this);
    }
}

const state = new Store();

export default state;