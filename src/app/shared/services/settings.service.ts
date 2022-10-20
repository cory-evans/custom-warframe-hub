import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings!: Settings;

  constructor() {
    this.load();
  }

  private load() {
    const s = localStorage.getItem('settings');

    if (!s) {
      this.settings = {
        highlightedFissures: [],
      };
      return;
    }

    this.settings = JSON.parse(s) as Settings;
  }

  save() {
    if (!this.settings) return;

    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
}

interface Settings {
  highlightedFissures: string[];
}
