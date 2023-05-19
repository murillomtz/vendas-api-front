import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelInformativoComponent } from './painel-informativo.component';

describe('PainelInformativoComponent', () => {
  let component: PainelInformativoComponent;
  let fixture: ComponentFixture<PainelInformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelInformativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
