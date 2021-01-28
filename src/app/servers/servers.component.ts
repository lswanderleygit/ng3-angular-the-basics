import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = ''
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];

  visibilityParagraph = false;
  log = []

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleDetails() {
    this.visibilityParagraph = !this.visibilityParagraph;
    this.log.push(new Date());
    console.log(this.log.length)
  }

}
