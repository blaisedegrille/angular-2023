import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEditFormComponent } from './base-edit-form.component';

describe('BaseEditFormComponent', () => {
  let component: BaseEditFormComponent;
  let fixture: ComponentFixture<BaseEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseEditFormComponent]
    });
    fixture = TestBed.createComponent(BaseEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
