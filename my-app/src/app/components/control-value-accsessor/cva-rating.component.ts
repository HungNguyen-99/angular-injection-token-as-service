import { NgClass, NgFor } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'cva-rating',
    template: `
        <p>CVA RATING</p>
        <div>
            <span *ngFor="let item of listStar; let index = index" [ngClass]="{'isStar': indexStart === index, 'nonStar': indexStart !== index}" (click)="rate(index)">★</span>
        </div>
    `,
    styles: [
        `
            .isStar {
                color: gold;
                font-size: 24px;
            }
            .nonStar {
                color: gray;
                font-size: 24px;
            }
            div {
                display: flex;
                gap: 5px;
                cursor: pointer;
            }
        `
    ],
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CvaRatingComponent,
            multi: true
        }
    ],
    imports: [NgFor, NgClass]
})
export class CvaRatingComponent implements OnInit, ControlValueAccessor {


    @Input() listStar: number[] = [];

    indexStart = 0;
    isDisable = false;
    onChange!: (index: number) => void;
    onTouched!: () => void;

    ngOnInit(): void {
    }
    writeValue(obj: any): void {
        this.indexStart = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisable = isDisabled;
    }

    rate(index: number) {
        if (this.isDisable) {
            return;
        }
        // this.isDisable = index === 4;
        this.indexStart = index;
        this.onChange(index);
        this.onTouched();
    }

}