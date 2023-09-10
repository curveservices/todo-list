import  UI  from './UI'
import handlers from './event-handlers'

UI.responsiveSidebar();
UI.renderProjects();
UI.changeLink('inbox');

handlers.listenClicks();
handlers.resizeHandler();
handlers.keyboardHandler();