export interface Story {
  name: string;
  items: StoryItem[];
}

export interface StoryItem {
  text: string;
  gif?: string;
}

export const stories: Story[] = [
  {
    name: 'Ania S.',
    items: [
      {
        text: 'Każdy mój dzień na stażu jest bardzo pracowity.',
        gif: 'cat-typing.gif'
      },
      {
        text: 'Jako PM kalendarz od góry do dołu mam wypełniony spotkaniami, a ponadto ściśle współpracuję z niezwykle pomocnym zespołem.',
        gif: 'meeting.gif'
      },
      {
        text: 'Także nie narzekam na nudę, gdyż każdy dzień stawia przede mną coraz to ciekawsze wyzwania oraz daje możliwości zdobycia nowej wiedzy i umiejętności.',
        gif: 'challenge.gif'
      },
      {
        text: 'Dobrze tu być!',
        gif: 'ok.gif'
      }
    ]
  },
  {
    name: 'Ania W.',
    items: [
      {
        text: 'Mój typowy dzień stażu zawsze wygląda inaczej. O 8:30 siedzę już przy biurku.',
        gif: 'dziad.gif'
      },
      {
        text: 'Jako testerka oprogramowania codziennie sprawdzam działanie jakiejś funkcjonalności albo uczę się pisać kod do testów.',
        gif: 'computer.gif'
      },
      {
        text: 'Codziennie spotykam się również z moim zespołem żeby omawiać bieżące i przyszłe zadania :)',
        gif: 'teamwork.gif'
      },
      {
        text: 'Pracę kończę o 16:30.'
      }
    ]
  },
  {
    name: 'Basia',
    items: [
      {
        text: 'Każdego dnia przemierzam meandry frontendu :)',
        gif: 'journey.gif',
      },
      {
        text: 'Dzień rozpoczynam od kubka gorącej kawy i rozmowy z zespołem.',
        gif: 'coffee-friends.gif',
      },
      {
        text:
          'Kiedy kierunek jest ustalony rzucam się w wir zadań - od dodania ikon, poprzez wykreowanie nowych funkcjonalności dla użytkowników, aż po internacjonalizację… nie ma zadań niemożliwych, chociaz nie zawsze jest łatwo ;)',
        gif: 'programming.gif',
      },
      {
        text:
          'Przeglądam setki linii kodu w poszukiwaniu nowych rozwiązań, które mogą mi się przydać w przyszłości, ale także w poszukiwaniu bugów. Codziennie uczę się czegoś nowego - nie tylko z dziedziny programowania, ale także biznesu.',
        gif: 'learning.gif',
      },
      {
        text:
          'Staż udowodnił mi, że wystarczy chcieć i nie bać się wyzwań, a wszystko się uda!',
        gif: 'adventure.gif',
      },
    ],
  },
  {
    name: 'Jacek',
    items: [
      {
        text: 'Choć jest to dla mnie bardzo ciężkie (chodzenie spać po 2, anyone?), staram się wstać między 8:00, a 8:30.',
        gif: 'cat-wakeup.gif'
      },
      {
        text: 'Robię szybkie śniadanko...',
        gif: 'cat-sandwich.gif'
      },
      {
        text: '... i jem je przy komputerze (uważając żeby nie nakruszyć na klawiaturę czy broń boże wylać na nią kawę O.O), sprawdzając emaile i oglądając jakieś ciekawe prelekcje.',
        gif: 'cat-pc-1.gif'
      },
      {
        text: 'O 10:00 zdzwaniam się z zespołem na daily',
        gif: 'cat-calling.gif'
      },
      {
        text: 'i jeśli nie jest to jeden z tych wtorków, który jest serią wyczerpujacych spotkań, siadam do tego co lubię - kodowania. Jako stażysta software engineering zajmuję się backendem i frontendem związanym z wyborem opcji dostawy.',
        gif: 'cat-typing.gif'
      },
      {
        text: '12:30 to czas na lunch!',
        gif: 'cat-lunch.gif'
      },
      {
        text: 'Potem jeszcze więcej kodowania :)',
        gif: 'cat-typing-2.gif'
      },
      {
        text: 'O 15 mam call z zespołem na "kawkę", gdzie gadamy na luźne tematy nie związane z pracą.',
        gif: 'cat-coffee.gif'
      },
      {
        text: 'Po spotkaniu jeszcze trochę pracuję',
        gif: 'cat-work.gif'
      },
      {
        text: 'i... fajrant.',
        gif: 'cat-tired.gif'
      }
    ]
  },
  {
    name: 'Karol',
    items: [
      {
        text: 'Mój dzień na stażu zaczyna się między 8:30 a 9:00.'
      },
      {
        text: 'Pierwsze co robię po odpaleniu lapka to przeglądanie maili i zadań do zrobienia.',
        gif: 'mail.gif'
      },
      {
        text: 'O 9:30 mam zespołowe daily, po którym o 10:00 zdzwaniamy się na "kawkę" i luźne pogadanki.',
        gif: 'coffe.gif'
      },
      {
        text: 'Czasem zdarzą się jeszcze jakieś groomingi, ale zazwyczaj od razu po kawce zaczynam realizować zadanka (co sprowadza się głównie do programowania ;)).',
        gif: 'programming.gif'
      },
      {
        text: 'Około 14 przerwa na lunch, a później znowu programowanie.',
        gif: 'coding.gif'
      },
      {
        text: 'Dzień kończę między 16:30, a 17:00.'
      }
    ]
  },
  {
    name: 'Marta',
    items: [
      {
        text: 'Mój dzień? Niezwykle pracowity!'
      },
      {
        text: 'Wstaję około 7:00. Jem śniadanie – czasem to po prostu tosty/płatki na mleku (z zasadą: najpierw mleko potem płatki – nigdy na odwrót), a czasem bawię się w kucharza i przyrządzam szakszukę.',
        gif: 'gif001.gif'
      },
      {
        text: 'O 8:00 odpalam kompa – spędzam przy nim 8 godzin pracując. Jako analityk danych pracuję w Excelu, tworzę ankiety i dzielę komentarze klientów na kategorie.',
        gif: 'gif002.gif'
      },
      {
        text: 'Mam wspaniały zespół, który jest jak ekipa ratunkowa: zawsze gotowi do pomocy. W ciągu dnia często się z nimi kontaktuję.',
        gif: 'gif003.gif'
      },
      {
        text: 'Gdzieś w połowie dnia mam przerwę na lunch.',
        gif: 'gif004.gif'
      },
      {
        text: 'Dzień pracy kończę zazwyczaj sprawdzaniem czy o niczym nie zapomniałam. (A to odkąd raz zapomniałam o dość ważnym mailu.)',
        gif: 'gif005.gif'
      },
      {
        text: 'To tyle!'
      }
    ]
  },
  {
    name: 'Weronika',
    items: [
      {
        text: 'Mój dzień zazwyczaj zaczyna się pomiędzy 8.00 a 8.30 i każdego dnia czekają na mnie różnego rodzaju wyzwania.',
        gif: 'wer1.gif'
      },
      {
        text: 'Jako członek zespołu order zajmuję się funkcjonalnościami w procesie zakupowym. O 9.20 widzimy się z zespołem na daily, następnie przez cały dzień zajmuję się powierzonymi zadaniami. Przez okres stażu zajmowałam się edycją zamówienia. Każdego dnia odbywa się również jakieś spotkanie, w którym z chęcią uczestniczę.',
        gif: 'wer2.png'
      },
      {
        text: 'Obowiązkowo o godzinie 15 robię sobie krótką przerwę na kawę i coś słodkiego.'
      }
    ]
  },
];
