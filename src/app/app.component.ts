import { Component } from '@angular/core';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  }

  handleAction($event) {
    alert($event.currentTarget.dataset.originalTitle + " toolbar item pressed");
  }
}


