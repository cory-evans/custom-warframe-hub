import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'hub-fissures',
  templateUrl: './fissures.component.html',
})
export class FissuresComponent implements OnInit {
  @Input() fissures?: WarframeApi.Fissure[];

  tab: string;

  get fissuresFiltered() {
    if (!this.fissures) return [];

    this.fissures.sort((a, b) => {
      return a.tierNum - b.tierNum;
    });

    switch (this.tab) {
      case 'normal':
        return this.fissures.filter(
          (x) => x.isHard == false && x.isStorm == false
        );
      case 'steelpath':
        return this.fissures.filter((x) => x.isHard == true);
      case 'voidstorm':
        return this.fissures.filter((x) => x.isStorm == true);
      default:
        return this.fissures;
    }
  }
  constructor(private settingsService: SettingsService) {
    this.tab = localStorage.getItem('fissureView') || 'all';
  }

  get missionTypes() {
    return this.settingsService.settings.highlightedFissures;
  }

  ngOnInit(): void {}

  selectTab(t: string) {
    localStorage.setItem('fissureView', t);
    this.tab = t;
  }
}
