import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'template-driven-form',
    template: `
        {{favoriteColor}} <input type="text" [(ngModel)]="favoriteColor" #formDriven="ngModel" required>
        <div>{{formDriven.status}}</div>
    `,
    standalone: true,
    imports: [FormsModule]
})
export class TemplateDrivenFormComponent {
    favoriteColor = '';
}

@Component({
    selector: 'form-overview',
    template: `
        <p>form overview</p>
        Favorite Color {{favoriteColorControl.value}}: <input type="text" [formControl]="favoriteColorControl">
        <p>=================</p>

        <p>form gr ctr</p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div formGroupName="pertionalInfor">
                <input type="text" formControlName="firstName">
                <input type="text" formControlName="age">
            </div> <br>
            <div formGroupName="address">
                <input type="text" formControlName="city">
            </div>
            <button type="submit">submit</button>
        </form>
        <button (click)="disable()">Disable First Name</button>
        <button (click)="enable()">Enable First Name</button>
        <br>
        <br>
        =============Template Driven Form=================
        <br>
        <br>
        <template-driven-form></template-driven-form>
    `,
    standalone: true,
    imports: [ReactiveFormsModule, TemplateDrivenFormComponent]
})
export class FormOverViewComponent {
    favoriteColorControl = new FormControl('')
    form = new FormGroup({
        pertionalInfor: new FormGroup({
            firstName: new FormControl('A'),
            age: new FormControl(25)
        }),
        address: new FormGroup({
            city: new FormControl('HCM')
        })
    })

    ngOnInit(): void {
        this.favoriteColorControl.setValue('222');

        this.form.valueChanges.subscribe(() => {
            // debugger
            console.log(this.form);
        })
        this.form.get('pertionalInfor')?.valueChanges.subscribe(() => {
            // debugger
        })

        const pertionalInfor = (this.form.get('pertionalInfor') as FormGroup)
        pertionalInfor.get('firstName')?.valueChanges.subscribe(() => {
            // debugger
        })
        pertionalInfor.get('age')?.valueChanges.subscribe(() => {
            // debugger
        })


        this.form.get('address')?.valueChanges.subscribe(() => {
            // debugger
        })
    }

    disable() {
        (this.form.get('pertionalInfor.firstName') as FormControl)?.disable({ onlySelf: false, emitEvent: true });
    }

    enable() {
        (this.form.get('pertionalInfor.firstName') as FormControl)?.enable({ onlySelf: true, emitEvent: true });
    }

    onSubmit() {
        debugger
    }
}