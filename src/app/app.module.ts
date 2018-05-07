import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './list/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, TodoListComponent ],
	imports: [ BrowserModule, HttpClientModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
