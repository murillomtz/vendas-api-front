import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTabelaComponentComponent } from './clientes-tabela-component.component';

describe('ClientesTabelaComponentComponent', () => {
  let component: ClientesTabelaComponentComponent;
  let fixture: ComponentFixture<ClientesTabelaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesTabelaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTabelaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
