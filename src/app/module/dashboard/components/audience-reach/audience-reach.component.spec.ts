import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceReachComponent } from './audience-reach.component';

describe('AudienceReachComponent', () => {
  let component: AudienceReachComponent;
  let fixture: ComponentFixture<AudienceReachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceReachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
