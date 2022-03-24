import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api_url = environment.api_url;
  private dataEdit = new BehaviorSubject<Task>(null);
  botaoEdit = this.dataEdit.asObservable();


  constructor(private http: HttpClient) { }

  getTask(task: Task) {
    this.dataEdit.next(task);
  }

  createTask(task: Task) {
    return this.http.post<Task>(this.api_url + '/add/task', task).pipe(

      map(
        data => {
          console.log(data);
          return data;
        }
      )
    )
  }
}
