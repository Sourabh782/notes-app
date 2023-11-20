import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  taskList: Array<any> = [];

  addTask(data: string, desc:string){
    this.taskList.push({title: data, desc: desc, comp: false});
    console.log(desc)
  }

  delete(i: number){
    this.taskList.splice(i,1);
  }

  toggleComp(i: number){
    this.taskList[i].comp = !this.taskList[i].comp;
    console.log(this.taskList[i].comp);
  }
  constructor() { }
}
