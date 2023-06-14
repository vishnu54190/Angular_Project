import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private url='https://localhost:7100/api/Login/api/login';
  private _url='https://localhost:7100/api/Todo';
  // private new_url='https://localhost:7100/api/Todo/api/todo/add';
  // private delete_url='https://localhost:7100/api/Todo/api/todo/delete';
  cred_list:any[] = [['vishnuprasad54190@gmail.com','vish123']];
  logged_email: string = '';
  constructor(private http:HttpClient) { }

  // gettasks(){
  //   this.http.get('https://localhost:710/api/Todo/api/todos/{email}');
  // }

  // login(email: string, password: string): Observable<HttpResponse<any>> {
  //   const loginData = { email, password };
  //   return this.http.post(this.url, loginData, { observe: 'response' });


gettask(email: string): Observable<any> {
  let url: string = `${this._url}/${email}`;
  return this.http.get<any>(url)
}
addtask(title:string,description:string,email:string): Observable<ITask> {
  let url: string = `${this._url}/${title},${description},${email}`;
  return this.http.post<any>(this._url,url);
}

deleteSid(title: string): Observable<any> {
  let url: string = `${this._url}/${title}`;
  return this.http.delete<any>(url)
}


}