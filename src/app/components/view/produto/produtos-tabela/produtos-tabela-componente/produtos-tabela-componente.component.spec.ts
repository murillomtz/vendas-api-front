import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosTabelaComponenteComponent } from './produtos-tabela-componente.component';

describe('ProdutosTabelaComponenteComponent', () => {
  let component: ProdutosTabelaComponenteComponent;
  let fixture: ComponentFixture<ProdutosTabelaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosTabelaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosTabelaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
