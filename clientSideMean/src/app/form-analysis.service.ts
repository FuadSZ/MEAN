import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormAnalysisService {

  constructor() { }

  nicknameValidation(nickname: String){
    if(nickname==""){
      return false;
    }
    else{
      return true;
    }
  }

  emailValidation(email: String){
    if(email==""){
      return false;
    }
    else{
      return true;
    }
  }

  passwordValidation(password: String){
    if(password==""){
      return false;
    }
    else{
      return true;
    }
  }
}
