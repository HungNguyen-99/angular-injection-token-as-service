import { inject, Injectable } from "@angular/core";
import { TestUseClassAbstract } from "../abstract-classes/common-abstract";

@Injectable()
export class TestUseClassService extends TestUseClassAbstract {
    protected diOfTestUseClassService = inject(DiOfTestUseClassService);
    logMessage(){
        console.log('Test Use Class Service:: ', this.diOfTestUseClassService.getData());
    }
}

@Injectable()
export class TestUseClassAlternativeService extends TestUseClassService{
    override logMessage(): void {
        console.log('Test Use Class Alternative Service', this.diOfTestUseClassService.getData());
    }
}

@Injectable()
export class DiOfTestUseClassService {
    getData(){
        return '[diOfTestUseClassService]';
    }
}