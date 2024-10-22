import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent implements OnInit{
  titre : string = "demo du data binding Interpolation ";

  status : boolean = true;
  constructor(){}

  ngOnInit(): void {
    
  }
  changerTitre(){
    this.titre="Nouveau titre!";
  }

}
