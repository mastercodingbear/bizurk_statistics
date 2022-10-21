import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryReachProgressComponent } from './country-reach-progress.component';

describe('CountryReachProgressComponent', () => {
  let component: CountryReachProgressComponent;
  let fixture: ComponentFixture<CountryReachProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryReachProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryReachProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
