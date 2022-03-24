import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Task } from '../../models/task';
import { TaskService } from '../../controller/service/task/task.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {

  //validando formulário sem caracteres especiais e com o tamanho minimo de 8
  formTask = new FormGroup({
    value: new FormControl('', [Validators.required,
    Validators.pattern('(?=.*?[a-z])[a-z\d ]{8,}')]),
    key: new FormControl('', [Validators.required])
    // Validators.pattern('[a-zA-Z0-9d\ ]{8,25}')])
  });

  task: Task;

  constructor(public taskService: TaskService) { }



  ngOnInit(): void {
    this.taskService.botaoEdit.subscribe(edit => {
      if (edit !== null) {
        this.task = edit;
        this.formTask.get('key').setValue(edit.key);
        this.formTask.get('value').setValue(edit.value);
      }
    })
  }

  validation() {
    if (this.formTask.valid) {
      console.log('xablau');
      this.create();
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Deu ruim..',
        text: 'Cadastro não realizado,' +
          'preencha corretamente todos os campos'
      });
    }
  }


  create() {
    // if (this.formTask.valid) {}

    this.task = this.formTask.value;
    console.log(this.task);
    this.taskService.createTask(this.task).subscribe(
      data => {
        //salvando task
        Swal.fire({
          icon: 'success',
          title: 'Aeeeee',
          text: 'Task criada com sucesso!'
        });

      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Vixe...',
          text: 'Erro ao criar task!'
        });
      }
    );



  }
}