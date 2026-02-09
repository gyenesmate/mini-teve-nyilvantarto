import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormComponent } from '../../shared/form/form.component';
import { CamelManagementService } from '../../../services/camel-management.service';
import { UserMessageComponent } from '../../shared/user-message/user-message.component';

@Component({
  selector: 'app-adding-page',
  imports: [
    FormComponent
  ],
  templateUrl: './adding-page.component.html',
  styleUrl: './adding-page.component.scss'
})
export class AddingPageComponent {

  constructor(
    private readonly camelManagementService: CamelManagementService,
    private router: Router
  ) {}

  handleFormSubmit(data: any) {
    this.camelManagementService.addCamel(data).subscribe({
      next: (result) => {
        alert('Teve sikeresen hozzáadva!');
        this.router.navigate(['/list'], { state: { message: 'Teve sikeresen hozzáadva!' } });
      },
      error: (error) => {
        alert('Hiba történt a teve hozzáadása közben!');
        console.error('Error adding camel:', error);
      }
    });
  }
}

