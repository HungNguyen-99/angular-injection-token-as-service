import { NgFor } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'cva-rating',
    template: `
        <p>CVA RATING</p>
        <div>
            <!-- <span *ngFor="let item of listStar"></span> -->
        </div>
    `,
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CvaRatingComponent,
            multi: true
        }
    ],
    imports: [NgFor]
})
export class CvaRatingComponent implements OnInit, ControlValueAccessor {

    @Input() listStar: number[] = [];

    ngOnInit(): void {

    }
    writeValue(obj: any): void {

    }
    registerOnChange(fn: any): void {

    }
    registerOnTouched(fn: any): void {

    }
    setDisabledState?(isDisabled: boolean): void {

    }

}