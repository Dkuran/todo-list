import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	private url = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';
	protected things: any = [];
	constructor(private _http: HttpClient) {
		this.getTodoData();
	}

	getTodoData() {
		this._http.get(this.url).subscribe((response: any[]) => {
			for (const item of response) {
				this.things.push({
					text: item,
					isSelected: false
				});
			}
		});
	}
}
