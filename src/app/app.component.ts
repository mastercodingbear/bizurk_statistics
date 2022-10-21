import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bizurk_test';

  constructor() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Whenever the user explicitly chooses light mode
    localStorage['theme'] = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage['theme'] = 'dark';
  }
}
