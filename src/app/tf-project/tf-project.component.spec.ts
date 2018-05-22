import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfProjectComponent } from './tf-project.component';


describe('TfProjectComponent', () => {
  let component: TfProjectComponent;
  let fixture: ComponentFixture<TfProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
