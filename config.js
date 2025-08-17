// Configuration file for the comprehensive career test system
const TEST_CONFIG = {
    // Test metadata
    testInfo: {
        title: "જીવન પરિવર્તન સફર",
        subtitle: "Life Transformation Journey",
        description: "A comprehensive psychological assessment covering personality, intelligence, interests, values, and decision-making styles.",
        duration: "45-60 minutes",
        totalQuestions: 80
    },

    // Available tests for the tab system
    availableTests: [
        {
            id: "mbti",
            name: "MBTI કારકિર્દી પરીક્ષણ",
            english: "MBTI Career Test",
            description: "Personality type assessment for career guidance",
            icon: "fas fa-user-tie",
            color: "#3498db",
            questions: 80,
            duration: "45-60 મિનિટ"
        },
        {
            id: "intelligence",
            name: "બહુવિધ બુદ્ધિ પરીક્ષણ",
            english: "Multiple Intelligences Test",
            description: "Assessment of different types of intelligence",
            icon: "fas fa-brain",
            color: "#f39c12",
            questions: 72,
            duration: "45-60 મિનિટ"
        },
        {
            id: "bigfive",
            name: "Big Five વ્યક્તિત્વ પરીક્ષણ",
            english: "Big Five Personality Test",
            description: "Assessment of five core personality dimensions",
            icon: "fas fa-chart-bar",
            color: "#e74c3c",
            questions: 40,
            duration: "25-35 મિનિટ"
        },
        {
            id: "riasec",
            name: "RIASEC કારકિર્દી પરીક્ષણ",
            english: "RIASEC Career Test",
            description: "Assessment of career interests and work preferences",
            icon: "fas fa-compass",
            color: "#f39c12",
            questions: 60,
            duration: "30-40 મિનિટ"
        },
        {
            id: "svs",
            name: "SVS મૂલ્ય પરીક્ષણ",
            english: "SVS Value Survey",
            description: "Assessment of personal values and life priorities",
            icon: "fas fa-heart",
            color: "#e91e63",
            questions: 50,
            duration: "25-35 મિનિટ"
        },
        {
            id: "decision",
            name: "નિર્ણય શૈલી પરીક્ષણ",
            english: "Decision-Making Style Test",
            description: "Assessment of decision-making preferences and approach",
            icon: "fas fa-brain",
            color: "#673ab7",
            questions: 25,
            duration: "20-30 મિનિટ"
        },
        {
            id: "vark",
            name: "VARK શીખવાની શૈલી પરીક્ષણ",
            english: "VARK Learning Style Test",
            description: "Assessment of preferred learning methods and styles",
            icon: "fas fa-graduation-cap",
            color: "#795548",
            questions: 20,
            duration: "15-25 મિનિટ"
        },
        {
            id: "life-situation",
            name: "જીવન પરિવર્તન સફર",
            english: "Life Transformation Journey",
            description: "Assessment of current life situation across social, economic, and geographical dimensions",
            icon: "fas fa-road",
            color: "#607d8b",
            questions: 15,
            duration: "15-20 મિનિટ"
        }
    ],

    // MBTI dimensions and their descriptions
    mbtiDimensions: {
        E: {
            name: "બહિર્મુખી",
            english: "Extrovert",
            description: "લોકોમાં ઉર્જા મેળવે.. (Gets energy from people..)"
        },
        I: {
            name: "આંતર્મુખી",
            english: "Introvert",
            description: "એકલામાં ઉર્જા મેળવે.. (Gets energy when alone..)"
        },
        S: {
            name: "અનુભવ",
            english: "Sensing",
            description: "હકીકત, વર્તમાન, અનુભવ પર આધારિત.. (Based on facts, present, experience..)"
        },
        N: {
            name: "કલ્પના",
            english: "Intuition",
            description: "ભવિષ્ય, સંકેતો, શક્યતાઓ પર આધારિત.. (Based on future, signs, possibilities..)"
        },
        T: {
            name: "વિચાર",
            english: "Thinking",
            description: "તર્ક અને યોગ્યતા પરથી નિર્ણય લે.. (Makes decisions based on logic and correctness..)"
        },
        F: {
            name: "લાગણી",
            english: "Feeling",
            description: "લાગણી અને સંબંધો પરથી નિર્ણય લે.. (Makes decisions based on feelings and relationships..)"
        },
        J: {
            name: "આયોજન",
            english: "Judging",
            description: "વ્યવસ્થા, યોજના અને નિયમ પસંદ કરે.. (Prefers order, plan, and rules..)"
        },
        P: {
            name: "ઓપન",
            english: "Perceiving",
            description: "સ્વતંત્રતા, અવકાશ અને બદલાવ પસંદ કરે.. (Prefers freedom, space, and change..)"
        }
    },

    // Multiple Intelligences types
    intelligenceTypes: {
        musical: {
            name: 'સંગીત બુદ્ધિ',
            english: 'Musical Intelligence',
            description: 'સંગીત, ધ્વનિ અને તાલ સમજવાની ક્ષમતા',
            examples: ['સંગીતકાર', 'ગાયક', 'સંગીત શિક્ષક', 'સાઉન્ડ એન્જિનિયર'],
            icon: '🎵',
            color: '#e74c3c'
        },
        logical: {
            name: 'તાર્કિક-ગાણિતિક બુદ્ધિ',
            english: 'Logical-Mathematical Intelligence',
            description: 'તર્ક, સંખ્યાઓ અને વૈજ્ઞાનિક વિચારની ક્ષમતા',
            examples: ['વૈજ્ઞાનિક', 'ગણિતશાસ્ત્રી', 'ઇન્જિનિયર', 'ડેટા એનાલિસ્ટ'],
            icon: '🔢',
            color: '#3498db'
        },
        intrapersonal: {
            name: 'આંતરવ્યક્તિગત બુદ્ધિ',
            english: 'Intrapersonal Intelligence',
            description: 'પોતાની લાગણીઓ અને વિચારો સમજવાની ક્ષમતા',
            examples: ['મનોવૈજ્ઞાનિક', 'સલાહકાર', 'લેખક', 'ધ્યાન શિક્ષક'],
            icon: '🧠',
            color: '#9b59b6'
        },
        bodily: {
            name: 'શારીરિક-કાયિક બુદ્ધિ',
            english: 'Bodily-Kinesthetic Intelligence',
            description: 'શરીરની હલનચલન અને કુશળતા',
            examples: ['ડાન્સર', 'એથ્લીટ', 'સર્જન', 'ફિઝિયોથેરાપિસ્ટ'],
            icon: '🏃',
            color: '#e67e22'
        },
        naturalistic: {
            name: 'પ્રાકૃતિક બુદ્ધિ',
            english: 'Naturalistic Intelligence',
            description: 'પ્રકૃતિ અને પર્યાવરણ સમજવાની ક્ષમતા',
            examples: ['બાયોલોજિસ્ટ', 'પર્યાવરણવિદ', 'ખેડૂત', 'વેટરિનરી'],
            icon: '🌿',
            color: '#27ae60'
        },
        visual: {
            name: 'દૃષ્ટિ-અવકાશી બુદ્ધિ',
            english: 'Visual-Spatial Intelligence',
            description: 'ચિત્રો, અવકાશ અને ડિઝાઇન સમજવાની ક્ષમતા',
            examples: ['આર્કિટેક્ટ', 'ડિઝાઇનર', 'ફિઝોટોગ્રાફર', 'કલાકાર'],
            icon: '🎨',
            color: '#f39c12'
        },
        linguistic: {
            name: 'ભાષાકીય બુદ્ધિ',
            english: 'Linguistic Intelligence',
            description: 'ભાષા, શબ્દો અને સંવાદની ક્ષમતા',
            examples: ['લેખક', 'પત્રકાર', 'વકીલ', 'ભાષા શિક્ષક'],
            icon: '📝',
            color: '#1abc9c'
        },
        interpersonal: {
            name: 'આંતરવ્યક્તિગત બુદ્ધિ',
            english: 'Interpersonal Intelligence',
            description: 'અન્ય લોકો સાથે સંબંધ અને સંવાદની ક્ષમતા',
            examples: ['વેપારી', 'નર્સ', 'સામાજિક કાર્યકર', 'માનવ સંસાધન'],
            icon: '🤝',
            color: '#e91e63'
        },
        existential: {
            name: 'અસ્તિત્વવાદી બુદ્ધિ',
            english: 'Existential Intelligence',
            description: 'જીવનના ઊંડા અર્થ અને અસ્તિત્વ વિશે વિચારવાની ક્ષમતા',
            examples: ['ફિલોસોફર', 'ધાર્મિક નેતા', 'મનોવૈજ્ઞાનિક', 'લેખક'],
            icon: '🌌',
            color: '#8e44ad'
        }
    },

    // Multiple Intelligences sections (8 questions each)
    intelligenceSections: [
        { id: 'musical', name: 'સંગીત બુદ્ધિ', english: 'Musical Intelligence', intelligenceType: 'musical' },
        { id: 'logical', name: 'તાર્કિક-ગાણિતિક બુદ્ધિ', english: 'Logical-Mathematical Intelligence', intelligenceType: 'logical' },
        { id: 'intrapersonal', name: 'આંતરવ્યક્તિગત બુદ્ધિ', english: 'Intrapersonal Intelligence', intelligenceType: 'intrapersonal' },
        { id: 'bodily', name: 'શારીરિક-કાયિક બુદ્ધિ', english: 'Bodily-Kinesthetic Intelligence', intelligenceType: 'bodily' },
        { id: 'naturalistic', name: 'પ્રાકૃતિક બુદ્ધિ', english: 'Naturalistic Intelligence', intelligenceType: 'naturalistic' },
        { id: 'visual', name: 'દૃષ્ટિ-અવકાશી બુદ્ધિ', english: 'Visual-Spatial Intelligence', intelligenceType: 'visual' },
        { id: 'linguistic', name: 'ભાષાકીય બુદ્ધિ', english: 'Linguistic Intelligence', intelligenceType: 'linguistic' },
        { id: 'interpersonal', name: 'આંતરવ્યક્તિગત બુદ્ધિ', english: 'Interpersonal Intelligence', intelligenceType: 'interpersonal' },
        { id: 'existential', name: 'અસ્તિત્વવાદી બુદ્ધિ', english: 'Existential Intelligence', intelligenceType: 'existential' }
    ],

    // MBTI personality types with detailed information
    mbtiTypes: {
        ISTJ: {
            name: "જવાબદાર અને નિયમપ્રિય",
            english: "Responsible and Rule-Loving",
            qualities: "વ્યવહારીક, જવાબદાર, વિશ્વાસપાત્ર",
            strengths: "આયોજનમાં અસરકારક, નિયમપાલન, કામ માટે સમર્પિત",
            challenges: "ભાવનાઓ વ્યક્ત કરવામાં મુશ્કેલી, બદલાવ સ્વીકારવામાં અસમર્થ",
            careers: ["Accounting", "Administration", "Law", "Management"]
        },
        ISFJ: {
            name: "સંભાળ રાખનાર અને સહાનુભૂતિશીલ",
            english: "Caring and Empathetic",
            qualities: "આરામદાયક, સેવા-ઉન્મુખ, વિશ્વાસપાત્ર",
            strengths: "શાંતિથી સંભાળ રાખવી, જવાબદારીપૂર્વક કામ કરવું",
            challenges: "પોતાની જરૂરિયાતો ભૂલી જવી, બદલાયેલી પરિસ્થિતિઓમાં અસમર્થ",
            careers: ["Teacher", "Counselor", "Nursing", "Service sectors"]
        },
        INFJ: {
            name: "માર્ગદર્શક અને કલ્પનાશીલ",
            english: "Guide and Imaginative",
            qualities: "આંતરિક દ્રષ્ટિ ધરાવતા, હેતુપૂર્ણ",
            strengths: "ઊંડા સંબંધો બનાવવા, ભવિષ્ય માટે દ્રષ્ટિ",
            challenges: "વધુ સિદ્ધાંતવાદી, પોતા પર વધુ દબાણ",
            careers: ["Writer", "Counselor", "Leader", "Human Services"]
        },
        INTJ: {
            name: "વ્યૂહરચનાકાર અને દ્રષ્ટિવાળો",
            english: "Strategist and Visionary",
            qualities: "બુદ્ધિશાળી, આત્મવિશ્વાસી, મજબૂત",
            strengths: "વ્યૂહરચના બનાવવામાં માસ્ટર, સ્વતંત્ર વિચારક",
            challenges: "વધુ ટીકાત્મક, ભાવનાઓ સમજવામાં ઓછો",
            careers: ["Scientist", "Strategy Manager", "Technology", "Entrepreneur"]
        },
        ISTP: {
            name: "ટેકનિકલ નિપુણ અને અસરકારક",
            english: "Technically Skilled and Effective",
            qualities: "શાંત, વ્યવહારીક, કાર્યક્ષમ",
            strengths: "ઝડપથી સમસ્યા ઉકેલવી, હાથથી કામ કરવામાં નિપુણ",
            challenges: "ભાવનાઓ વ્યક્ત ન કરવી, લાંબા ગાળાના આયોજનમાં ઓછો રસ",
            careers: ["Engineer", "Mechanic", "Sports", "Emergency Services"]
        },
        ISFP: {
            name: "શાંત પ્રેમી અને કલાપ્રેમી",
            english: "Quiet, Loving, and Art-Loving",
            qualities: "વિનમ્ર, સહાનુભૂતિશીલ, સુંદરતા પ્રેમી",
            strengths: "દયાળુ, સર્જનાત્મક, આનંદથી જીવવું",
            challenges: "કઠોર ચર્ચાઓથી બચવું, કઠોર નિર્ણયો લેવામાં મુશ્કેલી",
            careers: ["Design", "Music", "Art", "Caring professions"]
        },
        INFP: {
            name: "મધ્યસ્થ અને સપનાવાળો",
            english: "Mediator and Dreamy",
            qualities: "આદર્શવાદી, કરુણાશીલ, આંતર્મુખી",
            strengths: "ઊંડો અર્થ શોધવો, સર્જનાત્મક, લોકોની મદદ કરવા તૈયાર",
            challenges: "વ્યવહારીક બાબતોમાં ઓછો રસ, ઝડપથી અસ્વસ્થ થવું",
            careers: ["Writer", "Counselor", "Fact-finder", "Social Services"]
        },
        INTP: {
            name: "શોધખોળ કરનાર અને વિચારક",
            english: "Explorer and Thinker",
            qualities: "શોધક, વિચારોમાં ડૂબેલા, તાર્કિક",
            strengths: "તાર્કિક વિચારધારા, નવી સિસ્ટમો શોધવામાં નિપુણ",
            challenges: "ભાવનાઓ પર ઓછું ધ્યાન, ઓછા વ્યવસ્થિત",
            careers: ["Scientist", "Developer", "Researcher", "Professor"]
        },
        ESTP: {
            name: "એક્શન મેન અને જોખમ લેનાર",
            english: "Action Man and Risk Taker",
            qualities: "ઊર્જાવાન, ઝડપથી કાર્યવાહી, લક્ષ્ય-ઉન્મુખ",
            strengths: "લોકો સાથે સરળતાથી જોડાવું, ઝડપથી નિર્ણયો લેવા",
            challenges: "લાંબા ગાળાના આયોજનમાં ઓછો રસ, વ્યવસ્થિત અભિગમનો અભાવ",
            careers: ["Marketing", "Adventure Sports", "Sales", "Industry"]
        },
        ESFP: {
            name: "મોજશોખી અને પ્રસ્તુત કરનાર",
            english: "Fun-loving and Presenter",
            qualities: "આનંદમય, લોકપ્રિય, વર્તમાનમાં જીવે છે",
            strengths: "સમાજમાં આનંદ ફેલાવવો, લોકો સાથે સરળતાથી જોડાવું",
            challenges: "ભયથી બચવું, વધુ મોજ શોધવાની વૃત્તિ",
            careers: ["Art", "Music", "Event Management", "Hotel Management"]
        },
        ENFP: {
            name: "ઉત્સાહી અને પ્રેરક",
            english: "Enthusiastic and Inspirer",
            qualities: "સ્વતંત્ર, ઉત્સાહી, પ્રેરણાદાયી વ્યક્તિ",
            strengths: "લોકોને પ્રેરણા આપવી, સર્જનાત્મક વિચારો લાવવા",
            challenges: "વધુ વિચારવું, ઝડપથી કંટાળવું",
            careers: ["Writer", "Communicator", "Coach", "Media"]
        },
        ENTP: {
            name: "ચર્ચાકાર અને નવીન વિચારક",
            english: "Debater and Innovative Thinker",
            qualities: "ગતિશીલ, ચર્ચાકાર, નવી દિશાઓના શોધક",
            strengths: "વિચાર કરવાની ક્ષમતા, ચર્ચામાં આનંદ, નવી દિશાઓ શોધવી",
            challenges: "પ્રોજેક્ટ્સ પૂરા કરવામાં મુશ્કેલી, ઓછા ટકાઉ",
            careers: ["Entrepreneur", "Marketing", "Startup", "Strategy Development"]
        },
        ESTJ: {
            name: "વ્યવસ્થાપક અને નેતા",
            english: "Manager and Leader",
            qualities: "સંસ્થાકીય કૌશલ્યો ધરાવતા, સિસ્ટમ્સમાં વિશ્વાસ",
            strengths: "વસ્તુઓને વ્યવસ્થિત રાખવી, નિયમોનું પાલન, મજબૂત નેતા",
            challenges: "વધુ કઠોર હોઈ શકે છે, ઓછા ભાવનાત્મક",
            careers: ["Management", "Logistics", "Police", "Leadership"]
        },
        ESFJ: {
            name: "સંભાળ લેનાર અને સમર્પિત",
            english: "Caretaker and Dedicated",
            qualities: "મિત્રતાને મૂલ્ય આપે છે, હંમેશા મદદ કરવા તૈયાર",
            strengths: "લોકોની સુખાકારીની કાળજી, સમૂહોને મજબૂત બનાવવા",
            challenges: "અન્યોને વધુ પ્રસન્ન કરવાની વૃત્તિ, પોતાને ભૂલી જવું",
            careers: ["Teacher", "Nurse", "Healthcare", "Social Service"]
        },
        ENFJ: {
            name: "શિક્ષક અને પ્રેરક નેતા",
            english: "Teacher and Inspiring Leader",
            qualities: "સામાજિક નેતા, દ્રષ્ટિવાળું વ્યક્તિત્વ",
            strengths: "લોકોની ભાવનાઓ સમજવી, નેતૃત્વમાં શ્રેષ્ઠ",
            challenges: "બળથી સંપૂર્ણ બનવાનો પ્રયાસ",
            careers: ["Teacher", "Coach", "Mentor", "Organizer"]
        },
        ENTJ: {
            name: "કમાન્ડર અને CEO મટિરિયલ",
            english: "Commander and CEO Material",
            qualities: "આત્મવિશ્વાસી, પડકારપૂર્ણ નેતા, વ્યૂહરચનાકાર",
            strengths: "કાર્ય-ઉન્મુખ, પ્રભાવશાળી નેતૃત્વ, મોટા વિચારક",
            challenges: "ઓછા ભાવનાત્મક, ઓછા સહાનુભૂતિશીલ",
            careers: ["CEO", "Leadership", "Strategy", "Business Development"]
        }
    },

    // MBTI test sections configuration
    mbtiSections: [
        {
            id: "ei",
            name: "E vs I - બહિર્મુખી vs આંતર્મુખી",
            english: "Extrovert vs Introvert",
            questions: 20,
            dimension1: "E",
            dimension2: "I"
        },
        {
            id: "sn",
            name: "S vs N - અનુભવ vs કલ્પના",
            english: "Sensing vs Intuition",
            questions: 20,
            dimension1: "S",
            dimension2: "N"
        },
        {
            id: "tf",
            name: "T vs F - વિચાર vs લાગણી",
            english: "Thinking vs Feeling",
            questions: 20,
            dimension1: "T",
            dimension2: "F"
        },
        {
            id: "jp",
            name: "J vs P - આયોજન vs ઓપન",
            english: "Judging vs Perceiving",
            questions: 20,
            dimension1: "J",
            dimension2: "P"
        }
    ],

    // Big Five Personality dimensions
    bigFiveDimensions: {
        O: {
            name: "ખૂલ્લુંપન",
            english: "Openness to Experience",
            description: "નવી ચીજો શીખવા, કલ્પનાશક્તિ અને સર્જનાત્મકતામાં રસ",
            careers: ["કલાકાર", "લેખક", "વૈજ્ઞાનિક", "ડિઝાઇનર", "ફિલોસોફર"],
            icon: "🌟",
            color: "#9b59b6"
        },
        C: {
            name: "જવાબદારી",
            english: "Conscientiousness",
            description: "શિસ્ત, જવાબદારી અને સંગઠિત રહેવાની તાકાત",
            careers: ["ઇન્જિનિયર", "ડૉક્ટર", "એકાઉન્ટન્ટ", "મેનેજર", "વકીલ"],
            icon: "📋",
            color: "#27ae60"
        },
        E: {
            name: "બહિર્મુખતા",
            english: "Extraversion",
            description: "વાતચીતપ્રિય હોવું અને લોકો સાથે સમય પસાર કરવો ગમે",
            careers: ["વેપારી", "માર્કેટિંગ", "શિક્ષક", "સેલ્સ", "ઇવેન્ટ મેનેજર"],
            icon: "🗣️",
            color: "#f39c12"
        },
        A: {
            name: "સહમતિ",
            english: "Agreeableness",
            description: "સહયોગી, દયાળુ અને ભલામણ કરનારા હોવું",
            careers: ["નર્સ", "સામાજિક કાર્યકર", "કાઉન્સેલર", "HR", "ડોક્ટર"],
            icon: "🤝",
            color: "#2ecc71"
        },
        N: {
            name: "ભાવનાત્મક સ્થિરતા",
            english: "Neuroticism",
            description: "ચિંતાતુર, દુઃખી અથવા તણાવમાં આવવાની પ્રવુતિ",
            careers: ["મનોવૈજ્ઞાનિક", "કાઉન્સેલર", "આર્ટિસ્ટ", "લેખક", "ફિલોસોફર"],
            icon: "😰",
            color: "#e74c3c",
            note: "જેમ ઓછો સ્કોર તેમ વધુ સારું"
        }
    },

    // Big Five test sections (8 questions each)
    bigFiveSections: [
        { id: 'openness', name: 'ખૂલ્લુંપન', english: 'Openness to Experience', dimension: 'O' },
        { id: 'conscientiousness', name: 'જવાબદારી', english: 'Conscientiousness', dimension: 'C' },
        { id: 'extraversion', name: 'બહિર્મુખતા', english: 'Extraversion', dimension: 'E' },
        { id: 'neuroticism', name: 'ભાવનાત્મક સ્થિરતા', english: 'Neuroticism', dimension: 'N' },
        { id: 'agreeableness', name: 'સહમતિ', english: 'Agreeableness', dimension: 'A' }
    ],

    // RIASEC Career Interest dimensions
    riasecDimensions: {
        R: {
            name: "વાસ્તવિક",
            english: "Realistic",
            description: "હાથથી કામ કરનારા, મશીનો અને ટેકનિકલ કામમાં રસ",
            careers: ["ઇન્જિનિયર", "મેકેનિક", "આર્કિટેક્ટ", "ફાર્મર", "ઇલેક્ટ્રિશિયન"],
            icon: "🔧",
            color: "#e67e22"
        },
        I: {
            name: "અનુસંધાનકર્તા",
            english: "Investigative",
            description: "વિજ્ઞાન, સંશોધન અને વિશ્લેષણમાં રસ",
            careers: ["વૈજ્ઞાનિક", "ડૉક્ટર", "રિસર્ચર", "પ્રોગ્રામર", "ડેટા એનાલિસ્ટ"],
            icon: "🔬",
            color: "#3498db"
        },
        A: {
            name: "કલાત્મક",
            english: "Artistic",
            description: "કલા, સર્જનાત્મકતા અને સ્વાતંત્ર્યમાં રસ",
            careers: ["કલાકાર", "ડિઝાઇનર", "મ્યૂઝિશિયન", "લેખક", "ફોટોગ્રાફર"],
            icon: "🎨",
            color: "#9b59b6"
        },
        S: {
            name: "સામાજિક",
            english: "Social",
            description: "લોકોની મદદ કરવામાં અને સેવામાં રસ",
            careers: ["શિક્ષક", "નર્સ", "કાઉન્સેલર", "સામાજિક કાર્યકર", "HR"],
            icon: "🤝",
            color: "#2ecc71"
        },
        E: {
            name: "વ્યાવસાયિક",
            english: "Enterprising",
            description: "વ્યવસાય, નેતૃત્વ અને પ્રભાવમાં રસ",
            careers: ["વ્યવસાયી", "મેનેજર", "માર્કેટર", "વકીલ", "સેલ્સ"],
            icon: "💼",
            color: "#f39c12"
        },
        C: {
            name: "પરંપરાગત",
            english: "Conventional",
            description: "વ્યવસ્થા, નિયમો અને ઓફિસ કામમાં રસ",
            careers: ["એકાઉન્ટન્ટ", "એડમિનિસ્ટ્રેટર", "ક્લર્ક", "બેંકર", "ઓડિટર"],
            icon: "📊",
            color: "#34495e"
        }
    },

    // RIASEC test sections (10 questions each)
    riasecSections: [
        { id: 'realistic', name: 'વાસ્તવિક', english: 'Realistic', dimension: 'R' },
        { id: 'investigative', name: 'અનુસંધાનકર્તા', english: 'Investigative', dimension: 'I' },
        { id: 'artistic', name: 'કલાત્મક', english: 'Artistic', dimension: 'A' },
        { id: 'social', name: 'સામાજિક', english: 'Social', dimension: 'S' },
        { id: 'enterprising', name: 'વ્યાવસાયિક', english: 'Enterprising', dimension: 'E' },
        { id: 'conventional', name: 'પરંપરાગત', english: 'Conventional', dimension: 'C' }
    ],

    // SVS Value dimensions
    svsDimensions: {
        SD: {
            name: "સ્વયં દિશા",
            english: "Self-Direction",
            description: "સ્વતંત્ર વિચાર, સર્જનાત્મકતા અને સ્વાતંત્ર્યમાં મૂલ્ય",
            careers: ["એન્ટ્રેપ્રેન્યોર", "આર્ટિસ્ટ", "રિસર્ચર", "કન્સલ્ટન્ટ", "ફ્રીલાન્સર"],
            icon: "🎯",
            color: "#2196f3"
        },
        ST: {
            name: "ઉત્તેજન",
            english: "Stimulation",
            description: "નવા અનુભવો, ચેલેન્જ અને ઉત્તેજના માં મૂલ્ય",
            careers: ["એડવેન્ચર ગાઇડ", "જર્નલિસ્ટ", "એક્ટર", "સ્પોર્ટ્સ પ્લેયર", "ટ્રાવેલર"],
            icon: "⚡",
            color: "#ff9800"
        },
        HE: {
            name: "સુખભોગ",
            english: "Hedonism",
            description: "આનંદ, મનોરંજન અને જીવનનો ભોગવવામાં મૂલ્ય",
            careers: ["ઇવેન્ટ મેનેજર", "ફૂડ ક્રિટિક", "ટૂરિઝમ", "એન્ટરટેનર", "લાઇફસ્ટાઇલ કોચ"],
            icon: "🎉",
            color: "#ff5722"
        },
        AC: {
            name: "સિદ્ધિ",
            english: "Achievement",
            description: "સફળતા, માન્યતા અને સામાજિક સ્થિતિમાં મૂલ્ય",
            careers: ["મેનેજર", "એક્ઝિક્યુટિવ", "લોયર", "ડૉક્ટર", "ઇન્જિનિયર"],
            icon: "🏆",
            color: "#4caf50"
        },
        PO: {
            name: "સત્તા",
            english: "Power",
            description: "સામાજિક સત્તા, સંપત્તિ અને પ્રભાવમાં મૂલ્ય",
            careers: ["સીઈઓ", "પોલિટિશિયન", "બિઝનેસ ઓનર", "ડિરેક્ટર", "ઇન્વેસ્ટર"],
            icon: "👑",
            color: "#9c27b0"
        },
        SE: {
            name: "સુરક્ષા",
            english: "Security",
            description: "સલામતી, સ્થિરતા અને સુવ્યવસ્થામાં મૂલ્ય",
            careers: ["બેંકર", "ઇન્સ્યોરન્સ એજન્ટ", "ગવર્નમેન્ટ ઓફિસર", "ટીચર", "એકાઉન્ટન્ટ"],
            icon: "🛡️",
            color: "#607d8b"
        },
        CO: {
            name: "અનુકૂળતા",
            english: "Conformity",
            description: "નિયમો, શિસ્ત અને સામાજિક અપેક્ષાઓમાં મૂલ્ય",
            careers: ["એડમિનિસ્ટ્રેટર", "ક્લર્ક", "ઓફિસર", "નર્સ", "સેક્રેટરી"],
            icon: "📋",
            color: "#795548"
        },
        TR: {
            name: "પરંપરા",
            english: "Tradition",
            description: "પરંપરાગત મૂલ્યો, ધર્મ અને સંસ્કૃતિમાં મૂલ્ય",
            careers: ["પુજારી", "હિસ્ટોરિયન", "આર્કિયોલોજિસ્ટ", "ટ્રેડિશનલ આર્ટિસ્ટ", "કલ્ચરલ એક્સપર્ટ"],
            icon: "🏛️",
            color: "#8bc34a"
        },
        BE: {
            name: "પરોપકાર",
            english: "Benevolence",
            description: "બીજાઓની મદદ, સેવા અને સહયોગમાં મૂલ્ય",
            careers: ["સામાજિક કાર્યકર", "નર્સ", "કાઉન્સેલર", "ટીચર", "વોલન્ટિયર"],
            icon: "🤝",
            color: "#00bcd4"
        },
        UN: {
            name: "વિશ્વવાદ",
            english: "Universalism",
            description: "વિશ્વભરના લોકો, પર્યાવરણ અને શાંતિમાં મૂલ્ય",
            careers: ["એન્વાયરન્મેન્ટલિસ્ટ", "હ્યુમેનિટેરિયન", "ડિપ્લોમેટ", "રિસર્ચર", "એક્ટિવિસ્ટ"],
            icon: "🌍",
            color: "#009688"
        }
    },

    // SVS test sections (5 questions each)
    svsSections: [
        { id: 'selfDirection', name: 'સ્વયં દિશા', english: 'Self-Direction', dimension: 'SD' },
        { id: 'stimulation', name: 'ઉત્તેજન', english: 'Stimulation', dimension: 'ST' },
        { id: 'hedonism', name: 'સુખભોગ', english: 'Hedonism', dimension: 'HE' },
        { id: 'achievement', name: 'સિદ્ધિ', english: 'Achievement', dimension: 'AC' },
        { id: 'power', name: 'સત્તા', english: 'Power', dimension: 'PO' },
        { id: 'security', name: 'સુરક્ષા', english: 'Security', dimension: 'SE' },
        { id: 'conformity', name: 'અનુકૂળતા', english: 'Conformity', dimension: 'CO' },
        { id: 'tradition', name: 'પરંપરા', english: 'Tradition', dimension: 'TR' },
        { id: 'benevolence', name: 'પરોપકાર', english: 'Benevolence', dimension: 'BE' },
        { id: 'universalism', name: 'વિશ્વવાદ', english: 'Universalism', dimension: 'UN' }
    ],

    // Decision-Making Style dimensions
    decisionDimensions: {
        RA: {
            name: "તર્કવાદી",
            english: "Rational",
            description: "તર્કના આધારે વિચારવું અને વિશ્લેષણ કરવું",
            careers: ["એનાલિસ્ટ", "રિસર્ચર", "સ્ટ્રેટેજિસ્ટ", "કન્સલ્ટન્ટ", "પ્લાનર"],
            icon: "🧠",
            color: "#2196f3"
        },
        IN: {
            name: "સ્વભાવિક",
            english: "Intuitive",
            description: "આંતરિક અનુભવો અને લાગણી પર આધાર રાખવું",
            careers: ["આર્ટિસ્ટ", "ક્રિએટિવ ડિરેક્ટર", "ઇન્વેન્ટર", "ડિઝાઇનર", "ઇન્સ્પિરેશનલ સ્પીકર"],
            icon: "✨",
            color: "#9c27b0"
        },
        DE: {
            name: "આશ્રિત",
            english: "Dependent",
            description: "બીજા પર આધાર રાખીને નિર્ણય લેવો",
            careers: ["ટીમ મેમ્બર", "સપોર્ટ સ્પેશિયલિસ્ટ", "કોઓર્ડિનેટર", "ફેસિલિટેટર", "મેન્ટર"],
            icon: "🤝",
            color: "#ff9800"
        },
        AV: {
            name: "ટાળવાની",
            english: "Avoidant",
            description: "નિર્ણયમાંથી દૂર ભાગવું અને વિલંબ કરવો",
            careers: ["ફોલો-અપ સ્પેશિયલિસ્ટ", "રિવ્યૂર", "ક્વાલિટી ચેકર", "ઓબ્ઝર્વર", "ડોક્યુમેન્ટર"],
            icon: "⏰",
            color: "#607d8b"
        },
        SP: {
            name: "અચાનક",
            english: "Spontaneous",
            description: "ઝડપભેર, વિચાર કર્યા વગર નિર્ણય લેવો",
            careers: ["એન્ટ્રેપ્રેન્યોર", "સેલ્સપર્સન", "ઇમર્જન્સી રિસ્પોન્ડર", "ઇવેન્ટ પ્લાનર", "ઇમ્પ્રૂવાઇઝર"],
            icon: "⚡",
            color: "#f44336"
        }
    },

    // Decision-Making test sections (5 questions each)
    decisionSections: [
        { id: 'rational', name: 'તર્કવાદી', english: 'Rational', dimension: 'RA' },
        { id: 'intuitive', name: 'સ્વભાવિક', english: 'Intuitive', dimension: 'IN' },
        { id: 'dependent', name: 'આશ્રિત', english: 'Dependent', dimension: 'DE' },
        { id: 'avoidant', name: 'ટાળવાની', english: 'Avoidant', dimension: 'AV' },
        { id: 'spontaneous', name: 'અચાનક', english: 'Spontaneous', dimension: 'SP' }
    ],

    // VARK Learning Style dimensions
    varkDimensions: {
        V: {
            name: "દૃષ્ટિ આધારિત",
            english: "Visual",
            description: "ડાયગ્રામ, ચાર્ટ, કલર, મેપ વગેરે જોઈને શીખવાનું સરળ લાગે",
            careers: ["ગ્રાફિક ડિઝાઇનર", "આર્કિટેક્ટ", "ફોટોગ્રાફર", "વિઝ્યુઅલ આર્ટિસ્ટ", "ડેટા વિઝ્યુઅલાઇઝર"],
            icon: "👁️",
            color: "#2196f3"
        },
        A: {
            name: "શ્રાવ્ય આધારિત",
            english: "Auditory",
            description: "ચર્ચા, લેકચર, ઓડિયો ક્લિપ્સ સાંભળીને વધુ શીખે",
            careers: ["મ્યુઝિશિયન", "રેડિયો જોકી", "પોડકાસ્ટર", "સાઉન્ડ એન્જિનિયર", "ટેલિફોન ઓપરેટર"],
            icon: "🎧",
            color: "#4caf50"
        },
        R: {
            name: "વાંચન/લેખન આધારિત",
            english: "Reading/Writing",
            description: "નોટ્સ લખવા અને વાંચવાથી વધુ શીખે",
            careers: ["લેખક", "જર્નલિસ્ટ", "એડિટર", "રિસર્ચર", "લાઇબ્રેરિયન"],
            icon: "📚",
            color: "#ff9800"
        },
        K: {
            name: "સ્પર્શ/અનુભવી શૈલી",
            english: "Kinesthetic",
            description: "પ્રેક્ટિકલ, હાથ દ્વારા, અનુભવ પરથી શીખે",
            careers: ["સર્જન", "ફિઝિયોથેરાપિસ્ટ", "મેસન", "ડાન્સર", "સ્પોર્ટ્સ કોચ"],
            icon: "🤲",
            color: "#9c27b0"
        }
    },

    // VARK test sections (5 questions each)
    varkSections: [
        { id: 'visual', name: 'દૃશ્ય શૈલી', english: 'Visual', dimension: 'V' },
        { id: 'auditory', name: 'શ્રવણશૈલી', english: 'Auditory', dimension: 'A' },
        { id: 'reading', name: 'વાંચન/લખાણ શૈલી', english: 'Reading/Writing', dimension: 'R' },
        { id: 'kinesthetic', name: 'પ્રયોગશીલ/સક્રિય શૈલી', english: 'Kinesthetic', dimension: 'K' }
    ],

    // Life Situation Assessment dimensions
    lifeSituationDimensions: {
        S: {
            name: "સામાજિક પરિસ્થિતિ",
            english: "Social Situation",
            description: "તમારી સામાજિક પરિસ્થિતિ, પરિવાર, મિત્રો અને સમુદાયનું સમર્થન",
            recommendations: ["સામાજિક નેટવર્ક વિસ્તારવું", "સમુદાય સેવામાં સામેલ થવું", "મેન્ટરશિપ કાર્યક્રમોમાં ભાગ લેવો", "સામાજિક કૌશલ્યો વિકસાવવા"],
            icon: "👥",
            color: "#2196f3"
        },
        E: {
            name: "આર્થિક પરિસ્થિતિ",
            english: "Economic Situation",
            description: "તમારી નાણાકીય સ્થિતિ, આવકના સ્ત્રોતો અને આર્થિક સ્વાતંત્ર્ય",
            recommendations: ["બજેટ પ્લાનિંગ", "બચત અને રોકાણ", "વધારાની આવકના સ્ત્રોતો", "ફાઇનાન્સિયલ લિટરેસી"],
            icon: "💰",
            color: "#4caf50"
        },
        G: {
            name: "ભૌગોલિક પરિસ્થિતિ",
            english: "Geographical Situation",
            description: "તમારું સ્થાન, સુવિધાઓ, તકો અને ભૌગોલિક અવરોધો",
            recommendations: ["ડિજિટલ સ્કિલ્સ વિકસાવવા", "રિમોટ વર્ક શક્યતાઓ", "ઓનલાઇન શિક્ષણ", "ભૌગોલિક સ્થાન બદલવાની તકો"],
            icon: "🌍",
            color: "#ff9800"
        }
    },

    // Life Situation Assessment sections (5 questions each)
    lifeSituationSections: [
        { id: 'social', name: 'સામાજિક પરિસ્થિતિ', english: 'Social Situation', dimension: 'S' },
        { id: 'economic', name: 'આર્થિક પરિસ્થિતિ', english: 'Economic Situation', dimension: 'E' },
        { id: 'geographical', name: 'ભૌગોલિક પરિસ્થિતિ', english: 'Geographical Situation', dimension: 'G' }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TEST_CONFIG;
} else {
    window.TEST_CONFIG = TEST_CONFIG;
} 