import { Injectable } from "@angular/core";

export class TestUseFactoryService {
    constructor(
        private logger: Logger, 
        private isAuthorized: boolean
    ){}

    getHeros(){
        const auth = this.isAuthorized ? 'authorized' : 'unauthorized';
        this.logger.log(`Getting heroes for ${auth} user.`);
        return HEROES.filter((hero: any) => this.isAuthorized || !hero.isSecret);
    }
}

@Injectable()
export class Logger {
    log(value: string){
        console.log(value);
    }
}

@Injectable()
export class UserService {
    user: any = {
        isAuthorized: false
    }
}

export const HEROES = [
    { id: 11, name: 'Dr Nice', isSecret: true },
    { id: 12, name: 'Narco', isSecret: false },
    { id: 13, name: 'Bombasto', isSecret: false },  
    { id: 14, name: 'Celeritas', isSecret: true },
    { id: 15, name: 'Magneta', isSecret: false },
    { id: 16, name: 'RubberMan', isSecret: false }
]