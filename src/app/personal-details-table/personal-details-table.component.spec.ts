import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsTableComponent } from './personal-details-table.component';

describe('PersonalDetailsTableComponent', () => {
  let component: PersonalDetailsTableComponent;
  let fixture: ComponentFixture<PersonalDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDetailsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
