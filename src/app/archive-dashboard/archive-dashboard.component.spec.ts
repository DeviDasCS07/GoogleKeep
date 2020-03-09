import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDashboardComponent } from './archive-dashboard.component';

describe('ArchiveDashboardComponent', () => {
  let component: ArchiveDashboardComponent;
  let fixture: ComponentFixture<ArchiveDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
