import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CamelManagementService } from '../../../services/camel-management.service';
import { Camel } from '../../../models/camel.model';
import { UserMessageComponent } from '../../shared/user-message/user-message.component';

@Component({
  selector: 'app-listing-page',
  imports: [CommonModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.scss'
})
export class ListingPageComponent {

  camels$!: Observable<Camel[]>;

  @ViewChild('userMessageHost', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private readonly camelManagementService: CamelManagementService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadCamels();
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadCamels();
        const navigation = this.router.getCurrentNavigation();
        const message = navigation?.extras.state?.['message'];
        if (message) {
          /* this.showUserMessage(message); */
        }
      });
  }

  loadCamels() {
    this.camels$ = this.camelManagementService.listCamels();
  }

  msgShow = (message: string) => {
    this.showUserMessage(message);
  }

  editCamel(id: number) {
    this.router.navigate(['/editing', id]);
  }

  private showUserMessage(message: string): void {
    setTimeout(() => {
      this.container.clear();
    }, 5000);
    console.log('showing message: ', message);
    const userMessageComponentRef = this.container.createComponent(UserMessageComponent);
    userMessageComponentRef.instance.message = message;
  }
}
