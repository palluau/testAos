beforeEach(async () => {
  await page.goto('http://localhost:3001');
});

describe('Login', () => {
  it('Can\'t login with wrong email and password', async done => {
    const email = 'test@test.com';
    const password = 'toto42';
    await page.type('#email', email);
    await page.type('#password', password);
    await Promise.all([page.click('#login-btn'), page.waitForSelector('#error')]);
    const textContent = await page.evaluate(() => {
      const error = document.getElementById('error');
      return error.textContent;
    });
    expect(textContent).toEqual('Wrong email or password');
    done();
  });
  it('Can login with email and password', async done => {
    const email = 'julespalluau@gmail.com';
    const password = 'test123';
    await page.type('#email', email);
    await page.type('#password', password);
    await Promise.all([page.click('#login-btn'), page.waitForNavigation()]);
    const textContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root.textContent;
    });
    expect(textContent).toEqual('Success');
    done();
  });
});