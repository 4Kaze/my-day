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
    items: []
  },
  {
    name: 'Jacek',
    items: [
      {
        text: 'Choć jest to dla mnie bardzo ciężkie, staram się wstać między 8:00, a 8:30.',
        gif: 'cat-wakeup.gif'
      },
      {
        text: 'Robię szybkie śniadanko...',
        gif: 'cat-sandwich.gif'
      },
      {
        text: '... i jem je przy komputerze (I know, I know), sprawdzając emaile i oglądając jakieś ciekawe prelekcje.',
        gif: 'cat-pc-1.gif'
      },
      {
        text: 'O 10:00 zdzwaniam się z zespołem na daily',
        gif: 'cat-calling.gif'
      },
      {
        text: 'i jeśli nie ma tego dnia serii spotkań, siadam do kodowania.',
        gif: 'cat-typing.gif'
      },
      {
        text: '12:30 to czas na lunch!',
        gif: 'cat-lunch.gif'
      },
      {
        text: 'Jeszcze więcej kodowania :)',
        gif: 'cat-typing-2.gif'
      },
      {
        text: 'O 15 mam call z zespołem na "kawkę" ☕',
        gif: 'cat-coffee.gif'
      },
      {
        text: 'Po spotkaniu jeszcze trochę koduję i - fajrant.',
        gif: 'cat-tired.gif'
      }
    ]
  },
  {
    name: 'Karol',
    items: []
  },
  {
    name: 'Marta',
    items: [
      {
        text: 'Mój dzień? Niezwykle pracowity!\nWstaję około 7:00. Jem śniadanie – czasem to po prostu tosty/płatki na mleku (z zasadą: najpierw mleko potem płatki – nigdy na odwrót), a czasem bawię się w kucharza i przyrządzam szakszukę.',
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
        gif: ''
      },
      {
        text: 'Jako członek zespołu order zajmuję się funkcjonalnościami w procesie zakupowym. O 9.20 widzimy się z zespołem na daily, następnie przez cały dzień zajmuję się powierzonymi zadaniami. Przez okres stażu zajmowałam się edycją zamówienia. Każdego dnia odbywa się również jakieś spotkanie, w którym z chęcią uczestniczę.',
        gif: ''
      },
      {
        text: 'Obowiązkowo o godzinie 15 robię sobie krótką przerwę na kawę i coś słodkiego.'
      }
    ]
  },
];
