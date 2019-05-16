import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEncargadoComponent } from './guardar-encargado.component';

describe('GuardarEncargadoComponent', () => {
  let component: GuardarEncargadoComponent;
  let fixture: ComponentFixture<GuardarEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
