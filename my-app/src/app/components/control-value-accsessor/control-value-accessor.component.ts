import { NgFor } from "@angular/common";
import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from "@angular/forms";

@Component({
    selector: 'province-select',
    template: `
        <select (change)="handleOnProvinceChange($event)" (focus)="onTouched()" [disabled]="isDisabled">
            <option>-- Select a province --</option>
            <option *ngFor="let province of provincesList" [value]="province.id" [selected]="isSelect(province.id)">{{province.name}}</option>
        </select>
    `,
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ProvinceSelect),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => ProvinceSelect),
            multi: true
        }
    ],
    imports: [NgFor]
})
export class ProvinceSelect implements ControlValueAccessor, Validator {
    @Input('type') type!: 'central' | 'province';

    validate(control: FormControl): ValidationErrors | null {
        if (!this.type || !this.provinceData) {
            return null;
        }
        return this.provinceData.type === this.type ? null : {
            type: {
                valid: false,
                actual: control.value
            }
        }
    }

    //==========================================================

    provincesList: { id: number, name: string, type: 'central' | 'province' }[] = [
        { id: 1, name: 'Hà Nội', type: 'central' },
        { id: 2, name: 'TP Hồ Chí Minh', type: 'central' },
        { id: 3, name: 'Đà Nẵng', type: 'central' },
        { id: 4, name: 'Lào Cai', type: 'province' },
        { id: 5, name: 'Yên Bái', type: 'province' },
        { id: 6, name: 'Quảng Bình', type: 'province' },
        { id: 7, name: 'Thái Nguyên', type: 'province' },
        { id: 8, name: 'Daklak', type: 'province' },
        { id: 9, name: 'Nghệ An', type: 'province' },
        { id: 10, name: 'Hà Tĩnh', type: 'province' }
    ];

    private provinceData!: { id: number, name: string, type: 'central' | 'province' };
    onChange!: (provinceData: any) => void;
    onTouched!: () => void;
    isDisabled!: boolean;

    isSelect(provinceId: number): boolean {
        return !this.provinceData ? false : (provinceId === this.provinceData.id);
    }

    writeValue(obj: any): void {
        this.provinceData = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    handleOnProvinceChange(e: any) {
        const provinceId = parseInt(e.target.value);
        const provinceSelect = this.provincesList.find(province => province.id === provinceId);
        this.writeValue(provinceSelect);
        this.onChange(provinceSelect);
    }

}