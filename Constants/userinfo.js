//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import Person_1 from "../styles/projects/person_11.png"
import Person_2 from "../styles/projects/person_12.png"
import Person_3 from "../styles/projects/person_13.png"
import Person_4 from "../styles/projects/person_14.png"
export const userinfo = {
    logoText: "Qamashi tumani", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'michaelscott@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+998' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'telegram', link: '', icon: faGithubAlt },
        { type: 'instagram', link: '', icon: faLinkedinIn },
        { type: 'facebook', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Qamashi tuman hokimligi",
        subtitle: "Qashqadaryo viloyati yoshlar ishlari boshqarmasi Qamashi tumani boʻlimining mahallalardagi yoshlar yetakchilari haqida qisqacha maʼlumot"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Category", // eg.frontend, backend, devops etc
            skills: ["Skillset1", "Skillset1", "Skillset1"] //eg. react, html, python etc.
        },
        {
            category: "Category",
            skills: ["Skillset2", "Skillset2", "Skillset2"]
        },
        {
            category: "Category",
            skills: ["Skillset3", "Skillset3", "Skillset3"]
        },
        {
            category: "Category",
            skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Qamashi tumani — Oʻzbekiston Respublikasining Qashqadaryo viloyatidagi tuman, 1937-yil 29-sentabrda tashkil etilgan. 1962-yil 24-dekabrda Qarshi tumaniga qoʻshilgan. 1964-yil 31-dekabrda yana qaytadan tashkil etilgan. Shimoldan Chiroqchi, Yakkabogʻ, Shahrisabz tumanlari, gʻarbdan Koson tumani, janubdan Gʻuzor, Dehqonobod tumanlari, sharqdan Surxondaryo viloyatining Boysun tumani bilan chegaradosh. Maydoni 2,66 ming km2. Aholisi 280,6 ming kishi (2022). Tumanda 60 ta mahalla fuqarolar yigʻini bor. Markazi — Qamashi shahri[",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '1937, 29-sentabr', //timespan
                title: 'Qamashi tumani', //eg. BTech in Compuster Engineering
                organization: 'Tashkil qilingan', //eg. VJTI, Mumbai
                description: 'Qashqadaryo viloyatidagi tuman, 1937-yil 29-sentabrda tashkil etilgan.' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '280,6 ming',
                title: 'Aholisi',
                organization: 'Aholi soni',
                description: ' Aholisi 280,6 ming kishi (2022).'
            },
            {
                time: '2,66 ming km2.',
                title: 'Maydon',
                organization: 'Yer maydoni',
                description: 'Maydoni 2,66 ming km2. '
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Жураев Акмал Алиевич', //company name eg.Microsoft
                companylogo: Person_1, //companylogo
                // position: 'бош хисобчи', //post you held eg.Senior SDE
                // time: 'March 2020 - May 2020', //timespan
                description: 'Ёшлар ишлари агентлиги  Қамаши туман бўлимида бош хисобчи.Ёшлар ишлари агентлиги  Қамаши туман бўлимида ёшлар бандлигини таъминлаш ва тадбиркорликга кўмаклашиш бўйича мутаҳассис' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Қайимов Акмал Анвар ўғли', //company name eg.Microsoft
                companylogo: Person_2, //companylogo
                // position: 'Regional Manager', //post you held eg.Senior SDE
                // time: 'March 2020 - May 2020', //timespan
                description: 'Ўзбекистон Республикаси Ёшлар ишлари агентлиги Қашқадарё вилояти Қамаши тумани Маҳаллаларда ёшлар билан ишлаш, “Ёшлар  дафтари” ва” Ёшлар баланси”ни мувофиқлаштириш бўйича бош мутахассиси' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Ахмедов Шоҳжаҳон Азаматович',
                companylogo: Person_3,
                // position: 'Regional Manager',
                // time: 'March 2020 - May 2020',
                description: 'Ёшлар ишлари агентлиги Қамаши туман бўлими Маҳаллалардаги ёшлар етакчилари фаолиятини мувофиқлаштириш ва ёшларнинг бўш вақтини мазмунли ташкил этиш бўйича бош мутахассиси'
            },
            {
                company: 'Турдиев Ботирали Ражабович',
                companylogo: Person_4,
                // position: 'Regional Manager',
                // time: 'March 2020 - May 2020',
                description: 'Ёшлар ишлари агентлиги Қамаши тумани бўлими Маҳаллаларда ёшлар билан ишлаш, “ Ёшлар дафтари” ва “ Ёшлар баланси “ ни мувофиқлаштириш шўьба мудири'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Yangiliklar',
    workMainPage: 'Mahalla yetakchilari',
    capabilities: 'Capabilities',
    about: 'Tuman haqida',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: "Biz bilan bog'lanish",
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'Batafsil',
    workCTA: "Batafsil...",
    capabCTA: 'Get in Touch',
    educationCTA: 'Biz haqimizda',
    resumeCTA: 'Batafsil',
    submitBTN: 'Yuborish'
}