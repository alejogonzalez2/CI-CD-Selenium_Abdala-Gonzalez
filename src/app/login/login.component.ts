import { Router } from "@angular/router"

export class LoginComponent {
  error: any
  constructor(private router: Router){
    this.error = ""
  }
  public login(){
    this.router.navigate(["/Datos"]) 
  }
}
