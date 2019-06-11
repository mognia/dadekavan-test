import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-box-details',
  templateUrl: './white-box-details.component.html',
  styleUrls: ['./white-box-details.component.css']
})
export class WhiteBoxDetailsComponent implements OnInit {
  @Input() selectedUser :any;
  selectedComponent = 'userInfo';
  constructor() { }

  ngOnInit() {
    
  }
  pageHandeler(e) {
  this.selectedComponent = e;
  }
}
