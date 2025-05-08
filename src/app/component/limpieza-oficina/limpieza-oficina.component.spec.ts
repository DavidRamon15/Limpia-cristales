import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaOficinaComponent } from './limpieza-oficina.component';

describe('LimpiezaOficinaComponent', () => {
  let component: LimpiezaOficinaComponent;
  let fixture: ComponentFixture<LimpiezaOficinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiezaOficinaComponent]
    });
    fixture = TestBed.createComponent(LimpiezaOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
