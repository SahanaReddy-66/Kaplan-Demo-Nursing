import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorpage',
  templateUrl: './authorpage.component.html',
  styleUrls: ['./authorpage.component.scss']
})
export class AuthorpageComponent {
  constructor(private route:Router){

  }
  logout(){
this.route.navigate(['/login']);
localStorage.clear()
  }
}
