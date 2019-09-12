import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  }
  title = 'Pipes';  
  todaydate = new Date();  
  jsonval = {Name: 'Anitha', Age: '22', Address:{a1: 'Chennai', a2: 'Adayaar'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
}
