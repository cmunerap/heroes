import {} from 'jasmine';
import { TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero';

describe('HeroComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeroComponent] });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(HeroComponent);
    expect(fixture.componentInstance instanceof HeroComponent).toBe(
      true,
      'should create HeroComponent'
    );
  });
});
