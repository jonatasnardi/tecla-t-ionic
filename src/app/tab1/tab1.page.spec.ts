import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ListService } from '../services/list.service';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), HttpClientModule, ExploreContainerComponentModule],
      providers: [
        ListService,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle users list on load', () => {
    spyOn(component['listService'], 'getUsers').and.callThrough();

    (component as any).loadItems();
    
    expect(component['listService'].getUsers).toHaveBeenCalled();
  });

  it('should show loading when start to load users', () => {
    spyOn(component['listService'], 'getUsers').and.callThrough();

    (component as any).loadItems();
    
    expect(component.loading).toBeTrue();
  });
});
