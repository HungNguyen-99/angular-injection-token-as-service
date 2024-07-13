import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";

@Component({
    selector: 'app-tab-panel',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
        
    `,
    styles: ['']
})
export class TabPanelComponent implements OnInit, OnDestroy {
    @Input() title!: string;
    @ViewChild(TemplateRef, {static: true}) panelBody!: TemplateRef<unknown>;
    constructor(private tabGroub: TabGroupComponent){}

    ngOnInit(): void {
        this.tabGroub.addTabPanel(this);
    }

    ngOnDestroy(): void {
        this.tabGroub.removeTabPanel(this);
    }
}