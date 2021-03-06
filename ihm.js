var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


exports.start =  function (){
/*     service.init(() =>); */
    
    service.init()
    .then((nb) =>{
    console.log(nb , 'sessions trouvées')
    }); poseQuestion()
}
    
function poseQuestion(){
    rl.question(
        '************************* \n \n'
        + '1. Rafraichir les données \n'
        + '2. Lister les sessions \n'
        + '3. Lister les présentateurs \n'
        + '99. Quitter \n'


        , function (saisie) {

            if (saisie == 1) {
                service.init().then((nb) => {
                    console.log(nb, 'sessions trouvées')
                }); 
                poseQuestion();
            }

            if (saisie == 2) {
             service.listerSessions().then((session)=> {
             session.forEach( s =>  console.log(s.name)   ) 
              session.map( s => console.log(s.name));  
                 poseQuestion();
             })
    
            }

            if (saisie == 3) {
                service.listerPresentateurs().then((presentateurs) => {
                    presentateurs.forEach((presentateur) => {
                    console.log(presentateur);
                    }
                    );
                    poseQuestion();
                })        
                    
            
              
            }

            if (saisie == 99) {
                continuer = false;
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
            }

        });
}
  

 





