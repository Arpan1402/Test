import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  arr=['arpan', 'trinath', 'deepon']
  cond=true

  obj=[
    {
      name:'arpan',
      isActive:true
    },
    {
      name:'deepon',
      isActive:true
    },
    {
      name:'trinath',
      isActive:false
    }
  ]

  color='blue';

  str='en'

  ngOnInit(): void {
  }
  
  toggle(){
    this.cond=!this.cond;
    this.color=this.cond?'red':'blue'
    this.str=this.cond?'en':'fr'
  }

  getcolor(){
    this.color=this.cond?'red':'blue'
    return this.color
  }
}
