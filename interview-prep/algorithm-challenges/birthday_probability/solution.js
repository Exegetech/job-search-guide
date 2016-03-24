//how many students need to be in the same class such that at least two students 
//will have the same birthday

'use strict'

function birthdayProbability(numSimulations){
    var numStudents = 0;
    
    for(let i = 0; i < numSimulations; i++){
        let studentsBday = [];
        
        do{
            studentsBday.push(Math.round(Math.random()*364));
            var index = studentsBday.indexOf(studentsBday[studentsBday.length - 1]);
        }while(index === studentsBday.length - 1)
        
        numStudents += studentsBday.length;
    }
    
    return Math.ceil(numStudents / numSimulations);
}

birthdayProbability(10000); //here we select a sample size of 10,000
//however, sample size should be determined through solution stability