const projectsData = [
    {
        name: 'Portfolio',
        id: 1,
        description: 'The very page you are looking at. Built using NextJS. Can be used as a template for your folio',
        link: 'https://itsskofficial.vercel.app',
        github: 'https://github.com/itsskofficial/itsskofficial',
        image: '/assets/images/portfolio.png'
    },
    {
        name: 'Passion8',
        id: 2,
        description: 'A Web3 startup landing page template. Built using HTML, CSS, Vanilla JS & Firebase',
        link: 'https://passion8.vercel.app',
        github: 'https://github.com/itsskofficial/Web2/tree/master/passion8',
        image: '/assets/images/passion8.png'
    },
    {
        name: 'Promptopia',
        id: 3,
        description: 'A full stack AI prompt sharing application made as a follow along with custom features',
        link: 'https://prompt-share-itsskofficial.vercel.app/',
        github: 'https://github.com/itsskofficial/ReactJS/tree/master/prompt-share',
        image: '/assets/images/promptopia.png'
    },
    {
        name: 'AI Image Generator',
        id: 4,
        description: 'A full stack DALL-E kind of clone to generate images with prompts and share it with others',
        link: 'https://ai-img-gen-iota.vercel.app/',
        github: 'https://github.com/itsskofficial/ReactJS/tree/master/ai-img-gen',
        image: '/assets/images/aesthetic-art.png'
    },
    {
        name: 'Aesthetic Art',
        id: 5,
        description: 'A landing page I made for a customized gifts small business. Made using HTML, CSS & Vanilla JS',
        link: 'https://aesthetic-art.github.io',
        github: 'https://github.com/Aesthetic-Art/Aesthetic-Art.github.io',
        image: '/assets/images/aesthetic-art.png'
    },
    {
        name: 'Campy',
        id: 6,
        description: 'A full stack project which lets you add and rate campgrounds',
        link: 'https://github.com/itsskofficial/Web2/tree/master/campy',
        github: 'https://github.com/itsskofficial/Web2/tree/master/campy',
        image: '/assets/images/campy.png'
    },
    {
        name: 'OST Placements',
        id: 7,
        description: 'A landing page I made for a customized gifts small business. Made using HTML, CSS & Vanilla JS',
        link: 'https://blog-landing-lake.vercel.app/',
        github: 'https://github.com/itsskofficial/web2/ost-placements/',
        image: '/assets/images/ost-placements.png'
    },
    {
        name: 'Lending Prediction Model',
        id: 8,
        description: 'A model to predict the right loan receivers using machine learning',
        link: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Decision%20Trees%20And%20Random%20Forests/project.ipynb',
        github: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Decision%20Trees%20And%20Random%20Forests/project.ipynb',
        image: '/assets/images/lending-prediction.png'
    },
    {
        name: 'Yelp Review Model',
        id: 9,
        description: 'A model to predict the rating on Yelp using machine learning',
        link: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Natural%20Language%20Processing/project.ipynb',
        github: 'https://github.com/itsskofficial/Machine-Learning/blob/master/Natural%20Language%20Processing/project.ipynb',
        image: '/assets/images/yelp-review.png'
    },
    {
        name: 'Ethereum Faucet',
        id: 10,
        description: 'A faucet to donate and receive virtual Ethereum coins',
        link: 'https://ethereum-faucet-blush.vercel.app/',
        github: 'https://github.com/itsskofficial/Web3/tree/master/faucet',
        image: '/assets/images/eth-faucet.png'
    },
    {
        name: 'Ethereum Course Marketplace',
        id: 11,
        description: 'A marketplace to explore and buy courses with Ethereum',
        link: 'https://ethereum-course-marketplace-itsskofficial.vercel.app/',
        github: 'https://github.com/itsskofficial/Web3/tree/master/course-marketplace',
        image: '/assets/images/eth-course-marketplace.png'
    },
    {
        name: 'Food Vision Model',
        id: 12,
        description: 'A deep learning model to predict food item type based on images',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/CNN/Food%20Vision/food_vision.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/CNN/Food%20Vision/food_vision.ipynb',
        image: '/assets/images/food-vision.png'
    },
    {
        name: 'Skim Lit',
        id: 13,
        description: 'A deep learning model to skim through medical research papers and classify the contents into categories',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/NLP/Skim%20Lit/skim_lit.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/NLP/Skim%20Lit/skim_lit.ipynb',
        image: '/assets/images/skim-lit.png'
    },
    {
        name: 'Bit Predict',
        id: 14,
        description: 'A deep learning model to predict Bitcoin future price based on past prices',
        link: 'https://github.com/itsskofficial/Deep-Learning/blob/master/NLP/Bit%20Predict/bit-predict.ipynb',
        github: 'https://github.com/itsskofficial/Deep-Learning/blob/master/CNN/Food%20Vision/bit-predict.ipynb',
        image: '/assets/images/bit-predict.png'
    },
    {
        name: '911 Calls Analysis',
        id: 15,
        description: 'A data science project to analyze 911 calls',
        link: 'https://github.com/itsskofficial/Data-Science/blob/master/Capstone%20Projects/project1.ipynb',
        github: 'https://github.com/itsskofficial/Data-Science/blob/master/Capstone%20Projects/project1.ipynb',
        image: '/assets/images/911-calls-analysis.png'
    },
    {
        name: 'Stock Price Analysis',
        id: 16,
        description: 'A data science project to analyze stock prices',
        link: 'https://github.com/itsskofficial/Data-Science/blob/master/Capstone%20Projects/project2.ipynb',
        github: 'https://github.com/itsskofficial/Data-Science/blob/master/Capstone%20Projects/project2.ipynb',
        image: '/assets/images/stock-price-analysis.png'
    },
    {
        name: 'Google Meet Bot',
        id: 17,
        description: 'A bot which attends your Google Meets for you',
        link: 'https://github.com/itsskofficial/Python/edit/master/Google%20Meet%20Bot/',
        github: 'https://github.com/itsskofficial/Python/edit/master/Google%20Meet%20Bot/',
        image: '/assets/images/google-meet-bot.png'
    },
]

export default projectsData