import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  showFiller = false;
  SeeExplination:boolean = true;
  visible:boolean = false;
  explain(){
   
    this.SeeExplination = !this.SeeExplination; 
    this.visible = !this.visible
    console.log("Hi")
  }
}

