import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaCasaComponent } from './limpieza-casa.component';

describe('LimpiezaOficinaComponent', () => {
  let component: LimpiezaCasaComponent;
  let fixture: ComponentFixture<LimpiezaCasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiezaCasaComponent]
    });
    fixture = TestBed.createComponent(LimpiezaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
