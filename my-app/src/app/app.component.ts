import { Component } from '@angular/core';
import SimpleService from '../lib/service';

class AppMessageView {
  message: string | undefined;
  loading: boolean = true;

  constructor(key?: string) {
    if (!key) {
      this.message = 'Choose you option!';
      this.loading = false;
      return;
    }
    this.init(key);
  }

  private init(key: string) {
    SimpleService.fetch({ key }).then((message) => {
      this.message = message;
      this.loading = false;
    });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Carlos';
  model: AppMessageView;

  constructor() {
    this.model = new AppMessageView();
  }

  onMyNameClick() {
    this.model = new AppMessageView('name');
  }

  onMyFavouriteDishClick() {
    this.model = new AppMessageView('dish');
  }

  onMyFavouriteTripClick() {
    this.model = new AppMessageView('trip');
  }
}
