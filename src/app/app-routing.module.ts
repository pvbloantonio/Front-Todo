import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

const routes: Routes = [

  { path: '', redirectTo: 'list-todo', pathMatch: 'full' },
  { path: 'list-todo', component: ListTodoComponent },
  { path: '**', component: ListTodoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
