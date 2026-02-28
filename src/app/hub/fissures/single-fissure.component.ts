import { Component, computed, input, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'fissure-card',
  templateUrl: './single-fissure.component.html',
  standalone: false,
})
export class SingleFissureComponent implements OnInit {
  fissure = input.required<WarframeApi.Fissure>();

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  url = computed(() => {
    const f = this.fissure();

    let tier = f.tier.toLowerCase();

    // omnia fissures are a mix of all the other fissures
    if (tier === 'omnia') {
      tier = 'lith';
    }

    return (
      'https://raw.githubusercontent.com/WFCD/genesis-assets/master/svg/fissures/' +
      tier +
      '.svg'
    );
  });

  highlighted = computed(() => {
    return (
      this.settingsService.settings.highlightedFissures.indexOf(
        this.fissure().missionType,
      ) >= 0
    );
  });
}
