import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletExComponent } from './ng-template-outlet-ex.component';

describe('NgTemplateOutletExComponent', () => {
  let component: NgTemplateOutletExComponent;
  let fixture: ComponentFixture<NgTemplateOutletExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateOutletExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateOutletExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
