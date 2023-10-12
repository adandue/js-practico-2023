// const conseguirTipoSuscripcion = (tipoDeSuscripcion) => {
//     if(tipoDeSuscripcion == "Free") {
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     }
    
//     if (tipoDeSuscripcion == "Basic") {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         return;
//     }
    
//     if (tipoDeSuscripcion == "Expert") {
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     }
    
//     if (tipoDeSuscripcion == "ExpertDuo") {
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         return;
//     } 

//     console.warn('Ese tipo de suscripción no existe');
// };


const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

const conseguirTipoSuscripcion = (suscripcion) => {
    if(tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripción no existe');
};

conseguirTipoSuscripcion('free');
conseguirTipoSuscripcion('basic');
conseguirTipoSuscripcion('expert');
conseguirTipoSuscripcion('expertduo');
conseguirTipoSuscripcion('expertduoplus');
