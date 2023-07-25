import { inject } from '@angular/core';
import { CanActivateFn, Router, mapToCanActivateChild } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  let user = localStorage.getItem("email");
  let password = localStorage.getItem("password");


  if (user == null && password == null) {
    console.log(user)
    alert("Please login with credentials");
    router.navigate(['/login']);
    return false;
  }
  // else if(user == "student@gmail.com" && password == "student"){
  //   router.navigate(['/homepage']);
  //   return true;
  // }
  // else if(user == "author@gmail.com" && password == "author"){
  //   router.navigate(['/author']);
  //   return true;
  // }

else{
  return true;
}
};

