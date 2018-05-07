import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit, OnChanges {
	@Input() data: any[];
	public taskName = '';
	public selectedItems: any[];
	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.data) {
			this.itemsSelected();
		}
	}

	changeAll(selected: boolean) {
		for (const item of this.data) {
			item.isSelected = selected;
		}
		this.itemsSelected();
	}

	addItem(event) {
		if (event.code === 'Enter') {
			// console.log(event);
			// console.log(this.taskName);
			this.data.push({ text: this.taskName, isSelected: false });
			this.taskName = '';
			this.itemsSelected();
		}
	}

	deleteItem(index) {
		this.data.splice(index, 1);
		this.itemsSelected();
	}

	itemsSelected() {
		this.selectedItems = this.data.filter((item) => item.isSelected === false);
	}

	selectItem(index) {
		if (this.data[index].isSelected) {
			this.data[index].isSelected = false;
		} else {
			this.data[index].isSelected = true;
		}
		this.itemsSelected();
	}
}
