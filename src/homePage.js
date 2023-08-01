const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');



    //append
    content.appendChild(pageContent);
    
}