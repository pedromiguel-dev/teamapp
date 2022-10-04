import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  errorMessage = '';
  members: string[] = [];
  numberOfTeams: number | '' = '';

  onNumberOfTeamsInput(number: string) {
    this.numberOfTeams = Number(number);
  }
  onInput(memberName: string) {
    this.newMemberName = memberName;
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name cannot be empty';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
}
