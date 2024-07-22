import { AsyncPipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { PlatformSharedService, TestProvideInPlatformService } from "../services/test-provideIn-platform.service";

@Component({
    selector: 'app-test-provideIn-platform',
    template: `
        <p>test-provideIn-platform:: {{this.testProvideInPlatformService.getCount()}}</p>
        <button (click)="testProvideInPlatformService.setCount(4)">Set Count</button>

        <p>==========================Subject===========================</p>

        <p>test-provideIn-platform:: {{this.testProvideInPlatformService.getEmitAmongTabs() | async}}</p>
        <button (click)="testProvideInPlatformService.setEmitAmongTabs(1)">Set Emit</button>

        <p>==========================LocalStorage===========================</p>

        <p>test-loalStorage-platform:: {{this.platformSharedService.getStorageObservable() | async}}</p>
        <button (click)="platformSharedService.setData(1)">Set LocalStorage</button>
    `,
    standalone: true,
    imports: [AsyncPipe]
})
export class TestProvideInPlatformComponent implements OnInit { 
    testProvideInPlatformService = inject(TestProvideInPlatformService);
    platformSharedService = inject(PlatformSharedService);
    ngOnInit(): void {
        this.testProvideInPlatformService.setCount(3);
        console.log(this.testProvideInPlatformService.getCount());
    }
}