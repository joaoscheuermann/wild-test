import { RESTContactlistPage } from './app.po';

describe('rest-contactlist App', () => {
  let page: RESTContactlistPage;

  beforeEach(() => {
    page = new RESTContactlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
