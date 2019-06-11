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
      photo:'/img_avatar.png',
      city:'اهواز',
      address:'خیابان اول کوچه دوم بن بست یکم پلاک 77',
      mail:'a@b.com'
    },
    {
      name : 'محمدرضا غفارنیا',
      phone: '09101722342',
      photo:'./assets/avatars/avatar.jpg',
      city:'تهران',
      address:'میدان پونک - میدان پونک - کوچه گلزار 3 - پلاک 1 - طبقه 2 - واحد 4',
      mail:'mohammad@ghaffarnia.com'
    },
    {
      name : 'کاربر تست',
      phone: '0912345667',
      photo:'./assets/avatars/avatar2.png',
      city:'نیویورک',
      address:'خیابان اول دست راست',
      mail:'my@addres.com'
    },
    
    ];
    return users;
  }
}
