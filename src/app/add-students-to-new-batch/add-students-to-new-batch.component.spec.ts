import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentsToNewBatchComponent } from './add-students-to-new-batch.component';

describe('AddStudentsToNewBatchComponent', () => {
  let component: AddStudentsToNewBatchComponent;
  let fixture: ComponentFixture<AddStudentsToNewBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentsToNewBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentsToNewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
