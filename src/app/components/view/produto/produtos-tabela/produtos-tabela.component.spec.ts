import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosTabelaComponent } from './produtos-tabela.component';

describe('ProdutosTabelaComponent', () => {
  let component: ProdutosTabelaComponent;
  let fixture: ComponentFixture<ProdutosTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
