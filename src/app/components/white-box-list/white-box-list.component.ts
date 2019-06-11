import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiService } from "../../services/api.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-white-box-list',
  templateUrl: './white-box-list.component.html',
  styleUrls: ['./white-box-list.component.css']
})
export class WhiteBoxListComponent implements OnInit {
  users;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() selectedUser = new EventEmitter();
  dataSource = new MatTableDataSource;
  constructor(
    private apiService : ApiService,
  ) { }

  ngOnInit() {
    this.users = this.apiService.getUsers();
    this.dataSource.data = this.users;
    console.log(this.dataSource);
    
    this.dataSource.paginator = this.paginator;
   // this.selectedUser = this.users[0];
  }
  detecdUser(user){
    this.selectedUser.emit(user);
  }

}