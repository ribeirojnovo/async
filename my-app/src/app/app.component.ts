import { Component } from '@angular/core';
import SimpleService from '../lib/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Carlos';
  message = 'Choose you option!';
  loading = false;

  onMyNameClick() {
    this.loading = true;
    SimpleService.fetch({ key: 'name' }).then((message) => {
      this.message = message;
      this.loading = false;
    });
  }

  onMyFavouriteDishClick() {
    this.loading = true;
    SimpleService.fetch({ key: 'dish' }).then((message) => {
      this.message = message;
      this.loading = false;
    });
  }

  onMyFavouriteTripClick() {
    this.loading = true;
    SimpleService.fetch({ key: 'trip' }).then((message) => {
      this.message = message;
      this.loading = false;
    });
  }
}
