import {Component, OnInit} from '@angular/core';
import {AccountService} from "./account.service";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h1{
        color: aqua;
    }
  `],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  title = 'new App Angular8';
  username = '';
  showSecret = false;
  log = [];
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a touch!' }];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  loadedFeature = 'recipe';
  // numbers = [1, 2, 3, 4, 5, 6];
  onlyOdd = false;
  oddNumber = [1, 3, 5];
  evenNumber = [1, 2, 4];
  value = 10;

  // services example
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  // services example method
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }
  //
  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

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


  onIntervalField(fireNumber: number) {
    if (fireNumber % 2 === 0) {
      this.evenNumbers.push(fireNumber);
    } else {
      this.oddNumbers.push(fireNumber);
    }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
