import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'fissure-card',
  templateUrl: './single-fissure.component.html',
})
export class SingleFissureComponent implements OnInit {
  @Input() fissure?: WarframeApi.Fissure;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  get missionTypes() {
    return this.settingsService.settings.highlightedFissures;
  }
}
