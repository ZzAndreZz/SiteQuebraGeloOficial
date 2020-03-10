import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSozinhoComponent } from './produto-sozinho.component';

describe('ProdutoSozinhoComponent', () => {
  let component: ProdutoSozinhoComponent;
  let fixture: ComponentFixture<ProdutoSozinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoSozinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoSozinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
