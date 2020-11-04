import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: 'formation.component.html',
  styleUrls: ['formation.component.scss'],
})
export class FormationComponent {
  isMenuShown = false;

  constructor(
    private router: Router
  ) {
  }

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }

  goToPage(page: string) {
    this.isMenuShown = false;
    this.router.navigate([page]);
  }
}
