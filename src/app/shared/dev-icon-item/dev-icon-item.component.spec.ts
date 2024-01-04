import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevIconItemComponent } from './dev-icon-item.component';

describe('DevIconItemComponent', () => {
  let component: DevIconItemComponent;
  let fixture: ComponentFixture<DevIconItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevIconItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevIconItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
