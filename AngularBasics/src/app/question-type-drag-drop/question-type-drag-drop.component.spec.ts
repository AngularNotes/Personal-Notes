import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypeDragDropComponent } from './question-type-drag-drop.component';

describe('QuestionTypeDragDropComponent', () => {
  let component: QuestionTypeDragDropComponent;
  let fixture: ComponentFixture<QuestionTypeDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTypeDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypeDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
