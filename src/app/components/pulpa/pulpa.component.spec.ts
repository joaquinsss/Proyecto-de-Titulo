import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulpaComponent } from './pulpa.component';

describe('PulpaComponent', () => {
  let component: PulpaComponent;
  let fixture: ComponentFixture<PulpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
