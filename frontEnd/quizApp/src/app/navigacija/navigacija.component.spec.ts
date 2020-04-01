import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigacijaComponent } from './navigacija.component';

describe('NavigacijaComponent', () => {
  let component: NavigacijaComponent;
  let fixture: ComponentFixture<NavigacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
