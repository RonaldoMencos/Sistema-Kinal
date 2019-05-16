import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAnimalComponent } from './buscar-animal.component';

describe('BuscarAnimalComponent', () => {
  let component: BuscarAnimalComponent;
  let fixture: ComponentFixture<BuscarAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
