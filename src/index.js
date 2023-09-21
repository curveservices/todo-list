import  UI  from './UI'
import handlers from './event-handlers'

UI.responsiveSidebar();
UI.renderProjects();
UI.changeLink('inbox');

handlers.resizeHandler();
handlers.listenClicks();
handlers.keyboardHandler();