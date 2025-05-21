import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaLocalComponent } from './limpieza-local.component';

describe('LimpiezaOficinaComponent', () => {
  let component: LimpiezaLocalComponent;
  let fixture: ComponentFixture<LimpiezaLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiezaLocalComponent]
    });
    fixture = TestBed.createComponent(LimpiezaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
