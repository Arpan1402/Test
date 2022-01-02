import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  name='Arpan'
  message='From 1st comp'
  age='23'
  anime={
    name:'AOT'
  }
  song={
    name:'Never gonna give you up'
  }

  ngOnInit(): void {
  }

  onclick(){
    this.anime={
      ...this.anime,name:'Gintama'
    }
    console.log(this.name)
  }

  on2ndclick(){
    this.song={
      ...this.song,name:'Harlem'
    }
  }

  onEnter(){
    this.anime.name='SAO'
    console.log('in button')
  }

}
