import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchesVideoComponent } from './crunches-video.component';

describe('CrunchesVideoComponent', () => {
  let component: CrunchesVideoComponent;
  let fixture: ComponentFixture<CrunchesVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrunchesVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrunchesVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
