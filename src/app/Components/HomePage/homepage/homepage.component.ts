import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private router:Router){}
  start:boolean=false;
  
  startButton(){
   this.start = !this.start
   
  }
  navigateToStartQuiz(){
     this.router.navigate(['/homepage/quizpage']);
   
  
  }
  logout(){

    this.router.navigate(['/login']);
    localStorage.clear();
  }

}
