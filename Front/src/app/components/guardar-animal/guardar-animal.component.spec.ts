import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarAnimalComponent } from './guardar-animal.component';

describe('GuardarAnimalComponent', () => {
  let component: GuardarAnimalComponent;
  let fixture: ComponentFixture<GuardarAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
