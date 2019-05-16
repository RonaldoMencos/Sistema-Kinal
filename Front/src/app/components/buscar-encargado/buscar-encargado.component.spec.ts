import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEncargadoComponent } from './buscar-encargado.component';

describe('BuscarEncargadoComponent', () => {
  let component: BuscarEncargadoComponent;
  let fixture: ComponentFixture<BuscarEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
