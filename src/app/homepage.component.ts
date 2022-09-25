import { Component, Input } from '@angular/core';

@Component({
  selector: 'Homepage',
  template: `This is the homepage.`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HomepageComponent {
  @Input() name: string;
}
