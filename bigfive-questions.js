const BIGFIVE_QUESTIONS = {
    // Openness to Experience (8 questions)
    openness: [
        {
            question: "શું હું નવી વસ્તુઓ અજમાવવાનું પસંદ કરું છું?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું મને કુત્રિમ અને કલાત્મક પ્રવૃત્તિઓમાં રસ છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું હું ઘણી વાર વિચારોમાં ખોવાઈ જાઉં છું?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું મને નવા નવા અનુભવો કરવા ખુબ વધુ પસંદ છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું હું મારો વૃષ્ટિકોણ બદલવા તૈયાર રહું છું?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું મને જુદી જુદી સંસ્કૃતિ અને જીવનશૈલી વિશે જાણવું ગમે છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કલ્પનાઓમાં વધારે જીવો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે નવા વિચારોને સ્વીકારવા તૈયાર રહો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Conscientiousness (8 questions)
    conscientiousness: [
        {
            question: "શું તમે જવાબદાર અને શિસ્તબદ્ધ રહેવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા લક્ષ્યો પર ધ્યાન કેન્દ્રિત રાખી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સમયનું પાલન કરવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારી ફરજો પર ધ્યાન આપો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે પરિપૂર્ણતા માટે પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે નિયમોનું પાલન કરવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વ્યવસ્થિત રીતે કામ કરવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારી વસ્તુઓ વ્યવસ્થિત રાખવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Extraversion (8 questions)
    extraversion: [
        {
            question: "શું તમે નવા લોકો સાથે વાતચીત કરવામાં આનંદ માણો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને જૂથની પ્રવૃત્તિઓમાં રસ છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને લોકો સાથે સમય પસાર કરવો ગમે છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વાતચીત શરૂ કરવામાં આનંદ માણો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સ્ટેજ પર બોલવામાં આનંદ માણો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સરળતાથી હસી શકો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સરળતાથી નવા મિત્રો બનાવી શકો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે લોકોની આસપાસ રહેવાથી ઊર્જા મેળવો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Neuroticism (8 questions)
    neuroticism: [
        {
            question: "શું તમે ઘણી વાર ચિંતા કરો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે પરીક્ષા વખતે સરળતાથી તણાવમાં આવી જાવ છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારા મૂડમાં ઝડપથી ફેરફાર આવે છે?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે નકારાત્મક વિચારોથી ઘેરાયેલા રહો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે નાની વસ્તુઓ વિશે બેચેન રહો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા વિશે ખોટા વિચારો રાખો છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે દુઃખદ અનુભવોમાં ફસાઈ જાવ છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે નાની વસ્તુઓથી સરળતાથી પ્રભાવિત થાવ છો?",
            options: [
                { text: "હા, ખૂબ વધારે", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Agreeableness (8 questions)
    agreeableness: [
        {
            question: "શું તમે લોકોની મદદ કરવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે બીજાઓ પ્રત્યે સ્નેહ દર્શાવો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે મીઠી અને સભ્ય રીતે બોલવાનું પસંદ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે બીજાઓની લાગણીઓનું મૂલ્ય સમજો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે દલીલો ટાળવાનો પ્રયાસ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે બીજાઓની જરૂરિયાતોને પ્રાથમિકતા આપો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે માફી માટે વિશ્વાસ રાખો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે મિત્રો કે પરિવાર માટે કંઈપણ કરવા તૈયાર રહો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "ક્યારેક ક્યારેક", score: 3 },
                { text: "ભાગ્યે જ", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ]
}; 