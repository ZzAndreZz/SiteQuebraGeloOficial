import { Component, OnInit } from '@angular/core';

interface iItem {
  label:string;
  route:string;
  ativo:boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens: iItem[] = [
    {
      ativo:true,
      label:"home",
      route:"/home"
    },
    {
      ativo:false,
      label:"sobre-nos",
      route:"/sobre-nos"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
