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

export const statePl = {
  about: {
    photo: myPhoto,
    profession: 'Asystent stomatologiczny',
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
      city: 'Wrocław',
      country: 'Polska',
      icon: location
    },
  objective: 'Chcę zostać asystentem stomatologicznym i poprawić opiekę nad pacjentem, wykorzystując moją rozległą wiedzę z zakresu terminologii dentystycznej, kontroli infekcji i opieki nad pacjentem, zdobytą podczas studiów w ramach programu Dental Care. Współpraca i opieka skoncentrowana na pacjencie to dla mnie priorytety w gabinecie stomatologicznym. Dodatkowo mam doświadczenie w zarządzaniu zespołami, komunikacji i nauczaniu z pracy z różnymi grupami. Priorytetem jest dla mnie ciągłe samodoskonalenie i prowadzę zdrowy tryb życia, który pozwala mi doskonalić się zarówno w miejscu pracy, jak i poza nim.',
  skills: ['Terminologia Stomatologiczna',
    'Kontrola Infekcji',
    'Opieka Nad Pacjentem',
    'Teamwork',
    'Komunikacja',
    'Adaptacyjność',
    'Odporność na stres',
    'Uczenie się i rozwój',
    'Przywództwo',
    'Zdrowie i Fitness',
    'Doskonałe umiejętności obsługi komputera',
    'Angielski: A2',
    'Polski: B2'],
  experience: {
    veterinarian: {
      position: 'Weterynarz',
      places: 'Weterynarz w przedsiębiorstwie rolnym',
      dateTitle: 'date',
      date: '1998-2002',
      work: [
        'weterynarz'
      ]
    },
    customs: {
      position: 'Celnik',
      positionsArray: [
        {
          subPosition: 'Szef działu',
          places: 'Instytut organów celnych, Mińsk'
        },
        {
          subPosition: 'Inspektor-Kierownik Działu Zarządzania Ryzykiem',
          places: 'Celnica w Witebsku, Witebsk'
        }
      ],
      dateTitle: 'date',
      date: '2004 – 2021',
      work: ['Kontrola celna',
        'Zarządzanie działem do 30 osób',
        'Praca zespołowa',
        'Mentorowanie',
        'Organizacja procesu edukacji'
      ]
    }
  },
  education: [
  {
      places: 'Witebska Państwowa Akademia Medycyny Weterynaryjnej',
      position: 'weterynarz',
      dateTitle: 'date',
      date: '1993 – 1998'
    },
    {
      places: 'Szkoła Policealna GoWork.pl',
      position: 'Asystent stomatologiczny',
      dateTitle: 'date',
      date: '02.2023 - do nowego'
    }
  ],
  certificates: [
    {
      organization: 'EcoLab: ',
      name:'"Dezynfekuj nie ryzykuj"',
      link: 'https://drive.google.com/file/d/15RvcJP5rOHY0D3OlbE38Vi3WFpM--9WL/view?usp=sharing',
      dateTitle: 'date',
      date: '28.02.2023'
    }
  ],
  objectiveTitle: 'Cel',
  skillsTitle: 'Umiejętności',
  experienceTitle: 'Doświadczenie',
  educationTitle: 'Edukacja',
  certificatesTitle: 'Certyfikaty'
};