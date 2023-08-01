import createHomePage from './homePage';
import createNavPage from './nav';

function initialLoad() {
    createNavPage();
    createHomePage();
}

export default initialLoad;