import { Component, OnInit } from "@angular/core";

@Component({
  selector: "candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.css"],
})
export class CandidatesComponent implements OnInit {
  missionName = "LaunchCode Moonshot";

  candidates = [
    {
      name: "Rusty Rutabaga",
      data: { age: 5, mass: "0.75 kg", sidekick: "Blake" },
      image: "assets/images/Blake.png",
    },
    {
      name: "Tessa Tortoise",
      data: { age: 126, mass: "113 kg", sidekick: "Sally" },
      image: "assets/images/Sally.png",
    },
    {
      name: "Bernie Beagle",
      data: { age: 4, mass: "15 kg", sidekick: "Paul" },
      image: "assets/images/Paul.png",
    },
    {
      name: "Jackalope",
      data: { age: 45, mass: "33 kg", sidekick: "Chris" },
      image: "assets/images/Chris.png",
    },
    {
      name: "Champ",
      data: { age: 9, mass: "36 kg", sidekick: "Carly" },
      image: "assets/images/Carly.png",
    },
  ];

  crew = [];

  constructor() {}

  ngOnInit() {}

  // Code the addToCrew function here:
  addToCrew(crewMember) {
    if (!this.crew.includes(crewMember)) {
      this.crew.push(crewMember);
    }
  }

  isCrew(crewMember) {
    if (!this.crew.includes(crewMember)) {
      return true;
    } else return false;
  }

  fullCrew() {
    if (this.crew.length >= 3) {
      return true;
    } else return false;
  }

  // BONUS: Code the changeMissionName function here:
  changeMissionName(newName) {
    this.missionName = newName;
    return false;
  }
}
