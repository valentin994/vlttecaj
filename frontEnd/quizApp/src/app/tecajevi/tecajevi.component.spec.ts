import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajeviComponent } from './tecajevi.component';

describe('TecajeviComponent', () => {
  let component: TecajeviComponent;
  let fixture: ComponentFixture<TecajeviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecajeviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecajeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
