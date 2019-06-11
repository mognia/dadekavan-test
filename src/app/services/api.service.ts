import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  
  getUsers() {
  const  users = [
    {
      name : 'علی بلیانی',
      phone: '09171171586',
      photo:'/img_avatar.png'
    },
    {
      name : 'محمدرضا غفارنیا',
      phone: '09101722342',
      photo:'./assets/avatars/avatar.jpg'
    },
    {
      name : 'کاربر تست',
      phone: '0912345667',
      photo:'./assets/avatars/avatar2.png'
    },
    
    ];
    return users;
  }
}
