import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'platform'
})
export class TestProvideInPlatformService {
    count = 1;
    emitAmongTabs = new BehaviorSubject<number>(-1);

    setEmitAmongTabs(value: number) {
        this.emitAmongTabs.next(this.emitAmongTabs.getValue() + value);
    }
    getEmitAmongTabs() {
        return this.emitAmongTabs.asObservable() as Observable<number>;
    }

    setCount(value: number) {
        this.count += value;
    }
    getCount() {
        return this.count
    }
}


@Injectable({
    providedIn: 'root'
})
export class PlatformSharedService {

    private storageKey = 'sharedData';
    private storageSubject = new BehaviorSubject<number>(this.getData());

    constructor(private ngZone: NgZone) {
        window.addEventListener('storage', (event) => this.onStorageChange(event));
    }

    setData(value: any): void {
        localStorage.setItem(this.storageKey, JSON.stringify(this.getData() + value));
        this.storageSubject.next(this.getData());
    }

    getData(): number {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : 0;
    }

    getStorageObservable() {
        return this.storageSubject.asObservable();
    }

    private onStorageChange(event: StorageEvent) {
        if (event.key === this.storageKey) {
            this.ngZone.run(() => {
                this.storageSubject.next(this.getData());
            });
        }
    }
}