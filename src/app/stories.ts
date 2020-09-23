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
    items: []
  },
  {
    name: 'Ania W.',
    items: []
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
    items: []
  },
  {
    name: 'Weronika',
    items: []
  },
];
