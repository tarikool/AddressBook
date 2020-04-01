import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactEditPage } from './contact-edit.page';

describe('ContactEditPage', () => {
  let component: ContactEditPage;
  let fixture: ComponentFixture<ContactEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
