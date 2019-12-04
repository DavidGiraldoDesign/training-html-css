const view = {

    dom : document.querySelector('#root'),

    getBookDetail(){
        let section = document.createElement('section');
        section.className= 'book-detail';
        section.innerHTML= `
            <h1 class="book-title">Título del libro <span class="book-genre">(género)</span></h1> 
            <div class="info-container">
                <h2 class="book-subtitle"> Autor del libro:</h2>
                <p class="book-info">Nombre del autor del libro</p>
            </div>
            <div class="info-container">
                <h2 class="book-subtitle">Editorial:</h2>
                <p class="book-info">Nombre de la editorial</p>
            </div>
            <div class="info-container">
                <h2 class="book-subtitle">Año de publicación:</h2>
                <p class="book-info">Año de publicación</p>
            </div>
            `;
        return section;
    },

    render(){
        this.dom.appendChild(this.getBookDetail());
        console.log('Hello world');
    }

};