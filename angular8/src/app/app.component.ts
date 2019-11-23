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
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a touch!' }];

  onSeverAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onAddBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }

  onChangesFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
