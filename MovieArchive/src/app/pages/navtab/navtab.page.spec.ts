import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavtabPage } from './navtab.page';

describe('NavtabPage', () => {
  let component: NavtabPage;
  let fixture: ComponentFixture<NavtabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavtabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
