require('chromedriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('application', () => {

    it('should contain a div with id app', function (done) {
        driver.get('http://localhost:8080/').then(() => {
            return driver.findElement(By.id('app'));
        }).then(done);
    });

    it('should not contain a div with id zzz', function (done) {
        driver.get('http://localhost:8080/').then(() => {
            return driver.findElement(By.id('zzz'));
        }).catch(done);
    });

    afterAll(function(done){
        driver.quit().then(done);
    });

});
