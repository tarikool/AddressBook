import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactCreatePage } from './contact-create.page';

describe('ContactCreatePage', () => {
  let component: ContactCreatePage;
  let fixture: ComponentFixture<ContactCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
