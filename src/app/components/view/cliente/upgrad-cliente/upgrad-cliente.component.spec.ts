import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradClienteComponent } from './upgrad-cliente.component';

describe('UpgradClienteComponent', () => {
  let component: UpgradClienteComponent;
  let fixture: ComponentFixture<UpgradClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
