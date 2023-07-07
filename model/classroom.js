class Classroom{
    
    constructor(studentsArray = []){
        this.studentsArray = studentsArray;
    }


    addStudent(student){
        this.studentsArray.push(student);
    }


    getSquads(){

        let accumulator = '';
        
        for (let i = 0; i < this.studentsArray.length; i++) {
            const student = this.studentsArray[i];
           if (i % 2 === 0) {
              accumulator += 'Coppia' + (i / 2 + 1) + ':\n';
           }
           
           
            accumulator += student.toString();
            
        }
        return accumulator;
    }

    shuffleStudents(){
        const tempArray = [];
        const originalLength = this.studentsArray.length;

        for (let i = 0; i < originalLength; i++) {
            
            const randomIndex = Math.floor(Math.random() * this.studentsArray.length);   // math random per randomizzare numeri da 0 a 1 ma fino a max 0,9999
            const student = this.studentsArray[randomIndex];
            tempArray.push(student);
            this.studentsArray.splice(randomIndex, 1);
        }
        this.studentsArray = tempArray;
    }
}
