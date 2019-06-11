import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import MenuItem from './menu';
@Component({
  selector: 'user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.css']
})
export class UserSideNavComponent implements OnInit {

  @Output() selectedItem = new EventEmitter();

  items: MenuItem[] = [
    { id: 'userInfo', name: 'اطلاعات کاربری' },
    { id: 'userAddress', name: 'آدرس ها' },
    { id: 'contactInfo', name: 'اطلاعات تماس' }
  ];
  selected = this.items[0];
  constructor() {
  }

  ngOnInit() {
  }
  activateClass(item) {
    this.selected = item;
    this.selectedItem.emit(item.id);
  }
}
