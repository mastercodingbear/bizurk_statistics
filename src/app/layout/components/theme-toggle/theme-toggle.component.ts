import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  toggle: boolean;
  constructor() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.toggle = true;
      document.documentElement.classList.add('dark');
    } else {
      this.toggle = false;
      document.documentElement.classList.remove('dark');
    }
  }

  ngOnInit(): void {}

  toggleTheme() {
    if (this.toggle) {
      this.toggle = false;
      document.documentElement.classList.remove('dark');
    } else {
      this.toggle = true;
      document.documentElement.classList.add('dark');
    }
  }
}
