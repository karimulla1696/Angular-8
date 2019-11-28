import {Injectable} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ['shaik', 'kareem'];
  inactiveUsers = ['shaik', 'manjoor'];

  constructor(private countersService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countersService.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countersService.incrementActiveToInactive();
  }
}
