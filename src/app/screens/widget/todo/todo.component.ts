import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  lists: Array<any> = [
		{
			"id": 1,
			"todo": "Duis vitae nibh molestie pharetra augue vitae"
		},{
			"id": 2,
			"todo": "In vel imperdiet leoorbi mollis leo sit amet quam fringilla varius mauris orci turpis"
		},{
			"id": 3,
			"todo": "Suspendisse quis sollicitudin erosvel dictum nunc"
		},{
			"id": 4,
			"todo": "Curabitur egestas finibus sapien quis faucibusras bibendum ut justo at sagittis. In hac habitasse platea dictumst"
		},{
			"id": 5,
			"todo": "Suspendisse potenti. Cras dolor augue, tincidunt sit amet lorem id, blandit rutrum libero"
		},{
			"id": 6,
			"todo": "Proin luctus dictum nisl id auctor. Nullam lobortis condimentum arcu sit amet gravida"
		}
  ];
  
  initLastId: number = 6;
  isActive: boolean = false;
  todoValue: string = '';

  ngOnInit() {
  }

  add(): void {
    this.initLastId++;
    if (this.todoValue.trim().length > 0){
      this.lists.push({
        id: this.initLastId,
        todo: this.todoValue
      });

      this.isActive = !this.isActive;
      this.todoValue = '';
    }    
  }

  remove(todoID: number): void {
    this.lists.forEach((e, i)=>{
			if (e.id == todoID){
				this.lists.splice(i, 1)
			}
		});
  }
}
