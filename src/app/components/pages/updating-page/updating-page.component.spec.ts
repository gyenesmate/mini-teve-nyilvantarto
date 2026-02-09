import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingPageComponent } from './updating-page.component';

describe('UpdatingPageComponent', () => {
  let component: UpdatingPageComponent;
  let fixture: ComponentFixture<UpdatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
