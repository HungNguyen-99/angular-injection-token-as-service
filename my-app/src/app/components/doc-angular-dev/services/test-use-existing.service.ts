import { Injectable } from "@angular/core";

@Injectable()
export class TestUseExistingService {
    public count = 1;
    log(){
        console.log('Test Use Existing Service::', this.count);
    }
    setCount(value: number){
        this.count = value;
    }
}

@Injectable()
export class TestUseExistingService2 extends TestUseExistingService{
}