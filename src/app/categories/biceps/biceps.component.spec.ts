import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepsComponent } from './biceps.component';

describe('AbsComponent', () => {
  let component: BicepsComponent;
  let fixture: ComponentFixture<BicepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});