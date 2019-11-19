import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h1{
        color: aqua;
    }
  `]
})
export class AppComponent {
  title = 'new App Angular8';
  username = '';
  showSecret = false;
  log = [];

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
