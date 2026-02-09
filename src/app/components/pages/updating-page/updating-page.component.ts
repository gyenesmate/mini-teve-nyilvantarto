import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, switchMap, take } from 'rxjs';
import { Camel } from '../../../models/camel.model';
import { CamelManagementService } from '../../../services/camel-management.service';
import { FormComponent } from '../../shared/form/form.component';
import { UserMessageComponent } from '../../shared/user-message/user-message.component';

@Component({
  selector: 'app-updating-page',
  imports: [FormComponent, CommonModule],
  templateUrl: './updating-page.component.html',
})
export class UpdatingPageComponent {
  camel$!: Observable<Camel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly camelManagementService: CamelManagementService,
  ) {}

  ngOnInit() {
    this.camel$ = this.route.paramMap.pipe(
      switchMap((params) =>
        this.camelManagementService.getCamelById(Number(params.get('id'))),
      ),
    );
  }

  onSubmit(formData: { name: string; humpCount: number }) {
    this.camel$.pipe(take(1)).subscribe({
      next: (camel) => {
        this.camelManagementService
          .updateCamel(camel.id, {
            name: formData.name,
            humpCount: formData.humpCount,
          })
          .subscribe({
            next: () => {
              alert('Teve sikeresen frissítve!');
              this.router.navigate(['/list'], {
                state: { message: 'Teve sikeresen frissítve!' },
              });
            },
            error: (error) => {
              alert('Hiba történt frissítés közben!');
              console.error('Error updating camel:', error);
            },
          });
      },
      error: (error) => {
        console.error('Error loading camel:', error);
      },
    });
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
