import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'isCompleted', 'acciones'];
  dataSource = new MatTableDataSource<Todo>();


  constructor(private _todoService: TodoService) {

  }
  ngOnInit(): void {
    this.getTodos();
  }
  ngAfterViewInit(): void {

  }

  getTodos() {
    this._todoService.getTodos().subscribe({
      next: (data) => {
        this.dataSource.data = data;

      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.info('Complete')
      },
    });


  }



}
