import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentOutletComponent } from './ng-component-outlet.component';

describe('NgComponentOutletComponent', () => {
  let component: NgComponentOutletComponent;
  let fixture: ComponentFixture<NgComponentOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponentOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
