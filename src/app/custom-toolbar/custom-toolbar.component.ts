import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.scss']
})
export class CustomToolbarComponent implements OnInit {
  @Input() iconClass: string;
  @Input() toolbarClass: string;
  @Input() title: string;
  @Input() defaultLayout: boolean;
  @Output() onUserAction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(ele) {
    this.onUserAction.emit(ele);
  }


}
