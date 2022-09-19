import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisualizarProdutoComponent } from './dialog-visualizar-produto.component';

describe('DialogVisualizarProdutoComponent', () => {
  let component: DialogVisualizarProdutoComponent;
  let fixture: ComponentFixture<DialogVisualizarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVisualizarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVisualizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
