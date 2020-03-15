import { Component, OnInit, OnChanges } from '@angular/core';
import { Pagamento } from 'src/app/models/Pagamento';
import { FormGroup, FormControl, } from '@angular/forms';
import { Validar } from 'src/app/models/validar';



@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { 
    this.formPagamento = this.createForm(new Pagamento("", new Date(), "", "", ""))

  }
  
  data: string;
  formPagamento: FormGroup

  private createForm(pagamento: Pagamento): FormGroup {
    return new FormGroup({
      numero: new FormControl(pagamento.numero),
      vencimento: new FormControl(pagamento.vencimento),
      cvv: new FormControl(pagamento.cvv),
      nomeTitular: new FormControl(pagamento.nomeTitular),
      cpf: new FormControl(pagamento.cpf)
    })
  }


  get cpf() {
    return this.formPagamento.get('CPFtitular');
  }


  ngOnInit(): void {
  }

}
