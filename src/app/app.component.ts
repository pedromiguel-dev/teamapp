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
  teams: string[][] = [];

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
  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0 ) {
      this.errorMessage = "Set a number of teams";
      return
    }
    const allMembers = [...this.members];
    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member)break;
        if(this.teams[i]){
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }

      }
    }
    console.log(this.teams);

  }
}
