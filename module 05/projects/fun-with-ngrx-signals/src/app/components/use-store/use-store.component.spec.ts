import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseStoreComponent } from './use-store.component';

describe('UseStoreComponent', () => {
  let component: UseStoreComponent;
  let fixture: ComponentFixture<UseStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
