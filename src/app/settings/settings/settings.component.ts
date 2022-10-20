import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  host: {
    class: 'flex-1',
  },
})
export class SettingsComponent implements OnInit {
  tab: string = 'fissure';

  missionTypes = [
    { name: 'Assault' },
    { name: 'Capture' },
    { name: 'Defense' },
    { name: 'Disruption' },
    { name: 'Extermination' },
    { name: 'Interception' },
    { name: 'Mobile Defense' },
    { name: 'Rescue' },
    { name: 'Skirmish' },
    { name: 'Spy' },
    { name: 'Survival' },
  ];

  get settings() {
    return this.settingsService.settings;
  }

  constructor(public settingsService: SettingsService) {}

  ngOnInit(): void {}

  setTab(t: string) {
    this.tab = t;
  }
}
