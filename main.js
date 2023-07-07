const s1 = new Student('manuela', 'ariotti');
const s2 = new Student('damiano', 'di lionardo');
const s3 = new Student('cesare', 'falzone');
const s4 = new Student('luca', 'verduci');
const s5 = new Student('isabella', 'ottonello');
const s6 = new Student('stefania', 'ghergut');
const s7 = new Student('ares', 'fiumicelli');
const s8 = new Student('francesca', 'ercolani');
const s9 = new Student('stefano', 'florio');
const s10 = new Student('bryan', 'rojas');


const classroom1 = new Classroom([s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]);


// console.log(document);

// console.log(document.getElementById('main-container'));

// const mainContainer = document.getElementById('main-container');  //recupera tag html e lo infila dentro alla variabile

// const h2Element = document.createElement('h2'); // per costruire un nuovo h2 in html

// const textNode = document.createTextNode(s1.toString());  // per creare un nuovo figlio che poi vorremo mettere dentro al div 

// h2Element.appendChild(textNode); // per mettere dentro il testo

// mainContainer.appendChild(h2Element); // append child è tipo il push dell'array, serve per aggiungere il nuovo child, mainContainer. serve per dire che dentro al main container voglio mettere il nuovo h2 creato





function renderPage(){
     
    const mainContainer = document.getElementById('main-container');  // prendiamo elemento che vogliamo riempire con gli studenti

    mainContainer.innerHTML = ''; // per svuotare il main container
 
    for (let i = 0; i < classroom1.studentsArray.length; i++){   
        
        if (i % 2 === 0){
            const h3Element = document.createElement('h3'); // ogni riga pari facciamo un nuovo h3 element
            
            const node = document.createTextNode('Coppia: ' + (i/2+1) + ': '); // qui creiamo il nuovo testo, (i/2+1) serve per scrivere il numero della coppia
            
            h3Element.appendChild(node);    // aggiungiamo ad h3Element il testo
            
            mainContainer.appendChild(h3Element); // aggiungiamo h3Element al main container
        }

        const student = classroom1.studentsArray[i];
        
        const pElement = document.createElement('p');  // perchè vogliamo un elemento p per ognuno degli studenti
        
        pElement.classList.add('student-p');  // per aggiungere una classe all'elemento creato runtime, in questo caso a tutti gli elementi p viene aggiunta una classe per poter dare css
        
        const textNode = document.createTextNode(student.toString());  // ogni giro crea un nuovo text node
        
        pElement.appendChild(textNode);
        
        mainContainer.appendChild(pElement);
    }
}

renderPage();



function shuffle(){
    console.log('sto rimescolando');
    
    classroom1.shuffleStudents(); //diciamo a class1 di rimescolarsi
    renderPage(); 

}

