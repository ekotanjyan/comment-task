import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const state = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(CommentList, null, state);
  });

  it('shows an <li> for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows the text of each comment', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});
