import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from '../auth.service';
import { FormAnalysisService } from '../form-analysis.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  nickname: String;
  email: String;
  password: String;
  constructor(private formAnalysis: FormAnalysisService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router){
     this.nickname="",
     this.email="",
     this.password=""
   }

  ngOnInit(): void {
  }

  signUpHandler(){
    const newUser={
      nickname: this.nickname,
      email: this.email,
      password: this.password
    }

    if(!this.formAnalysis.nicknameValidation(newUser.nickname)){
      console.log("Nickname not entered");
      this.flashMessage.show('Nickname not entered', {cssClass:'alert-danger', timeout:3000});
      return false;
    }  
    if(!this.formAnalysis.emailValidation(newUser.email)){
      console.log("Email is not provided");
      this.flashMessage.show('Email not entered', {cssClass:'alert-danger', timeout:3000});
      return false;
    }  
    if(!this.formAnalysis.passwordValidation(newUser.password)){
      console.log("Password is not entered");
      this.flashMessage.show('Password not entered', {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    this.authService.userReg(newUser).subscribe(data =>{
      if(!data.success){
        this.flashMessage.show(data.message, {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/registration']);
      }
      else{
        this.flashMessage.show(data.message, {cssClass:'alert-success', timeout:3000});
        this.router.navigate(['/auth'])
      }
    });

    return true;
  }
}
