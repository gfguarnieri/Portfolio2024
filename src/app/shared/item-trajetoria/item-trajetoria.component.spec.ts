import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrajetoriaComponent } from './item-trajetoria.component';

describe('ItemTrajetoriaComponent', () => {
  let component: ItemTrajetoriaComponent;
  let fixture: ComponentFixture<ItemTrajetoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTrajetoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemTrajetoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
