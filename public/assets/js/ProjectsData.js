const projectsData = [
    {
        name: 'Portfolio',
        id: 1,
        description: 'The very page you are looking at. Built using NextJS. Can be used as a template for your folio',
        link: 'https://itsskofficial.vercel.app',
        github: 'https://github.com/itsskofficial/itsskofficial',
        image: '/assets/images/portfolio.png',
        category: 'web2'
    },
    {
        name: 'Bit Predict',
        id: 2,
        description: 'A deep learning model to predict Bitcoin future price based on past prices',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/NLP/Bit%20Predict/bit-predict.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/Projects/BitPredict/bit-predict.ipynb',
        image: '/assets/images/bit-predict.png',
        category: 'deep-learning'
    },
    {
        name: 'Promptopia',
        id: 3,
        description: 'A full stack AI prompt sharing application made as a follow along with custom features',
        link: 'https://prompt-share-itsskofficial.vercel.app/',
        github: 'https://github.com/itsskofficial/Web2/tree/master/Projects/PromptShare',
        image: '/assets/images/promptopia.png',
        category: 'web2'
    },
    {
        name: 'FaceRec',
        id: 4,
        description: 'A face recognition project made as a replication of a Siamese network paper',
        link: 'https://itsskofficial-facerec.streamlit.app/',
        github: 'https://github.com/itsskofficial/Deep-Learning/tree/master/Projects/FaceRec',
        image: '/assets/images/facerec.png',
        category: 'computer-vision'
    },
    {
        name: 'AI Image Generator',
        id: 5,
        description: 'A full stack DALL-E kind of clone to generate images with prompts and share it with others',
        link: 'https://ai-img-gen-itsskofficial.vercel.app/',
        github: 'https://github.com/itsskofficial/Web2/tree/master/Projects/AIImgGen',
        image: '/assets/images/ai-img-gen.png',
        category: 'web2'
    },
    {
        name: 'Smart Dustbin',
        id: 5,
        description: 'A smart dustbin which works without touch, made especially due to the impact of COVID 19 as a college project',
        link: 'https://github.com/itsskofficial/Arduino/tree/master/Projects/SmartDustbin',
        github: 'https://github.com/itsskofficial/Arduino/tree/master/Projects/SmartDustbin',
        image: '/assets/images/smart-dustbin.png',
        category: 'iot'
    },
    {
        name: 'Aesthetic Art',
        id: 6,
        description: 'A landing page I made for a customized gifts small business. Made using HTML, CSS & Vanilla JS',
        link: 'https://aesthetic-art.github.io',
        github: 'https://github.com/Aesthetic-Art/Aesthetic-Art.github.io',
        image: '/assets/images/aesthetic-art.png',
        category: 'web2'
    },
    {
        name: 'Food Vision Model',
        id: 7,
        description: 'A deep learning model to predict food item type based on images',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/Projects/FoodVision/food_vision.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/Projects/FoodVision/food_vision.ipynb',
        image: '/assets/images/food-vision.png',
        category: 'deep-learning'
    },
    {
        name: 'Campy',
        id: 8,
        description: 'A full stack project which lets you add and rate campgrounds',
        link: 'https://github.com/itsskofficial/Web2/tree/master/Projects/Campy',
        github: 'https://github.com/itsskofficial/Web2/tree/master/Projects/Campy',
        image: '/assets/images/campy.png',
        category: 'web2'
    },
    {
        name: 'Ethereum Course Marketplace',
        id: 9,
        description: 'A marketplace to explore and buy courses with Ethereum',
        link: 'https://ethereum-course-marketplace-itsskofficial.vercel.app/',
        github: 'https://github.com/itsskofficial/Web3/tree/master/Projects/CourseMarketplace',
        image: '/assets/images/eth-course-marketplace.png',
        category: 'web3'
    },
    {
        name: 'Lending Prediction Model',
        id: 10,
        description: 'A model to predict the right loan receivers using machine learning',
        link: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Projects/LendPredict/project.ipynb',
        github: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Projects/LendPredict/project.ipynb',
        image: '/assets/images/lending-prediction.png',
        category: 'machine-learning'
    },
    {
        name: 'Passion8',
        id: 11,
        description: 'A Web3 startup landing page template. Built using HTML, CSS, Vanilla JS & Firebase',
        link: 'https://passion8.vercel.app',
        github: 'https://github.com/itsskofficial/Web2/tree/master/Projects/Passion8',
        image: '/assets/images/passion8.png',
        category: 'web2'
    },
    {
        name: 'WhatsAnalyze',
        id: 12,
        description: 'A whatsapp chat analyzer built with Streamlit',
        link: 'https://itsskofficial-whatsanalyze.streamlit.io',
        github: 'https://github.com/itsskofficial/Data-Science/tree/master/Projects/WhatsAnalyze',
        image: '/assets/images/whatsanalyze.png',
        category: 'data-science'
    },
    {
        name: 'Yelp Review Model',
        id: 13,
        description: 'A model to predict the rating on Yelp using machine learning',
        link: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Projects/YelpRating/project.ipynb',
        github: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Projects/YelpRating/project.ipynb',
        image: '/assets/images/yelp-review.png',
        category: 'machine-learning'
    },
    {
        name: 'Self Driving Car',
        id: 14,
        description: 'A mini self driving car with three sensors which uses deep Q learning',
        link: 'https://itsskofficial-facerec.streamlit.app/',
        github: 'https://github.com/itsskofficial/Deep-Learning/tree/master/Projects/SelfDrivingCar',
        image: '/assets/images/self-driving-car.png',
        category: 'deep-learning'
    },
    {
        name: 'ImgCap',
        id: 15,
        description: 'A image caption generator project made with consequent CNN and RNN using Tensorflow',
        link: 'https://itsskofficial-imgcap.streamlit.app/',
        github: 'https://github.com/itsskofficial/Deep-Learning/tree/master/Projects/ImgCap',
        image: '/assets/images/imgcap.jpeg',
        category: 'deep-learning'
    },
    {
        name: 'Google Meet Bot',
        id: 16,
        description: 'A bot which attends your Google Meets for you',
        link: 'https://github.com/itsskofficial/Python/tree/master/Projects/GoogleMeetBot/',
        github: 'https://github.com/itsskofficial/Python/tree/master/Projects/GoogleMeetBot/',
        image: '/assets/images/google-meet-bot.png',
        category: 'python-programming'
    },
    {
        name: 'Skim Lit',
        id: 17,
        description: 'A NLP model to skim through medical research papers and classify the contents into categories',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/Projects/SkimLit/skim_lit.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/Projects/SkimLit/skim_lit.ipynb',
        image: '/assets/images/skim-lit.png',
        category: 'deep-learning'
    },
    {
        name: '911 Calls Analysis',
        id: 18,
        description: 'A data science project to analyze 911 calls',
        link: 'https://github.com/itsskofficial/Data-Science/blob/master/Projects/911CallsAnalysis/911_calls_analysis.ipynb',
        github: 'https://github.com/itsskofficial/Data-Science/blob/master/Projects/911CallsAnalysis/911_calls_analysis.ipynb',
        image: '/assets/images/911-calls-analysis.png',
        category: 'data-science'
    },
    {
        name: 'Stock Price Analysis',
        id: 19,
        description: 'A data science project to analyze stock prices',
        link: 'https://github.com/itsskofficial/Data-Science/blob/master/Projects/StockPriceAnalysis/stock_price_analysis.ipynb',
        github: 'https://github.com/itsskofficial/Data-Science/blob/master/Projects/StockPriceAnalysis/stock_price_analysis.ipynb',
        image: '/assets/images/stock-price-analysis.png',
        category: 'data-science'
    },
]

export default projectsData