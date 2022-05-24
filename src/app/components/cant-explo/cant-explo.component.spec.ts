import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantExploComponent } from './cant-explo.component';

describe('CantExploComponent', () => {
  let component: CantExploComponent;
  let fixture: ComponentFixture<CantExploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantExploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantExploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

