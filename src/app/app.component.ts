import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aardvark';
  themeService: ThemeService;
  selectedTheme: any;
  
  onThemeSelect() {
    this.selectedTheme = "Afterdark";
    this.themeService.setTheme(this.selectedTheme);
  }
}
