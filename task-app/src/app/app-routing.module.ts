import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTaskComponent } from './view/form-task/form-task.component';
import { NotFoundComponent } from './shared-components/not-found/not-found.component';


const routes: Routes = [

  // redireciona para o add task
  { path: '', redirectTo: '/add-task', pathMatch: 'full' },
  // rota de add task
  { path: 'add-task', component: FormTaskComponent },
  //caso seja uma rota desconhecida
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
