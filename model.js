/*
    For hver side:
    - Hvilke data må vi ha i modellen for å kunne tegne opp dette skjermbildet?
    - Hva kan man gjøre i dette skjermbilde? Hvordan skal dette vises i modellen?

*/


const model = {

    app: {
        currentPage: 'home',
        currentUser: 'Jøran',


    },
    inputs: {

        startPage: {
            chooseDate: '',
            chooseTime: '',
            logIn: '',

        },


        questionPage: {
            questions: [],
            answers: [],

        },


        adminPage: {
            newAdmin: [],
            viewResult: "",
            change: [],
            new: [],
        },

    },

    //data
    users: [
        { name: 'Jøran', pwd: 'Admin' },
    ],
    // data for spørsmål i meningsmålingen
    qAndA: [
        {
            id: 1,
            question: '',
            answer: '',
        }
    ],
    // data for å legge til spørsmål
    newQuestion: [
        {
            // felt for å skrive spørsmål
            questionInput: '',
            // felt for å skrive inn svar
            answerInput: '',
            // valgfelt for å endre type svar ie statisk eller custom
            answerType: '',
            // legg til svar til spørsmålet
            answerAdd: '',
            // Legg til spørsmål+svar i meningsmålingen
            questionAdd: '',

        }
    ],






};