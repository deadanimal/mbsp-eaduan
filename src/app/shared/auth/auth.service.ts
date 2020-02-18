import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public userRole: number = 1;

  constructor() { }

}
