export class LoggingService {
  logStatusChange(status: string) {
    console.log('A Server Status Changed, new string: ' + status);
  }
}
