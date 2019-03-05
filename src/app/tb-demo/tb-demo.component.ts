import { Component, OnInit,ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-tb-demo',
  templateUrl: './tb-demo.component.html',
  styleUrls: ['./tb-demo.component.scss']
})
export class TbDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('sidenav') public el: any;

  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
  this.el.show();
  }
}
