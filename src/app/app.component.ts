import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './serivces/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any
  constructor(
    private userSevice:UserService,
    private tostr:ToastrService
    ){

  }
  ngOnInit(): void {
    this.userSevice.getData().subscribe(
      (user:any)=>{
       
        this.user=user.results[0];
        console.log(this.user)
      },
      (err)=>{
        this.tostr.error(err.status, "Something Went Wrong")
      }
      

    )  
    
  }
  
}
