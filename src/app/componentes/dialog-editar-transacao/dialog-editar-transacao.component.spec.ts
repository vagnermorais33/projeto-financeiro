import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarTransacaoComponent } from './dialog-editar-transacao.component';

describe('DialogEditarTransacaoComponent', () => {
  let component: DialogEditarTransacaoComponent;
  let fixture: ComponentFixture<DialogEditarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
