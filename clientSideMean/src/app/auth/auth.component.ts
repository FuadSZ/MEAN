import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  nickname?: String;
  password?: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  signInHandler(){
    const sUser={
      nickname: this.nickname,
      password: this.password
    }

    this.authService.userAuth(sUser).subscribe(data=>{
      if(data.success){
        this.router.navigate(['/personalarea']);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }
      else{
        this.router.navigate(['/auth']);
      }
    });
  }

}
