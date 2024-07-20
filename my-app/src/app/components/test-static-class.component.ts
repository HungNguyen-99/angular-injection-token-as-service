import { Component, OnInit } from "@angular/core";
import { TestStaticClass } from "../statics/test-static-class";

@Component({
    selector: 'test-static-class',
    template: ` <p>Test Static Class</p> `,
    standalone: true,
})
export class TestStaticClassComponent implements OnInit {
    public checkChange = 1;
    ngOnInit(): void {
        console.log(TestStaticClass.sum(1, 2));
        TestStaticClass.checkChange(this.checkChange);
        console.log(this.checkChange);

    }
}