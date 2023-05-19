import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaInformativaComponent } from './aba-informativa.component';

describe('AbaInformativaComponent', () => {
  let component: AbaInformativaComponent;
  let fixture: ComponentFixture<AbaInformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbaInformativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
