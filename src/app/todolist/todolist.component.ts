import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoserviceService } from '../services/todoservice.service';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  titleinput:string='';
  descinput:string='';
  success:string='';
  deltitleinput:string='';
  deleted:string='';
  newStudent: any = {
    
    title: 'Laptop',
    description: 'kjdjfskdnfk',
    email: 'vishnuprasad54190@gmail.com'
  }


constructor(private authService: TodoserviceService) { }
    
    

    public hotel:any[]=[];
    getall() {
        this.authService.gettask(this.authService.logged_email).subscribe(data => this.hotel=data);
        console.log(this.hotel);
        console.log(this.authService.logged_email);
    }
    // addtaskk(){
    //   this.authService.addtask(this.newStudent).subscribe();
    //   this.success="Successfully added task";
    //   console.log(this.titleinput,this.descinput);
    // }
    addtaskk(): void {
      this.authService.addtask(this.newStudent.title,this.newStudent.description,this.newStudent.email).subscribe(student => {
        alert ("Student Added")
        console.log('New student added:', student);
     
      });
    }
    ondelete(){
      this.authService.deleteSid(this.deltitleinput).subscribe();
      this.deleted="Task deleted successfully";

    }
   
  // Title:string='';
  // Description:string='';
   
  // student=[];
  
  // onget(){
  //   console.log("inside");
  //   this.authService.gettask("vishnuprasad54190@gmail.com").subscribe(data => this.student = data);
  //   console.log(this.student);

  // }
}
