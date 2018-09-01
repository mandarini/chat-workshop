import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() chatMsg: string;

  constructor() { }

  ngOnInit() {
  }

  sendMsg(msg) {
   if (msg !== null) {
     console.log(msg);
      // this.taskService.addTask(task);
   }
 }

}
