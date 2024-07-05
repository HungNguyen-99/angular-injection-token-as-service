import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementDIPUseClassComponent } from './implement-dip-use-class.component';

describe('ImplementDIPUseClassComponent', () => {
  let component: ImplementDIPUseClassComponent;
  let fixture: ComponentFixture<ImplementDIPUseClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementDIPUseClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementDIPUseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
