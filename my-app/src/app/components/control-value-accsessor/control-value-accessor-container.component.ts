import { JsonPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProvinceSelect } from "./control-value-accessor.component";
import { CvaRatingComponent } from "./cva-rating.component";

@Component({
    selector: 'control-value-accessor-container',
    template: `
      <province-select [(ngModel)]="provinceModel" #provinceEl="ngModel" [type]="'central'"></province-select>
      <span>{{provinceEl.touched ? 'touched' : 'none touch'}}</span>
      <p style="color:red" *ngIf="provinceEl.invalid && provinceEl.errors && provinceEl && provinceEl.errors['type']">Type is not correct</p>
      <p>{{provinceEl.value | json}}</p>
      ============================================
      <cva-rating [listStar]="listStar"] />
    `,
    standalone: true,
    imports: [ProvinceSelect, CvaRatingComponent, FormsModule, NgIf, JsonPipe]
})
export class ControlValueAccessorContainer {
    provinceModel: { id: number, name: string, type: 'central' | 'province' } = { "id": 4, "name": "Lào Cai", "type": "province" };
    listStar = [1, 2, 3, 4, 5];
}