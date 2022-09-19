import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInserirProdutoComponent } from './dialog-inserir-produto.component';

describe('DialogInserirProdutoComponent', () => {
  let component: DialogInserirProdutoComponent;
  let fixture: ComponentFixture<DialogInserirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInserirProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInserirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
