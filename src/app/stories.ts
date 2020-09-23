export interface Story {
  name: string;
  items: StoryItem[];
}

export interface StoryItem {
  text: string;
  gif: string;
}

export const stories: Story[] = [
  {
    name: 'Ania S.',
    items: [
      {
        text: 'Każdy mój dzień na stażu jest bardzo pracowity. Jako PM kalendarz od góry do dołu mam wypełniony spotkaniami, a ponadto ściśle współpracuję z niezwykle pomocnym zespołem, aby wdrożyć coraz to nowe rozwiązania na platformę. Także nie narzekam na nudę, gdyż każdy dzień stawia przede mną coraz to ciekawsze wyzwania oraz daje możliwości zdobycia nowej wiedzy i umiejętności. Dobrze tu być!',
        gif: 'doggo.gif'
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
        text: 'Mój dzień? Niezwykle pracowity! Jako analityk danych pracuję w Excelu, tworzę ankiety i dzielę komentarze klientów na kategorie. Czy się nudzę? Nie mam na to czasu - choć zadań jest pełno, nigdy nie czuję się przytłoczona, a ich forma jest całkowicie różnorodna. Nuda i rutyna to coś co mnie nie dotyczy. Mam wspaniały zespół, który jest jak ekipa ratunkowa: zawsze gotowi do pomocy. Głupie pytanie? Zawsze jest na nie odpowiedź. Ten staż to ciągłe uświadamianie sobie, że mogę wiedzieć i umieć więcej.',
        gif: 'marta.png'
      }
    ]
  },
  {
    name: 'Weronika',
    items: []
  },
];
