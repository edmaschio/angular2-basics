import { Angular2BasicsPage } from './app.po';

describe('angular2-basics App', () => {
  let page: Angular2BasicsPage;

  beforeEach(() => {
    page = new Angular2BasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
