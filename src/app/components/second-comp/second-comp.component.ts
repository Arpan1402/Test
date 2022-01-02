import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondCompComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() sendMessage;
  @Input() sendAge;
  @Input() anime;

  constructor() { }

  game={

  }

  ngOnInit(): void {
    console.log('2nd comp loaded')
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changed')
  }
  
  ngAfterContentInit(): void {
      
  }

}
