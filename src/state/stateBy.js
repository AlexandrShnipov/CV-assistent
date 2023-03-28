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

export const stateBy = {
  about: {
    photo: myPhoto,
    profession: 'асістэнт стаматолага',
    name: 'Аляксандр',
    surname: 'Шніпаў'
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
      city: 'Вроцлаў',
      country: 'Польшча',
      icon: location
    },
  objective: 'Я хачу стаць асістэнтам стаматолага і паляпшыць дагляд за пацыентамі, выкарыстоўваючы сваё шырокая ведаў пра зубную тэрміналогію, кантроль інфекцыі і дагляд за пацыентамі, якія я набыў праз навучанне ў праґраме зубнай дагляду. Супрацоўніцтва і дагляд, арыентаваны на пацыентаў, з\'яўляюцца прыярытэтамі для мяне ў стаматалагічным кабінеце. Красавацьце каманды, камунікацыя і навучанне ў працы з рознымі групамі - гэта дадатковыя мае працоўныя практыкі. Я прыцягваю ўвагу да пастаяннага самаскладання і вяду здаровы спосаб жыцця, што дазваляе мне выканаць задачы як у працоўнай сферы, так і за яе межамі.',
  skills: ['Стаматалагічная тэрміналогія',
    'Інфекцыйны кантроль',
    'Сыход за пацыентамі',
    'Камандная праца',
    'Камунікацыя',
    'Адаптыўнасць',
    'Стрэсаўстойлівасць',
    'Навучанне і развіццё',
    'Лідэрства',
    'Здароўе і фітнес',
    'Выдатныя навыкі працы з кампутарам',
    'Англійскі: A2',
    'Польскі: B2'],
  experience: {
    veterinarian: {
      position: 'Ветэрынар',
      places: 'Ветэрынар на сельскагаспадарчым прадпрыемстве',
      dateTitle: 'дата',
      date: '1998-2002',
      work: [
        'ветэрынар'
      ]
    },
    customs: {
      position: 'Мытнік',

      positionsArray: [
        {
          subPosition: 'Кіраўнік кафедры',
          places: 'Інстытут мытных органаў, Менск'
        },
        {
          subPosition: 'Інспектар-начальнік аддзела кіравання рызыкамі',
          places: 'Віцебская мытня, Віцебск'
        }
      ],
      dateTitle: 'дата',
      date: '2004 – 2021',
      work: ['Mытны кантроль',
        'Кіраванне аддзелам да 30 чалавек',
        'Камандная праца',
        'Ментарства',
        'Арганізацыя адукацыйнага працэсу'
      ]
    }
  },
  education: [
    {
      places: 'Віцебская дзяржаўная акадэмія ветэрынарнай медыцыны',
      position: 'ветэрынар',
      dateTitle: 'дата',
      date: '1993 – 1998'
    },
    {
      places: 'Вышэйшая школа GoWork.pl',
      position: 'асістэнт стаматолага',
      dateTitle: 'дата',
      date: '02.2023 - дагэтуль'
    }
  ],
  certificates: [
    {
      organization: 'EcoLab: ',
      name: '"Дэзінфікуй не рызыкуй"',
      link: 'https://drive.google.com/file/d/15RvcJP5rOHY0D3OlbE38Vi3WFpM--9WL/view?usp=sharing',
      dateTitle: 'дата',
      date: '28.02.2023'
    }
  ],
  objectiveTitle: 'Мэта',
  skillsTitle: 'Навыкі',
  experienceTitle: 'Вопыт',
  educationTitle: 'Адукацыя',
  certificatesTitle: 'Сертыфікаты'
};