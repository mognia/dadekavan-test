import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-white-box',
  templateUrl: './white-box.component.html',
  styleUrls: ['./white-box.component.css']
})
export class WhiteBoxComponent implements OnInit {
  user : any;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    let defultUser = this.apiService.getUsers();
    this.user = defultUser[0];
  }
  userHandeler(e){
    this.user = e;    
  }

}
