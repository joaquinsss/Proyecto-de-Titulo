import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulpaListComponent } from './pulpa-list.component';

describe('PulpaListComponent', () => {
  let component: PulpaListComponent;
  let fixture: ComponentFixture<PulpaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulpaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulpaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
