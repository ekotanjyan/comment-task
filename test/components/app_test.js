import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows comment box component', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows comment list component', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
