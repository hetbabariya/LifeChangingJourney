// Questions data for all career tests - Modular approach
import { BIGFIVE_QUESTIONS } from './bigfive-questions.js';
import { INTELLIGENCE_QUESTIONS } from './intelligence-questions.js';
import { RIASEC_QUESTIONS } from './riasec-questions.js';
import { DECISION_QUESTIONS } from './decision-questions.js';
import { VARK_QUESTIONS } from './vark-questions.js';
import { SVS_QUESTIONS } from './svs-questions.js';
import { LIFE_SITUATION_QUESTIONS } from './life-situation-questions.js';

export const testQuestions = {
  mbti: {
    // E vs I (Extrovert vs Introvert) - 20 questions
    ei: [
      {
        question: "હું ક્યારે વધારે આનંદ અનુભવું છું:",
        options: [
          { text: "(A) લોકો સાથે વાતચીત કરીને..", dimension: "E", weight: 3 },
          { text: "(B) એકલા શાંતિથી રહીને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું કોઈ પ્રસંગ કે ઈવેન્ટમાં હોવ ત્યારે:",
        options: [
          { text: "(A) ઘણા લોકો સાથે બોલવાનું પસંદ કરું છું..", dimension: "E", weight: 3 },
          { text: "(B) થોડાક નજીકના મિત્રોની વચ્ચે રહું છું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું નવા લોકોને મળું ત્યારે:",
        options: [
          { text: "(A) ઉત્સાહ અનુભવુ છું..", dimension: "E", weight: 3 },
          { text: "(B) થોડું શરમાવ છું કે સંકોચ અનુભવુ છું.", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "હું ક્યારે એન્જોય કે રિલેક્સ અનુભવું છું:",
        options: [
          { text: "(A) સમૂહ પ્રવૃત્તિઓમાં ભાગ લઈને..", dimension: "E", weight: 3 },
          { text: "(B) વ્યક્તિગત પ્રવૃત્તિઓમાં ધ્યાન કેન્દ્રિત કરીને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "હું ક્યારે અંદરથી ઊર્જા મેળવું છું:",
        options: [
          { text: "(A) લોકો સાથે વાર્તાલાપ કે પ્રવુતિ કરીને..", dimension: "E", weight: 3 },
          { text: "(B) મારી અંદરની દુનિયામાંથી..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "હું ક્યારે વધારે ખુશ રહું છુંઃ",
        options: [
          { text: "(A) જાહેર સ્થાનોમાં સમય વિતાવીને..", dimension: "E", weight: 3 },
          { text: "(B) ઘર અને શાંતિભર્યા સ્થળે રહીને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "નવી જગ્યાએ જઈએ ત્યારે હું:",
        options: [
          { text: "(A) તરત લોકો સાથે વાત કરું છું..", dimension: "E", weight: 3 },
          { text: "(B) પહેલા વાત ઓછી અને માહોલનું નિરીક્ષણ કરું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મને ક્યારે વધારે આનંદ આવે છે:",
        options: [
          { text: "(A) લોકો સાથે પ્રસંગોમાં કે મેળામાં..", dimension: "E", weight: 3 },
          { text: "(B) પુસ્તક વાંચવામાં અથવા પ્રકૃતિમાં શાંતિથી..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મને ક્યારે સારી રીતે દરેક બાબતો સમજાય છે :",
        options: [
          { text: "(A) ચર્ચા દ્વારા..", dimension: "E", weight: 3 },
          { text: "(B) વિચારો અને ધ્યાન દ્વારા..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે ખાલી સમય મળે ત્યારે હું:",
        options: [
          { text: "(A) મિત્રોને મળવા અને વાત કરવા જાવ..", dimension: "E", weight: 3 },
          { text: "(B) શાંતિથી એકલા રહીને આરામ કરું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મારે નવા સંબંધ બનાવવામાં:",
        options: [
          { text: "(A) સરળતા હોય છે..", dimension: "E", weight: 3 },
          { text: "(B) થોડો સમય લાગે છે..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું લોકોની વચ્ચે હોવ ત્યારે:",
        options: [
          { text: "(A) વધુ વાત કરતા ઊર્જાવાન બનું..", dimension: "E", weight: 3 },
          { text: "(B) વધુ સાંભળતા શાંતિ અનુભવું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જ્યારે હું કોઈ સમૂહમાં હોઉં:",
        options: [
          { text: "(A) લોકો સાથે જોડાવું સરળ લાગે છે..", dimension: "E", weight: 3 },
          { text: "(B) વધારે નિરીક્ષણ કરું અને શાંત રહું.", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મિત્રો સાથે હું:",
        options: [
          { text: "(A) ઘણી વાર મળું અને વાત કરું..", dimension: "E", weight: 3 },
          { text: "(B) ઓછી વાર મળું પણ ઊંડા સંબંધ રાખું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું કોઈ નવી જગ્યાએ જાઉં ત્યારે:",
        options: [
          { text: "(A) તરત જ લોકો સાથે વાત કરું છું..", dimension: "E", weight: 3 },
          { text: "(B) પહેલા વાતાવરણ જોઈને પછી વાત કરું છું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મને ક્યારે વધારે આનંદ આવે છે:",
        options: [
          { text: "(A) લોકો સાથે રમત રમીને..", dimension: "E", weight: 3 },
          { text: "(B) એકલા પુસ્તક વાંચીને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું કોઈ સમસ્યા હલ કરવાની હોય ત્યારે:",
        options: [
          { text: "(A) લોકો સાથે ચર્ચા કરીને..", dimension: "E", weight: 3 },
          { text: "(B) એકલા વિચારીને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મને ક્યારે વધારે સારું લાગે છે:",
        options: [
          { text: "(A) લોકો સાથે ફરવા જઈને..", dimension: "E", weight: 3 },
          { text: "(B) એકલા ફરવા જઈને..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "જયારે હું કોઈ નવી વસ્તુ શીખવાની હોય ત્યારે:",
        options: [
          { text: "(A) લોકો સાથે શીખવું પસંદ કરું છું..", dimension: "E", weight: 3 },
          { text: "(B) એકલા શીખવું પસંદ કરું છું..", dimension: "I", weight: 3 }
        ]
      },
      {
        question: "મને ક્યારે વધારે આનંદ આવે છે:",
        options: [
          { text: "(A) લોકો સાથે ગીત ગાઈને..", dimension: "E", weight: 3 },
          { text: "(B) એકલા ગીત સાંભળીને..", dimension: "I", weight: 3 }
        ]
      }
    ],
    // S vs N (Sensing vs Intuition) - 20 questions
    sn: [
      {
        question: "હું હંમેશા વધુ વિશ્વાસ કરું છુંઃ",
        options: [
          { text: "(A) હકીકતો અને વર્તમાન પર..", dimension: "S", weight: 3 },
          { text: "(B) સંકેતો અને ભવિષ્યની સંભાવનાઓ પર..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું કોઈ કાર્ય શરૂ કરું ત્યારે:",
        options: [
          { text: "(A) બધું ઊંડાણપૂર્વક જાણવું ગમે..", dimension: "S", weight: 3 },
          { text: "(B) મોટા ચિત્રથી (ઉપરથી) શરૂ કરવું ગમે...", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વાત સાંભળું ત્યારે:",
        options: [
          { text: "(A) સ્પષ્ટ હકીકત અને વિગત પર ધ્યાન આપું..", dimension: "S", weight: 3 },
          { text: "(B) એકંદર અર્થ અને સંકેતો પર ધ્યાન આપું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું સમસ્યાનો ઉકેલ શોધું ત્યારે:",
        options: [
          { text: "(A) જુના અનુભવ અને ડેટા જોઈને..", dimension: "S", weight: 3 },
          { text: "(B) નવી રીત અને નવી દ્રષ્ટિ અપનાવું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વધારે પસંદ કરું છુંઃ",
        options: [
          { text: "(A) વાસ્તવિક, હાલની વસ્તુઓમાં..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યની સંભાવનાઓ અને વિચારોમાં..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વિચાર હંમેશા કેવા કરું છુંઃ",
        options: [
          { text: "(A) વ્યવહારીક અને હકીકત આધારિત..", dimension: "S", weight: 3 },
          { text: "(B) કલ્પનાત્મક અને સંભાવનાઓથી ભરેલા", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વાતચીતમાં વધુ વાપરું છું:",
        options: [
          { text: "(A) સ્પષ્ટ ઉદાહરણો અને હકીકત..", dimension: "S", weight: 3 },
          { text: "(B) કલ્પનાશક્તિ અને ભાવિ વિચારો..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મને વધુ ગમે છેઃ",
        options: [
          { text: "(A) અત્યારે શું છે તે જાણવું..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યમાં શું શક્યતા છે તે જાણવું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મારી શીખવાની પદ્ધતિ છેઃ",
        options: [
          { text: "(A) સ્ટેપ-બાય-સ્ટેપ અને વ્યવહારુ..", dimension: "S", weight: 3 },
          { text: "(B) ખ્યાલ અને વિચારથી શરૂ કરીને..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું જાણવાનું પસંદ કરું છું:",
        options: [
          { text: "(A) વાસ્તવિક માહિતી..", dimension: "S", weight: 3 },
          { text: "(B) વિચાર અને સંકેતો..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મારે વધુ ગમે છે:",
        options: [
          { text: "(A) વિગતવાર માહિતી..", dimension: "S", weight: 3 },
          { text: "(B) સામાન્ય ખ્યાલો..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું કામ કરું ત્યારે:",
        options: [
          { text: "(A) પગલું-બ-પગલું આગળ વધું..", dimension: "S", weight: 3 },
          { text: "(B) મોટા ચિત્રથી શરૂ કરું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મને વધુ સારું લાગે છે:",
        options: [
          { text: "(A) જે હાથમાં છે તે પર ધ્યાન કેન્દ્રિત કરવું..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યની યોજનાઓ બનાવવી..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વિચાર કરું ત્યારે:",
        options: [
          { text: "(A) વર્તમાન પરિસ્થિતિઓ પર ધ્યાન આપું..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યની સંભાવનાઓ વિશે વિચારું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મારી પ્રાથમિકતા છે:",
        options: [
          { text: "(A) વાસ્તવિક અને વ્યવહારીક બાબતો..", dimension: "S", weight: 3 },
          { text: "(B) નવા વિચારો અને સંભાવનાઓ..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું નિર્ણય લેતી વખતે:",
        options: [
          { text: "(A) ભૂતકાળના અનુભવોનો ઉપયોગ કરું..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યની સંભાવનાઓ ધ્યાનમાં રાખું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મને વધુ આકર્ષક લાગે છે:",
        options: [
          { text: "(A) વર્તમાનની વાસ્તવિકતા..", dimension: "S", weight: 3 },
          { text: "(B) ભવિષ્યની કલ્પના..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું સમસ્યા ઉકેલું ત્યારે:",
        options: [
          { text: "(A) જાણીતા ઉપાયો વાપરું..", dimension: "S", weight: 3 },
          { text: "(B) નવા અભિગમો અજમાવું..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "મારી કાર્યશૈલી છે:",
        options: [
          { text: "(A) વ્યવસ્થિત અને ક્રમબદ્ધ..", dimension: "S", weight: 3 },
          { text: "(B) લવચીક અને સર્જનાત્મક..", dimension: "N", weight: 3 }
        ]
      },
      {
        question: "હું વિશ્વાસ કરું છું:",
        options: [
          { text: "(A) મારા અનુભવો પર..", dimension: "S", weight: 3 },
          { text: "(B) મારી કલ્પના પર..", dimension: "N", weight: 3 }
        ]
      }
    ],
    // T vs F (Thinking vs Feeling) - 20 questions
    tf: [
      {
        question: "જ્યારે હું નિર્ણય લેતી વખતે:",
        options: [
          { text: "(A) તર્ક અને નિયમો પર આધારિત હોવું જોઈએ..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો પર આધારિત હોવું જોઈએ..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "હું હંમેશા વધુ મહત્વ આપું છું:",
        options: [
          { text: "(A) સક્ષમતા અને તર્ક..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "જ્યારે હું સમસ્યા ઉકેલું ત્યારે:",
        options: [
          { text: "(A) તર્કશીલ અને નિષ્પક્ષ રીતે વિચારું..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો ધ્યાનમાં રાખું..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "જ્યારે હું ચર્ચા કરું ત્યારે:",
        options: [
          { text: "(A) સિદ્ધાંતો અને નિયમો પર આધારિત ચર્ચા કરું..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો ધ્યાનમાં રાખું..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મારો અભિગમ હંમેશા છે:",
        options: [
          { text: "(A) હૃદયથી જે ખરેખર સાચું છે તે પર ધ્યાન કેન્દ્રિત કરવું..", dimension: "F", weight: 3 },
          { text: "(B) તર્ક અને વિશ્લેષણ પર આધારિત નિર્ણય લેવો..", dimension: "T", weight: 3 }
        ]
      },
      {
        question: "જ્યારે હું કઠોર અથવા ઊંડા મુદ્દા વિશે વાત કરું ત્યારે:",
        options: [
          { text: "(A) ધીરજથી કહું જેથી બીજાઓને દુઃખ ન થાય..", dimension: "F", weight: 3 },
          { text: "(B) સીધી અને સ્પષ્ટ રીતે કહું..", dimension: "T", weight: 3 }
        ]
      },
      {
        question: "જ્યારે હું સફળતા માપું ત્યારે:",
        options: [
          { text: "(A) લોકોની ખુશી અને સંતુષ્ટિ દ્વારા..", dimension: "F", weight: 3 },
          { text: "(B) માપી શકાય તેવા પરિણામો દ્વારા..", dimension: "T", weight: 3 }
        ]
      },
      {
        question: "હું હંમેશા વધુ વિચારું છું:",
        options: [
          { text: "(A) લોકોને દુઃખ ન થાય તે જોવું..", dimension: "F", weight: 3 },
          { text: "(B) સાચું નિર્ણય લેવું..", dimension: "T", weight: 3 }
        ]
      },
      {
        question: "મારી પ્રાથમિકતા છે:",
        options: [
          { text: "(A) લોકોની ભાવનાઓ..", dimension: "F", weight: 3 },
          { text: "(B) કાર્યની કાર્યક્ષમતા..", dimension: "T", weight: 3 }
        ]
      },
      {
        question: "હું નિર્ણય લેતી વખતે વધુ ધ્યાન આપું છું:",
        options: [
          { text: "(A) તર્ક અને વિશ્લેષણ પર..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો પર..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મને વધુ મહત્વપૂર્ણ લાગે છે:",
        options: [
          { text: "(A) ન્યાય અને તર્ક..", dimension: "T", weight: 3 },
          { text: "(B) કરુણા અને સહાનુભૂતિ..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "હું સમસ્યા ઉકેલું ત્યારે:",
        options: [
          { text: "(A) વિશ્લેષણાત્મક રીતે વિચારું..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ ધ્યાનમાં રાખું..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મારી કાર્યશૈલી છે:",
        options: [
          { text: "(A) વિશ્લેષણાત્મક અને તાર્કિક..", dimension: "T", weight: 3 },
          { text: "(B) સહાનુભૂતિશીલ અને સંવેદનશીલ..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "હું લોકો સાથે વાત કરું ત્યારે:",
        options: [
          { text: "(A) તર્ક અને હકીકતો પર ધ્યાન કેન્દ્રિત કરું..", dimension: "T", weight: 3 },
          { text: "(B) ભાવનાઓ અને સંબંધો પર ધ્યાન કેન્દ્રિત કરું..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મને વધુ સારું લાગે છે:",
        options: [
          { text: "(A) સાચું નિર્ણય લેવું..", dimension: "T", weight: 3 },
          { text: "(B) લોકોને ખુશ રાખવા..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "હું કામ કરું ત્યારે:",
        options: [
          { text: "(A) કાર્યક્ષમતા પર ધ્યાન કેન્દ્રિત કરું..", dimension: "T", weight: 3 },
          { text: "(B) ટીમના સભ્યોની ભાવનાઓ પર ધ્યાન કેન્દ્રિત કરું..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મારી પ્રાથમિકતા છે:",
        options: [
          { text: "(A) કાર્ય પૂરું કરવું..", dimension: "T", weight: 3 },
          { text: "(B) ટીમના સભ્યોની સુખાકારી..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "હું નિર્ણય લેતી વખતે વધુ ધ્યાન આપું છું:",
        options: [
          { text: "(A) તર્ક અને વિશ્લેષણ પર..", dimension: "T", weight: 3 },
          { text: "(B) લાગણીઓ અને સંબંધો પર..", dimension: "F", weight: 3 }
        ]
      },
      {
        question: "મને વધુ મહત્વપૂર્ણ લાગે છે:",
        options: [
          { text: "(A) ન્યાય અને તર્ક..", dimension: "T", weight: 3 },
          { text: "(B) કરુણા અને સહાનુભૂતિ..", dimension: "F", weight: 3 }
        ]
      }
    ],
    // J vs P (Judging vs Perceiving) - 20 questions
    jp: [
      {
        question: "હું વધારે પસંદ કરું છું:",
        options: [
          { text: "(A) યોજના અને આયોજન સાથે કામ કરવું..", dimension: "J", weight: 3 },
          { text: "(B) સ્વતંત્ર અને ખુલ્લા વિકલ્પો સાથે કામ કરવું.", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું રોજિંદા જીવનમાં:",
        options: [
          { text: "(A) નિયમિત અને વ્યવસ્થિત રોજ કામ કરું છું.", dimension: "J", weight: 3 },
          { text: "(B) જરૂરિયાત પ્રમાણે કામ કરું છું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "જ્યારે ટાસ્ક (કામ) હોય ત્યારે હું:",
        options: [
          { text: "(A) પહેલાં પૂર્ણ કરું અને પછી આરામ કરું..", dimension: "J", weight: 3 },
          { text: "(B) પહેલા આરામ કરું અને પછી ટાસ્ક પૂરું કરું.", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું અણધાર્યા ફેરફારો સામે:",
        options: [
          { text: "(A) અસહજ(અવ્યવસ્થિત) અનુભવું છું..", dimension: "J", weight: 3 },
          { text: "(B) સરળતાથી અનુકૂળ થઈ જાવ છું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું પ્રવાસ કે પ્રોજેક્ટ કામ શરૂ કરું ત્યારે:",
        options: [
          { text: "(A) પહેલાથી આયોજન કરેલું હોય છે..", dimension: "J", weight: 3 },
          { text: "(B) શરૂ ન થાય ત્યાં સુધી નક્કી હોતું નથી..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું સમયનું પાલન:",
        options: [
          { text: "(A) ખુબ સારી રીતે કરું છું.", dimension: "J", weight: 3 },
          { text: "(B) સમય સાથે વધારે લવચીકા ફેરફાર) કરું છું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું સમસ્યા ઉકેલું ત્યારે:",
        options: [
          { text: "(A) આયોજન અને ક્રમથી આગળ વધું..", dimension: "J", weight: 3 },
          { text: "(B) પરિસ્થિતિ મુજબ વિચારો બદલાવું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "મને વધારે ગમે છે:",
        options: [
          { text: "(A) નક્કી સમયસીમા સાથે કામ કરવું..", dimension: "J", weight: 3 },
          { text: "(B) કોઈ ફિક્સ સમય વગરનું સ્વતંત્ર કામ કરવું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "જ્યારે કોઈ કામ પૂરું થાય ત્યારે:",
        options: [
          { text: "(A) સંતોષ થાય કે કામ પૂર્ણ થયું..", dimension: "J", weight: 3 },
          { text: "(B) વિચાર આવે કે બીજી શું શક્યતાઓ છે ?", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "મારી જીવનશૈલી છેઃ",
        options: [
          { text: "(A) આયોજનભરેલી અને ગોઠવેલી..", dimension: "J", weight: 3 },
          { text: "(B) પ્રવાહી અને સ્વતંત્ર..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "જો મારા પ્લાનમાં બદલાવ થાય તોઃ",
        options: [
          { text: "(A) અસ્વીકાર કરું અથવા ખોટું લાગે...", dimension: "J", weight: 3 },
          { text: "(B) સહેજ સ્વીકારી લવ અને બદલાવ કરું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું વધારે ખુશ થાવ છું:",
        options: [
          { text: "(A) કામ સમય પહેલાં પૂરું કરીને આરામથી રહેવા..", dimension: "J", weight: 3 },
          { text: "(B) કામ અંતિમ સમય સુધી પણ આનંદથી કરવા..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું કોઈ નિર્ણયો હંમેશા:",
        options: [
          { text: "(A) ઝડપી અને નિશ્ચિત રીતે લઉં..", dimension: "J", weight: 3 },
          { text: "(B) સમય લઈ અને શક્યતાઓ ખૂલ્લી રાખી લઉં..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું વધુ પસંદ કરું છુંઃ",
        options: [
          { text: "(A) સુસંગત અને પ્લાન મુજબ રહેવું..", dimension: "J", weight: 3 },
          { text: "(B) નવી નવી શક્યતાઓ શોધવી...", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું જીવનમાં:",
        options: [
          { text: "(A) વ્યવસ્થિત રહું છું અને નિયમોને મહત્વ આપું..", dimension: "J", weight: 3 },
          { text: "(B) ઓપન અને સ્વતંત્ર વિચાર સાથે ચાલું છું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું સમસ્યા ઉકેલ ત્યારે :",
        options: [
          { text: "(A) આયોજન કરીને સ્ટેપ-બાય-સ્ટેપ આગળ વધું..", dimension: "J", weight: 3 },
          { text: "(B) પરિસ્થિતિ પ્રમાણે તરત નિર્ણય લઈ લઉં..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "મારી કાર્યશૈલી છે:",
        options: [
          { text: "(A) આયોજન અને સમયસીમા સાથે કામ કરવું..", dimension: "J", weight: 3 },
          { text: "(B) છેલ્લી ઘડી સુધી રાહ જોવી અથવા તરત પગલાં લેવાં..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "જ્યારે અનિશ્ચિત બદલાવ થાય ત્યારે:",
        options: [
          { text: "(A) અસ્વસ્થ (ખરાબ) અનુભવવું..", dimension: "J", weight: 3 },
          { text: "(B) આનંદથી સ્વીકારું..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું વધુ આરામદાયક છુંઃ",
        options: [
          { text: "(A) જ્યારે બધું પહેલેથી નક્કી હોય..", dimension: "J", weight: 3 },
          { text: "(B) જ્યારે દરેક વસ્તુ માટે સ્વતંત્ર ઓપ્શન હોય..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું વધુ પસંદ કરું છુંઃ",
        options: [
          { text: "(A) પ્લાન અને રૂટિન સાથે જીવીવું..", dimension: "J", weight: 3 },
          { text: "(B) સ્વતંત્ર અને ફ્રી જીવનશૈલી..", dimension: "P", weight: 3 }
        ]
      },
      {
        question: "હું મારા કાર્યોમાં વધુ પસંદ કરું છુંઃ",
        options: [
          { text: "(A) નિયમિત અને વ્યવસ્થિત રીતે કરવા..", dimension: "J", weight: 3 },
          { text: "(B) સ્વતંત્ર અને લવચીક રીતે કરવા..", dimension: "P", weight: 3 }
        ]
      }
    ]
  },
  bigfive: BIGFIVE_QUESTIONS,
  intelligence: INTELLIGENCE_QUESTIONS,
  riasec: RIASEC_QUESTIONS,
  decision: DECISION_QUESTIONS,
  vark: VARK_QUESTIONS,
  svs: SVS_QUESTIONS,
  'life-situation': LIFE_SITUATION_QUESTIONS
};
