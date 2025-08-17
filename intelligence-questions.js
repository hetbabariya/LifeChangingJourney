// Multiple Intelligences Test Questions
const INTELLIGENCE_QUESTIONS = {
    // Musical Intelligence (8 questions)
    musical: [
        {
            question: "શું તમે ગીત કે સંગીતના બોલ યાદ રાખી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સંગીત વિષયક રમતો કે પ્રવૃત્તિઓમાં ભાગ લેવું ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે ગીત કે સંગીત રચવાનો પ્રયત્ન કર્યો છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કોઈ પણ પદાર્થ કે વસ્તુની તાલ બનાવી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કોઈ પણ સંગીત સાધન વગાડવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે ગીત લખવા કે બનાવવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કોઈ પણ સ્થિતિમાં સ્વર કે ધ્વનિ ગ્રહણથી ઓળખી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સંગીતના આધારે લાગણીઓ વ્યક્ત કરી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Logical-Mathematical Intelligence (8 questions)
    logical: [
        {
            question: "શું મને ગણિતના પ્રશ્નો ઉકેલવામાં આનંદ આવે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું હું તર્કસંગતથી સમસ્યાઓ ઉકેલી શકું છું?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું મને પઝલ્સ અને બ્રેન ગેમ્સ ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કોઈ પણ સમસ્યામાં કારણ શોધવાનો પ્રયત્ન કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વિવિધ સમીકરણો, સૂત્રો, ગાણિતિકિય સિદ્ધાંતો સમજવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે ડેટાઓ, આંકડાઓ અને સરખામણીઓ ઓળખવામાં કુશળ છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સંખ્યાઓની સાથે રમવું ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે સાયન્સ પ્રોજેક્ટ, શોધ કે વૈજ્ઞાનિક પ્રયોગો કરવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Intrapersonal Intelligence (8 questions)
    intrapersonal: [
        {
            question: "શું તમે પોતાની લાગણીઓ અને વિચારોથી સારી રીતે પરિચિત છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે પોતાનો સ્વભાવ કે વર્તન વિશે આત્મવિશ્લેષણ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કોઈ પણ નિર્ણય લેતા પહેલા અંદરથી વિચાર કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે એકલા રહેવું અથવા આત્મચિંતન કરવું ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે ભૂલ કરશો તો તેને સ્વીકારી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે જાતે જ કોઈ નિર્ણય લઈ શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "હું પોતાની ભૂલોમાંથી શીખવાનો પ્રયત્ન કરું છું?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા અંગત લક્ષ્યો વિશે ગંભીરતા ધરાવો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Bodily-Kinesthetic Intelligence (8 questions)
    bodily: [
        {
            question: "શું તમે રમતો કે શારીરિક પ્રવૃત્તિમાં ભાગ લેવું ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને નૃત્ય કે બોડી મુવમેન્ટમાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારે શરીર હલનચલનનું સંતુલન શીખી શકે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા શરીર તમારા મનના નિર્દેશન પ્રમાણે ચલાવી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે હસ્તકલા, મૂર્તિકામ કરવામાં ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને લાગે છે કે તમે લાંબા સમય સુધી પોતાનું શરીર સ્થિર રાખી શકતા નથી?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા હાથ-પગની કોઓર્ડિનેશન સારી રીતે કરી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને નૃત્ય કે બોડી મુવમેન્ટમાં વધારે રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Naturalistic Intelligence (8 questions)
    naturalistic: [
        {
            question: "શું તમને નયનરમ્ય દ્રશ્યો કે પ્રાકૃતિક ફોટોગ્રાફીમાં રસ છે?",
            options: [
                { text: "હા, ખુબ વધારે", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વિવિધ પ્રકારના જીવજંતુઓ, પક્ષીઓ કે છોડની ઓળખમાં ખુબ રસ છે?",
            options: [
                { text: "હા, ખુબ વધારે", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને ખેતી કે બગીચામાં કામ કરવું ખુબ ગમે છે?",
            options: [
                { text: "હા, ખુબ વધારે", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને હવામાન કે વાતાવરણના ફેરફારો સમજવામાં ખુબ રસ છે?",
            options: [
                { text: "હા, ખુબ વધારે", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કુદરતી ખોરાક અથવા ઓર્ગેનિક જીવનશૈલી તરફ આકર્ષીત છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "ક્યારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને વનસ્પતિ, પક્ષીઓ કે પ્રાણીઓ વિષે જાણવું ગમે છે?",
            options: [
                { text: "હા, ખુબ વધારે", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે પ્રાણીઓની કે છોડની સંભાળમાં ખુશી અનુભવું છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારું ધ્યાન કુદરત (પ્રકૃતિની) નાની નાની બાબતો પર રહે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક કયારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Visual-Spatial Intelligence (8 questions)
    visual: [
        {
            question: "શું તમારી કલ્પનાશક્તિ પ્રબળ છે - તમારું મન ચિત્રો બનાવી શકે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને ચિત્રો, નકશા અને ડાયગ્રામ જોઈને સમજવું વધુ સરળ લાગે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને ડિઝાઈન અથવા આકારો બનાવવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને ફોટોગ્રાફી, ડિઝાઈન કે ઈન્ટીરીયરમાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે કલ્પનાઓમાં વસ્તુઓ, સ્થળો કે જગ્યાઓની રચના કરી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "હું તમે વિસ્તારો, દિશાઓ કે રસ્તાઓ યાદ રાખવામાં સક્ષમ છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વસ્તુઓનની વિવિધ વૃશ્યકોણથી કલ્પના કરી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને કલાપ્રદ વસ્તુઓ, ચિત્રો કે ડિઝાઈન બનાવવી ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Linguistic Intelligence (8 questions)
    linguistic: [
        {
            question: "શું તમને લખવાનું આનંદ આપે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે લોકોના વિચારો શબ્દોમાં કેવી રીતે વ્યક્ત કરવા તે જાણો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને લેખ લખવો કે નિબંધ લખવો પસંદ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારું ભાષણ સાંભળીને લોકો તમારાથી પ્રભાવિત થાય છે એવું તમને લાગે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને પુસ્તકો વાંચવા માટે અંદરથી ઈચ્છા થાય છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે તમારા વિચારોને કાગળ પર ઉતારવાનું પસંદ કરો છું...",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે વાતચીત કરવી કે ડિબેટ કરવી ગમે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમને કવિતાઓ લખવી કે વાંચવી પસદ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Interpersonal Intelligence (8 questions)
    interpersonal: [
        {
            question: "શું તમે અન્ય લોકોની લાગણીઓ ઝડપથી ઓળખી શકો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે લીડરશીપ લેવી પસંદ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે જૂથના મુદ્દા કે તણાવના ઉકેલ શોધવામાં કુશળ છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારામાં નવા નવા સંબંધો બાંધવાની અને તેને જાળવી રાખવાની કુશળતા છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે લોકો વચ્ચે શાંતિ સ્થાપિત કરવામાં અને સમાધાન કરવામાં રસ છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે લોકોને પ્રોત્સાહન આપો છો અને લોકો તમારી સલાહ માંગે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે અલગ અલગ પ્રકારના લોકો સાથે સરળતાથી મિક્સ થઈ જાવ છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે જૂથની જરૂરિયાતો અને લાગણીઓનું ધ્યાન રાખો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ],

    // Existential Intelligence (8 questions)
    existential: [
        {
            question: "શું તમારું મન જીવનના ઊંડા અર્થ વિશે વિચાર કરવા દોરાય છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારું મન સંસારથી વધારે આત્મિક શાંતિ તરફ આકર્ષાય છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે જીવનમાં આવી રહેલી સમસ્યાઓ પાછળનો અર્થ શોધવાનો ખુબ પ્રયત્ન કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારું ધ્યાન ભગવાન, બ્રહ્માંડ કે સૃષ્ટિની રચના પર રહે છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમારું ધ્યાન વારંવાર દુનિયાની નાશવંતતા અને અસ્તિત્વ પર જાય છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે મૌન, ધ્યાન કે એકાંતમાં વિચાર કરવાનું પસંદ કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે જીવનના નીતિ-મૂલ્યો, ધર્મ અથવા આધ્યાત્મિકતા પર ખૂબ વિચાર કરો છો?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        },
        {
            question: "શું તમે અનુભવો છો કે તમારો જન્મ કંઈક ઉચા કાર્યો માટે થયો છે?",
            options: [
                { text: "હા, હંમેશા", score: 4 },
                { text: "મોટા ભાગે", score: 3 },
                { text: "કયારેક ક્યારેક", score: 2 },
                { text: "ના, બિલકુલ નહીં", score: 1 }
            ]
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = INTELLIGENCE_QUESTIONS;
} else {
    window.INTELLIGENCE_QUESTIONS = INTELLIGENCE_QUESTIONS;
} 