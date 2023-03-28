import linkedin from '../images/linkedin.png';
import telegram from '../images/telegram.png';
import skype from '../images/skype.png';
import email from '../images/mail.png';
import github from '../images/github.png';
import tel from '../images/tel.png';
import myPhoto from '../images/myPhoto.jpg';
import location from '../images/location.png';
import qrCode from '../images/qrCode.png';
import finger from '../images/finger.png';

export const stateEng = {
  about: {
    photo: myPhoto,
    profession: 'dental assistant',
    name: 'Aliaksandr',
    surname: 'Shnipau'
  },
  contacts: {
    tel: {name: 'tel', img: tel, text: '+48 516 364 062', link: 'tel:+48516364062'},
    socials: [
      // {name: 'linkedin', img: linkedin, link: 'https://linkedin.com/in/aliaksander-shnipau-717101204'},
      {name: 'telegram', img: telegram, text: '@S_Shnipov', link: 'https://t.me/S_Shnipov'},
      {name: 'skype', img: skype, text: 'as04081976', link: 'https://join.skype.com/invite/Ohvpl9s9beq2'},
      {name: 'email', img: email, text: 'SShnipov@gmail.com', link: 'mailto:SShnipov@gmail.com'}
      // {name: 'github', img: github, link: 'https://github.com/settings/profile'}
    ]
  },
  location:
    {
      city: 'Wroclaw',
      country: 'Poland',
      icon: location
    },
  objective: 'I want to become a dental assistant and enhance patient care using my extensive knowledge in dental terminology, infection control, and patient care from my Dental Care program studies. Collaboration and patient-centered care are priorities for me in a dental office. Additionally, I have experience in team management, communication, and teaching from working with diverse groups. I prioritize continuous self-improvement and lead a healthy lifestyle that allows me to excel both inside and outside the workplace.',
  skills: [
    'Dental Terminology',
    'Infection Control',
    'Patient Care',
    'Teamwork',
    'Communication',
    'Adaptability',
    'Stress resistance',
    'Learning and Development',
    'Leadership',
    'Health and Fitness',
    'Excellent computer skills',
    'English: A2',
    'Polish: B2'
  ],
  experience: {
    veterinarian: {
      position: 'Veterinarian',
      places: 'Veterinarian in an agricultural enterprise',
      dateTitle: 'date',
      date: '1998-2002',
      work: [
        'veterinarian'
      ]
    },
    customs: {
      position: 'Customs officer',
      positionsArray: [
        {
          subPosition: 'Head of Department',
          places: 'Institute of the customs authorities, Minsk'
        },
        {
          subPosition: 'Inspector - Head of Risk Management Department',
          places: 'Vitebsk customs, Vitebsk'
        }
      ],
      dateTitle: 'date',
      date: '2004 – 2021',
      work: ['customs inspection',
        'department management up to 30 people',
        'teamwork',
        'mentoring',
        'organization of the education process'
      ]
    }
  },
  education: [
    {
      places: 'Vitebsk State Academy of Veterinary Medicine',
      position: 'veterinarian',
      dateTitle: 'date',
      date: '1993 – 1998'
    },
    // {
    //   places: 'Vitebsk State University of Technology',
    //   position: 'manager-economist',
    //   dateTitle: 'date',
    //   date: '2007 - 2008'
    // },
    // {
    //   places: 'State Institute of the Customs Authorities',
    //   position: 'customs specialist',
    //   dateTitle: 'date',
    //   date: '2018 - 2019'
    // },
    {
      places: 'GoWork.pl Post-Secondary School',
      position: 'dental assistant',
      dateTitle: 'date',
      date: '02.2023 - until now'
    }
  ],
  certificates: [
    {
      organization: 'EcoLab: ',
      name:'"Disinfect do not risk"',
      link: 'https://drive.google.com/file/d/15RvcJP5rOHY0D3OlbE38Vi3WFpM--9WL/view?usp=sharing',
      dateTitle: 'date',
      date: '28.02.2023'
    }
  ],
  objectiveTitle: 'Objective',
  skillsTitle: 'Skills',
  experienceTitle: 'Experience',
  educationTitle: 'Education',
  certificatesTitle: 'Certificates'

};