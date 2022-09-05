import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInseririTransacaoComponent } from './dialog-inseriri-transacao.component';

describe('DialogInseririTransacaoComponent', () => {
  let component: DialogInseririTransacaoComponent;
  let fixture: ComponentFixture<DialogInseririTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInseririTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInseririTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
