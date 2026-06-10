'use strict';

/* ---------- Movie data used by every page ---------- */
const MOVIES = [
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    year: 2023,
    genres: ['Drama', 'History', 'Biography'],
    rating: 4.8,
    runtime: '180 min',
    director: 'Christopher Nolan',
    cast: 'Cillian Murphy, Emily Blunt, Robert Downey Jr.',
    summary: 'The story of J. Robert Oppenheimer and the scientific race that changed the world forever.',
    review: 'A huge, tense character study that turns history into a moral thriller.',
    popularity: 99,
    featured: true,
    poster: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg',
    palette: ['#1f2937', '#b45309', '#fbbf24']
  },
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    year: 2024,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 4.7,
    runtime: '166 min',
    director: 'Denis Villeneuve',
    cast: 'Timothee Chalamet, Zendaya, Rebecca Ferguson',
    summary: 'Paul Atreides joins the Fremen and faces a war for Arrakis, revenge and his own terrifying destiny.',
    review: 'Monumental science fiction with scale, texture and a strong emotional charge.',
    popularity: 98,
    featured: true,
    poster: 'https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    palette: ['#3b2f2f', '#d97706', '#fef3c7']
  },
  {
    id: 'top-gun-maverick',
    title: 'Top Gun: Maverick',
    year: 2022,
    genres: ['Action', 'Drama'],
    rating: 4.6,
    runtime: '131 min',
    director: 'Joseph Kosinski',
    cast: 'Tom Cruise, Miles Teller, Jennifer Connelly',
    summary: 'Maverick returns to train elite pilots for a mission that may demand impossible sacrifice.',
    review: 'A clean, emotional blockbuster with practical aerial sequences that genuinely soar.',
    popularity: 97,
    featured: true,
    poster: 'https://image.tmdb.org/t/p/original/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
    palette: ['#0f172a', '#2563eb', '#f97316']
  },
  {
    id: 'inception',
    title: 'Inception',
    year: 2010,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 4.8,
    runtime: '148 min',
    director: 'Christopher Nolan',
    cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    summary: 'A skilled thief enters dreams to plant an idea that could change a corporate empire.',
    review: 'A dazzling puzzle film that balances spectacle, rules and emotional stakes.',
    popularity: 96,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    palette: ['#111827', '#0ea5e9', '#f97316']
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: 2014,
    genres: ['Drama', 'Sci-Fi', 'Adventure'],
    rating: 4.7,
    runtime: '169 min',
    director: 'Christopher Nolan',
    cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    summary: 'Explorers travel through a wormhole searching for a new home as Earth collapses behind them.',
    review: 'Grand, emotional and visually overwhelming, with cosmic ideas tied to intimate longing.',
    popularity: 95,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/2ssWTSVklAEc98frZUQhgtGHx7s.jpg',
    palette: ['#0f172a', '#1d4ed8', '#e0f2fe']
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    rating: 4.8,
    runtime: '152 min',
    director: 'Christopher Nolan',
    cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    summary: 'Batman faces the Joker, a criminal force determined to break Gotham through chaos.',
    review: 'A landmark superhero crime drama, still gripping because its conflict feels moral and personal.',
    popularity: 94,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg',
    palette: ['#020617', '#475569', '#facc15']
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    genres: ['Drama', 'Thriller', 'Comedy'],
    rating: 4.7,
    runtime: '132 min',
    director: 'Bong Joon Ho',
    cast: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
    summary: 'A poor family infiltrates a wealthy household, triggering a class conflict full of secrets.',
    review: 'Precise, funny and devastating, shifting tone with total control.',
    popularity: 93,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    palette: ['#1f2937', '#4b5563', '#facc15']
  },
  {
    id: 'whiplash',
    title: 'Whiplash',
    year: 2014,
    genres: ['Drama', 'Music'],
    rating: 4.6,
    runtime: '107 min',
    director: 'Damien Chazelle',
    cast: 'Miles Teller, J.K. Simmons, Melissa Benoist',
    summary: 'A young drummer is pushed to dangerous extremes by a ruthless conservatory instructor.',
    review: 'Explosive, lean and unforgettable, powered by rhythm, fear and obsession.',
    popularity: 92,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/wbQa0EnWUyRzQ5d1pHLNRlmsCUP.jpg',
    palette: ['#1c1917', '#dc2626', '#f59e0b']
  },
  {
    id: 'the-matrix',
    title: 'The Matrix',
    year: 1999,
    genres: ['Action', 'Sci-Fi'],
    rating: 4.6,
    runtime: '136 min',
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    summary: 'A hacker discovers that reality is a simulation and joins a rebellion against machine control.',
    review: 'Stylish, philosophical and still thrilling, with action design that reshaped modern cinema.',
    popularity: 91,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/tlm8UkiQsitc8rSuIAscQDCnP8d.jpg',
    palette: ['#052e16', '#16a34a', '#d9f99d']
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    year: 1994,
    genres: ['Drama', 'Crime'],
    rating: 4.9,
    runtime: '142 min',
    director: 'Frank Darabont',
    cast: 'Tim Robbins, Morgan Freeman, Bob Gunton',
    summary: 'A banker sentenced to life in prison builds hope and friendship inside Shawshank State Penitentiary.',
    review: 'A deeply satisfying drama about endurance, dignity and the long work of hope.',
    popularity: 90,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
    palette: ['#1f2937', '#92400e', '#fef3c7']
  },
  {
    id: 'the-godfather',
    title: 'The Godfather',
    year: 1972,
    genres: ['Drama', 'Crime'],
    rating: 4.9,
    runtime: '175 min',
    director: 'Francis Ford Coppola',
    cast: 'Marlon Brando, Al Pacino, James Caan',
    summary: 'The aging patriarch of a crime dynasty transfers power to a reluctant son.',
    review: 'Measured, elegant and intimidating, a family tragedy disguised as a gangster epic.',
    popularity: 89,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg',
    palette: ['#111827', '#7f1d1d', '#f8fafc']
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    year: 1994,
    genres: ['Crime', 'Drama'],
    rating: 4.7,
    runtime: '154 min',
    director: 'Quentin Tarantino',
    cast: 'John Travolta, Uma Thurman, Samuel L. Jackson',
    summary: 'Connected stories of hitmen, criminals and chance collide across Los Angeles.',
    review: 'Bold, funny and endlessly quotable, with structure and dialogue that still feel electric.',
    popularity: 88,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    palette: ['#1f2937', '#facc15', '#ef4444']
  },
  {
    id: 'forrest-gump',
    title: 'Forrest Gump',
    year: 1994,
    genres: ['Drama', 'Romance', 'Comedy'],
    rating: 4.6,
    runtime: '142 min',
    director: 'Robert Zemeckis',
    cast: 'Tom Hanks, Robin Wright, Gary Sinise',
    summary: 'A kind man moves through decades of American history while holding onto one great love.',
    review: 'Sentimental, funny and iconic, with a lead performance that gives the story its heartbeat.',
    popularity: 87,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/66Kn4XWhkuPkJxOJyPEx4U2CUfN.jpg',
    palette: ['#1d4ed8', '#93c5fd', '#f8fafc']
  },
  {
    id: 'gladiator',
    title: 'Gladiator',
    year: 2000,
    genres: ['Action', 'Drama', 'Adventure'],
    rating: 4.5,
    runtime: '155 min',
    director: 'Ridley Scott',
    cast: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen',
    summary: 'A betrayed Roman general becomes a gladiator and seeks justice against a corrupt emperor.',
    review: 'A sweeping revenge epic with physical grandeur and a powerful emotional spine.',
    popularity: 86,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/jhk6D8pim3yaByu1801kMoxXFaX.jpg',
    palette: ['#422006', '#d97706', '#fef3c7']
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 4.4,
    runtime: '121 min',
    director: 'George Miller',
    cast: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
    summary: 'A road warrior and a rebel driver flee across the wasteland with a tyrant in pursuit.',
    review: 'Relentless, visual and brilliantly choreographed, action cinema stripped to pure motion.',
    popularity: 85,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/uT895WNwm0aIJRtGizcQhrejWUo.jpg',
    palette: ['#431407', '#f97316', '#fef08a']
  },
  {
    id: 'john-wick',
    title: 'John Wick',
    year: 2014,
    genres: ['Action', 'Thriller', 'Crime'],
    rating: 4.3,
    runtime: '101 min',
    director: 'Chad Stahelski',
    cast: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
    summary: 'A retired assassin returns to the criminal underworld after a personal loss.',
    review: 'Lean, stylish and precise, built on clean action and mythic simplicity.',
    popularity: 84,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ff2ti5DkA9UYLzyqhQfI2kZqEuh.jpg',
    palette: ['#18181b', '#7f1d1d', '#facc15']
  },
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    year: 2019,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 4.4,
    runtime: '181 min',
    director: 'Anthony Russo, Joe Russo',
    cast: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
    summary: 'The surviving Avengers attempt one final mission to undo Thanos and restore half the universe.',
    review: 'A large-scale finale that earns much of its emotion through years of character history.',
    popularity: 83,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    palette: ['#1e1b4b', '#7c3aed', '#fbbf24']
  },
  {
    id: 'spider-man-across-the-spider-verse',
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genres: ['Action', 'Animation', 'Adventure'],
    rating: 4.6,
    runtime: '140 min',
    director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
    cast: 'Shameik Moore, Hailee Steinfeld, Oscar Isaac',
    summary: 'Miles Morales crosses the multiverse and clashes with a society of Spider-People.',
    review: 'Visually fearless, emotionally sharp and bursting with comic-book imagination.',
    popularity: 82,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/9xfDWXAUbFXQK585JvByT5pEAhe.jpg',
    palette: ['#581c87', '#ec4899', '#22d3ee']
  },
  {
    id: 'spider-man-into-the-spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genres: ['Action', 'Animation', 'Comedy'],
    rating: 4.6,
    runtime: '117 min',
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    cast: 'Shameik Moore, Jake Johnson, Hailee Steinfeld',
    summary: 'Teenager Miles Morales becomes Spider-Man and meets heroes from parallel dimensions.',
    review: 'Inventive, warm and visually revolutionary, with a coming-of-age story at its center.',
    popularity: 81,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8mnXR9rey5uQ08rZAvzojKWbDQS.jpg',
    palette: ['#172554', '#ef4444', '#facc15']
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    year: 2017,
    genres: ['Sci-Fi', 'Drama', 'Mystery'],
    rating: 4.5,
    runtime: '164 min',
    director: 'Denis Villeneuve',
    cast: 'Ryan Gosling, Harrison Ford, Ana de Armas',
    summary: 'A replicant officer uncovers a secret that could destabilize the future of human and artificial life.',
    review: 'A haunting, patient sequel with astonishing images and heavy questions about identity.',
    popularity: 80,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg',
    palette: ['#431407', '#f97316', '#0ea5e9']
  },
  {
    id: 'la-la-land',
    title: 'La La Land',
    year: 2016,
    genres: ['Drama', 'Music', 'Romance'],
    rating: 4.4,
    runtime: '128 min',
    director: 'Damien Chazelle',
    cast: 'Ryan Gosling, Emma Stone, John Legend',
    summary: 'A jazz pianist and an aspiring actor fall in love while chasing dreams in Los Angeles.',
    review: 'A colorful modern musical with ache underneath the sparkle.',
    popularity: 79,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg',
    palette: ['#312e81', '#f472b6', '#fde68a']
  },
  {
    id: 'fight-club',
    title: 'Fight Club',
    year: 1999,
    genres: ['Drama', 'Thriller'],
    rating: 4.5,
    runtime: '139 min',
    director: 'David Fincher',
    cast: 'Brad Pitt, Edward Norton, Helena Bonham Carter',
    summary: 'An insomniac office worker and a soap salesman create an underground fight club.',
    review: 'Aggressive, satirical and dangerous, with a twist that keeps echoing through the whole film.',
    popularity: 78,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    palette: ['#3f1d1d', '#be123c', '#f5f5f4']
  },
  {
    id: 'se7en',
    title: 'Se7en',
    year: 1995,
    genres: ['Crime', 'Mystery', 'Thriller'],
    rating: 4.5,
    runtime: '127 min',
    director: 'David Fincher',
    cast: 'Morgan Freeman, Brad Pitt, Kevin Spacey',
    summary: 'Two detectives hunt a serial killer whose crimes are staged around the seven deadly sins.',
    review: 'Bleak, controlled and unforgettable, a procedural that tightens into nightmare.',
    popularity: 77,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg',
    palette: ['#111827', '#525252', '#facc15']
  },
  {
    id: 'dune',
    title: 'Dune',
    year: 2021,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    rating: 4.3,
    runtime: '155 min',
    director: 'Denis Villeneuve',
    cast: 'Timothee Chalamet, Rebecca Ferguson, Oscar Isaac',
    summary: 'A gifted young noble travels to Arrakis, the desert planet at the center of an imperial struggle.',
    review: 'Immersive and patient, building a vast world through sound, sand and political dread.',
    popularity: 76,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/zRKQW58MBEY078AxkHxEJzUskCl.jpg',
    palette: ['#451a03', '#d97706', '#fde68a']
  },
  {
    id: 'coco',
    title: 'Coco',
    year: 2017,
    genres: ['Animation', 'Family', 'Music'],
    rating: 4.4,
    runtime: '105 min',
    director: 'Lee Unkrich, Adrian Molina',
    cast: 'Anthony Gonzalez, Gael Garcia Bernal, Benjamin Bratt',
    summary: 'A young musician enters the Land of the Dead and uncovers the truth about his family history.',
    review: 'Vibrant, funny and deeply moving, with music woven directly into its emotional core.',
    popularity: 75,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/g7CHF8gTLGooTbP4GznIGwaqAGL.jpg',
    palette: ['#581c87', '#f97316', '#22c55e']
  },
  {
    id: 'the-fellowship-of-the-ring',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    genres: ['Adventure', 'Fantasy', 'Action'],
    rating: 4.7,
    runtime: '179 min',
    director: 'Peter Jackson',
    cast: 'Elijah Wood, Ian McKellen, Viggo Mortensen',
    summary: 'A hobbit begins a dangerous journey to destroy a powerful ring before darkness covers Middle-earth.',
    review: 'A rich, heartfelt fantasy adventure with world-building that still feels handmade and alive.',
    popularity: 74,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/oiwc338EoBgS4sEI2ixAny4KQKg.jpg',
    palette: ['#14532d', '#84cc16', '#fef3c7']
  },
  {
    id: 'the-return-of-the-king',
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    genres: ['Adventure', 'Fantasy', 'Drama'],
    rating: 4.8,
    runtime: '201 min',
    director: 'Peter Jackson',
    cast: 'Elijah Wood, Viggo Mortensen, Ian McKellen',
    summary: 'The fellowship faces its final battles while Frodo and Sam approach Mount Doom.',
    review: 'Epic and emotional, closing a trilogy with scale, sorrow and catharsis.',
    popularity: 73,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ctiw6FZK4N36LmkjSklWEbuvlq9.jpg',
    palette: ['#1f2937', '#16a34a', '#fbbf24']
  },
  {
    id: 'the-green-mile',
    title: 'The Green Mile',
    year: 1999,
    genres: ['Drama', 'Fantasy', 'Crime'],
    rating: 4.7,
    runtime: '189 min',
    director: 'Frank Darabont',
    cast: 'Tom Hanks, Michael Clarke Duncan, David Morse',
    summary: 'A death row guard encounters a gentle prisoner with an extraordinary gift.',
    review: 'A moving supernatural drama with compassion, pain and memorable performances.',
    popularity: 72,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/b6HWTOxn1xevvyHU2K9ICvaRU6g.jpg',
    palette: ['#1f2937', '#65a30d', '#fef08a']
  },
  {
    id: 'one-flew-over-the-cuckoos-nest',
    title: 'One Flew Over the Cuckoo\'s Nest',
    year: 1975,
    genres: ['Drama'],
    rating: 4.6,
    runtime: '133 min',
    director: 'Milos Forman',
    cast: 'Jack Nicholson, Louise Fletcher, Will Sampson',
    summary: 'A rebellious patient challenges the authority of a psychiatric ward and its controlling nurse.',
    review: 'Funny, bitter and tragic, built around performances that never loosen their grip.',
    popularity: 71,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/6Oa3zTiluBz2W8D2ou1MY16dUiF.jpg',
    palette: ['#334155', '#f8fafc', '#f59e0b']
  },
  {
    id: 'star-wars-a-new-hope',
    title: 'Star Wars: A New Hope',
    year: 1977,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 4.6,
    runtime: '121 min',
    director: 'George Lucas',
    cast: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    summary: 'A farm boy joins a rebellion, rescues a princess and confronts the Empire.',
    review: 'Pure adventure storytelling, still energetic because its mythic shape is so clear.',
    popularity: 70,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg',
    palette: ['#0f172a', '#2563eb', '#facc15']
  },
  {
    id: 'the-empire-strikes-back',
    title: 'Star Wars: The Empire Strikes Back',
    year: 1980,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 4.7,
    runtime: '124 min',
    director: 'Irvin Kershner',
    cast: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    summary: 'The Rebel Alliance scatters as Luke Skywalker trains and Darth Vader tightens his pursuit.',
    review: 'Darker, richer and more emotionally resonant than most blockbuster sequels.',
    popularity: 69,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/aJCtkxLLzkk1pECehVjKHA2lBgw.jpg',
    palette: ['#172554', '#60a5fa', '#f8fafc']
  },
  {
    id: 'joker',
    title: 'Joker',
    year: 2019,
    genres: ['Crime', 'Drama', 'Thriller'],
    rating: 4.1,
    runtime: '122 min',
    director: 'Todd Phillips',
    cast: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
    summary: 'A failed comedian in Gotham City spirals into violence and becomes a symbol of unrest.',
    review: 'A grim character piece with a committed central performance and uneasy atmosphere.',
    popularity: 68,
    featured: false,
    poster: 'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg',
    palette: ['#14532d', '#dc2626', '#facc15']
  }
];

const SEEDED_REVIEWS = [
  {
    id: 'seed-1',
    author: 'Minh Anh',
    movieId: 'oppenheimer',
    rating: 5,
    text: 'A dense historical drama, but the tension and performance make every long scene worth it.',
    createdAt: '2026-05-18T10:30:00.000Z'
  },
  {
    id: 'seed-2',
    author: 'Bao Nguyen',
    movieId: 'dune-part-two',
    rating: 5,
    text: 'The scale is incredible, and the character conflict finally feels as massive as the desert.',
    createdAt: '2026-05-12T09:00:00.000Z'
  },
  {
    id: 'seed-3',
    author: 'Linh Tran',
    movieId: 'top-gun-maverick',
    rating: 4,
    text: 'The flying sequences are spectacular, but the emotional payoff is what surprised me.',
    createdAt: '2026-04-28T13:45:00.000Z'
  }
];

const STORAGE_KEYS = {
  favorites: 'movieReviewFavorites',
  ratings: 'movieReviewRatings',
  reviews: 'movieReviewUserReviews',
  contacts: 'movieReviewContacts',
  theme: 'movieReviewTheme'
};

let favoriteIds = new Set(readStorage(STORAGE_KEYS.favorites, []));
let savedRatings = readStorage(STORAGE_KEYS.ratings, {});
let sliderIndex = 0;
let sliderTimer = null;
let sliderItems = [];
let reviewDraftRating = 4;
let toastTimer = null;
let lastModalTrigger = null;
let lastModalMovieId = null;

const posterCache = new Map();
const backdropCache = new Map();
const movieViewRenderers = new Set();

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  setupActiveNav();
  setupMobileNav();
  setupThemeToggle();
  setupStaticIcons();
  ensureModal();
  renderMovieAreas();
  setupSlider();
  setupReviewPage();
  setupContactPage();
  renderStats();
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleKeyboard);
  document.addEventListener('error', handleImageError, true);
}

function icon(name, className = '') {
  const icons = {
    home: '<path d="M3 10.8 12 4l9 6.8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    action: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
    drama: '<path d="M7 8h.01M11 8h.01M8 13c1 .8 3 .8 4 0"/><path d="M3 5c3-2 7-2 10 0v6c0 4-3 7-5 8-2-1-5-4-5-8V5Z"/><path d="M14 6c2-.7 5-.4 7 1v6c0 3-2 5-4 6"/><path d="M16 11h.01M20 11h.01M17 16c.8-.6 2.2-.6 3 0"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2l-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
    filter: '<path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z"/>',
    sort: '<path d="M8 7h10M8 12h7M8 17h4"/><path d="m5 8-2 2-2-2M3 10V4"/>',
    clear: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 14h10l1-14"/><path d="M9 7V4h6v3"/>',
    heart: '<path d="M12 21s-8-4.7-8-11a4.8 4.8 0 0 1 8-3.5A4.8 4.8 0 0 1 20 10c0 6.3-8 11-8 11Z"/>',
    details: '<circle cx="12" cy="12" r="9"/><path d="M12 10v7M12 7h.01"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.8-4 14.2-4 16 0"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    director: '<path d="M4 7h16v12H4z"/><path d="m4 7 3-4h4L8 7M12 7l3-4h4l-3 4"/>',
    cast: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 20c1-4 11-4 12 0M10 20c.8-3.3 9.2-3.3 10 0"/>',
    chart: '<path d="M4 19V5"/><path d="M4 19h16"/><rect x="7" y="11" width="3" height="5"/><rect x="12" y="7" width="3" height="9"/><rect x="17" y="3" width="3" height="13"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/>',
    location: '<path d="M12 22s7-5.5 7-12a7 7 0 0 0-14 0c0 6.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  return `<svg class="ui-icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.film}</svg>`;
}

/* ---------- LocalStorage helpers ---------- */
function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showToast('LocalStorage is not available in this browser.');
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEYS.theme);
  } catch (error) {
    return null;
  }
}

/* ---------- Header behavior ---------- */
function setupActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page-link]').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.pageLink === page);
  });
}

function setupMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupThemeToggle() {
  const saved = getStoredTheme();
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = document.documentElement.dataset.theme || saved || (systemDark ? 'dark' : 'light');
  applyTheme(theme, false);
}

function applyTheme(theme, shouldSave = true) {
  document.documentElement.dataset.theme = theme;
  const buttons = document.querySelectorAll('[data-theme-toggle]');
  const labels = document.querySelectorAll('[data-theme-icon]');
  const symbols = document.querySelectorAll('[data-theme-symbol]');

  labels.forEach((label) => {
    label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  });
  symbols.forEach((symbol) => {
    symbol.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  });
  buttons.forEach((button) => {
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });

  if (shouldSave) {
    try {
      localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch (error) {}
  }
}

function setupStaticIcons() {
  const navIcons = {
    home: 'home',
    popular: 'film',
    action: 'action',
    drama: 'drama',
    reviews: 'star',
    contact: 'mail'
  };

  document.querySelectorAll('[data-page-link]').forEach((link) => {
    if (link.querySelector('.ui-icon')) return;
    link.insertAdjacentHTML('afterbegin', icon(navIcons[link.dataset.pageLink] || 'film', 'nav-icon'));
  });

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    if (button.querySelector('[data-theme-symbol]')) return;
    button.insertAdjacentHTML('afterbegin', '<span class="theme-symbol" data-theme-symbol></span>');
  });
  applyTheme(document.documentElement.dataset.theme || 'light', false);

  const labelIcons = {
    Search: 'search',
    Genre: 'filter',
    Sort: 'sort',
    'Your name': 'user',
    Name: 'user',
    Movie: 'film',
    Rating: 'star',
    Review: 'message',
    Email: 'mail',
    Subject: 'message',
    Message: 'message',
    'Filter by movie': 'filter'
  };

  document.querySelectorAll('.field > span').forEach((label) => {
    const text = label.textContent.trim();
    if (!labelIcons[text] || label.querySelector('.ui-icon')) return;
    label.insertAdjacentHTML('afterbegin', icon(labelIcons[text], 'label-icon'));
  });

  const contactIcons = {
    Email: 'mail',
    Phone: 'phone',
    Studio: 'location'
  };

  document.querySelectorAll('.contact-list dt').forEach((term) => {
    const text = term.textContent.trim();
    if (!contactIcons[text] || term.querySelector('.ui-icon')) return;
    term.insertAdjacentHTML('afterbegin', icon(contactIcons[text], 'label-icon'));
  });

  document.querySelectorAll('[data-clear-filters]').forEach((button) => {
    if (button.querySelector('.ui-icon')) return;
    button.insertAdjacentHTML('afterbegin', icon('clear', 'button-icon'));
  });

  document.querySelectorAll('[data-favorite-filter]').forEach((input) => {
    const label = input.closest('.toggle-field');
    if (!label || label.querySelector('.ui-icon')) return;
    input.insertAdjacentHTML('afterend', icon('heart', 'toggle-icon'));
  });
}

/* ---------- Slider rendering and controls ---------- */
function setupSlider() {
  const stage = document.querySelector('[data-slider]');
  const dots = document.querySelector('[data-slider-dots]');
  if (!stage || !dots) return;

  sliderItems = MOVIES.filter((movie) => movie.featured).slice(0, 3);
  stage.innerHTML = sliderItems.map(slideMarkup).join('');
  dots.innerHTML = sliderItems.map((movie, index) => (
    `<button class="slider-dot" type="button" data-slider-dot="${index}" aria-label="Show ${escapeHTML(movie.title)}"></button>`
  )).join('');

  setActiveSlide(0);
  startSliderTimer();

  const slider = stage.closest('.hero-slider');
  slider.addEventListener('mouseenter', stopSliderTimer);
  slider.addEventListener('mouseleave', startSliderTimer);
}

function slideMarkup(movie, index) {
  return `
    <article class="slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}" style="background-image: url('${getBackdrop(movie)}')">
      <div class="slide-content">
        <div class="slide-meta">
          <span class="pill">${movie.year}</span>
          <span class="pill">${movie.genres.slice(0, 2).join(' / ')}</span>
          <span class="pill">${movie.rating.toFixed(1)} rating</span>
        </div>
        <h2>${escapeHTML(movie.title)}</h2>
        <p>${escapeHTML(movie.summary)}</p>
        <button class="primary-btn" type="button" data-action="details" data-movie-id="${movie.id}">
          ${icon('details', 'button-icon')}<span>View Details</span>
        </button>
      </div>
    </article>
  `;
}

function startSliderTimer() {
  if (!sliderItems.length || sliderTimer) return;
  sliderTimer = window.setInterval(() => setActiveSlide(sliderIndex + 1), 5000);
}

function stopSliderTimer() {
  if (!sliderTimer) return;
  window.clearInterval(sliderTimer);
  sliderTimer = null;
}

function setActiveSlide(nextIndex) {
  if (!sliderItems.length) return;
  sliderIndex = (nextIndex + sliderItems.length) % sliderItems.length;

  document.querySelectorAll('[data-slide]').forEach((slide) => {
    slide.classList.toggle('is-active', Number(slide.dataset.slide) === sliderIndex);
  });

  document.querySelectorAll('[data-slider-dot]').forEach((dot) => {
    dot.classList.toggle('is-active', Number(dot.dataset.sliderDot) === sliderIndex);
  });
}

/* ---------- Movie lists, search and genre filter ---------- */
function renderMovieAreas() {
  document.querySelectorAll('[data-render]').forEach((container) => {
    const renderType = container.dataset.render;

    if (renderType === 'home-popular') {
      const movies = getPopularMovies().slice(0, 9);
      renderMovieGrid(container, movies);
      updateResultCount(document.querySelector('[data-count-scope="home"]'), movies.length, movies.length, 'popular pick');
      return;
    }

    if (renderType === 'popular') {
      setupMovieFilters(container, getPopularMovies());
      return;
    }

    if (renderType === 'genre') {
      const genre = container.dataset.genre;
      const movies = getPopularMovies().filter((movie) => movie.genres.includes(genre));
      setupMovieFilters(container, movies);
    }
  });

  renderFavoriteLists();
}

function setupMovieFilters(container, baseMovies) {
  const section = container.closest('.section-shell') || document;
  const controls = section.querySelector('[data-movie-controls]');
  const searchInput = controls ? controls.querySelector('[data-movie-search]') : null;
  const genreSelect = controls ? controls.querySelector('[data-genre-filter]') : null;
  const sortSelect = controls ? controls.querySelector('[data-sort-select]') : null;
  const favoriteToggle = controls ? controls.querySelector('[data-favorite-filter]') : null;
  const clearButton = controls ? controls.querySelector('[data-clear-filters]') : null;
  const emptyState = section.querySelector('[data-empty-state]');
  const resultCount = section.querySelector('[data-results-count]');

  if (genreSelect && !genreSelect.dataset.ready) {
    populateGenreSelect(genreSelect);
  }

  const renderFiltered = () => {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const genre = genreSelect ? genreSelect.value : '';
    const favoritesOnly = favoriteToggle ? favoriteToggle.checked : false;
    const sortMode = sortSelect ? sortSelect.value : 'popular';
    const filtered = baseMovies.filter((movie) => {
      const matchesTerm = !term || movie.title.toLowerCase().includes(term);
      const matchesGenre = !genre || movie.genres.includes(genre);
      const matchesFavorite = !favoritesOnly || favoriteIds.has(movie.id);
      return matchesTerm && matchesGenre && matchesFavorite;
    });
    const sorted = sortMovies(filtered, sortMode);

    renderMovieGrid(container, sorted);
    updateResultCount(resultCount, sorted.length, baseMovies.length, 'movie');
    if (emptyState) emptyState.hidden = sorted.length > 0;
  };

  if (searchInput) searchInput.addEventListener('input', renderFiltered);
  if (genreSelect) genreSelect.addEventListener('change', renderFiltered);
  if (sortSelect) sortSelect.addEventListener('change', renderFiltered);
  if (favoriteToggle) favoriteToggle.addEventListener('change', renderFiltered);
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (genreSelect) genreSelect.value = '';
      if (sortSelect) sortSelect.value = 'popular';
      if (favoriteToggle) favoriteToggle.checked = false;
      renderFiltered();
    });
  }

  movieViewRenderers.add(renderFiltered);
  renderFiltered();
}

function sortMovies(movieList, sortMode) {
  const movies = [...movieList];
  const userRating = (movie) => Number(savedRatings[movie.id] || 0);

  if (sortMode === 'rating') {
    return movies.sort((a, b) => b.rating - a.rating || b.popularity - a.popularity);
  }

  if (sortMode === 'newest') {
    return movies.sort((a, b) => b.year - a.year || b.popularity - a.popularity);
  }

  if (sortMode === 'title') {
    return movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortMode === 'user-rating') {
    return movies.sort((a, b) => userRating(b) - userRating(a) || b.popularity - a.popularity);
  }

  return movies.sort((a, b) => b.popularity - a.popularity);
}

function updateResultCount(element, visible, total, label) {
  if (!element) return;
  const plural = visible === 1 ? label : `${label}s`;
  element.textContent = `Showing ${visible} of ${total} ${plural}`;
}

function refreshMovieViews() {
  movieViewRenderers.forEach((render) => render());
  renderFavoriteLists();
  renderStats();
}

function populateGenreSelect(select) {
  const genres = Array.from(new Set(MOVIES.flatMap((movie) => movie.genres))).sort();
  const current = select.value;

  select.innerHTML = '<option value="">All genres</option>' + genres.map((genre) => (
    `<option value="${escapeHTML(genre)}">${escapeHTML(genre)}</option>`
  )).join('');
  select.value = current;
  select.dataset.ready = 'true';
}

function renderMovieGrid(container, movieList) {
  container.innerHTML = movieList.map(movieCardMarkup).join('');
}

function movieCardMarkup(movie) {
  const genres = movie.genres.map((genre) => `<span class="genre-tag">${escapeHTML(genre)}</span>`).join('');

  return `
    <article class="movie-card" data-movie-card="${movie.id}">
      <button class="poster-button" type="button" data-action="details" data-movie-id="${movie.id}" aria-label="View details for ${escapeHTML(movie.title)}">
        <img src="${getPoster(movie)}" alt="${escapeHTML(movie.title)} poster" loading="lazy" data-movie-image="${movie.id}">
        <span class="poster-overlay">
          <strong>${escapeHTML(movie.title)}</strong>
          <span>${movie.rating.toFixed(1)} rating</span>
        </span>
      </button>
      <div class="card-body">
        <div class="card-title-row">
          <h2 class="movie-title">${escapeHTML(movie.title)}</h2>
          <span class="score-badge">${movie.rating.toFixed(1)}</span>
        </div>
        <div class="movie-meta">${movie.year} &bull; ${escapeHTML(movie.runtime)}</div>
        <div class="genre-row">${genres}</div>
        <div class="card-actions">
          ${favoriteButtonMarkup(movie.id)}
          ${ratingGroupMarkup(movie.id)}
        </div>
        <button class="secondary-btn details-btn" type="button" data-action="details" data-movie-id="${movie.id}">
          ${icon('details', 'button-icon')}<span>View Details</span>
        </button>
      </div>
    </article>
  `;
}

function getPopularMovies() {
  return [...MOVIES].sort((a, b) => b.popularity - a.popularity);
}

function findMovie(movieId) {
  return MOVIES.find((movie) => movie.id === movieId);
}

/* ---------- Favorites and star ratings ---------- */
function favoriteButtonMarkup(movieId) {
  const movie = findMovie(movieId);
  const isFavorite = favoriteIds.has(movieId);
  const label = isFavorite ? `Remove ${movie.title} from favorites` : `Add ${movie.title} to favorites`;

  return `
    <button class="favorite-btn ${isFavorite ? 'is-active' : ''}" type="button"
      data-action="favorite" data-favorite-btn data-movie-id="${movieId}"
      aria-label="${escapeHTML(label)}" aria-pressed="${isFavorite}">
      ${icon('heart', 'favorite-icon')}
    </button>
  `;
}

function ratingGroupMarkup(movieId) {
  return `<div class="stars" data-rating-stars data-movie-id="${movieId}">${starButtonsMarkup(movieId)}</div>`;
}

function starButtonsMarkup(movieId) {
  const selected = Number(savedRatings[movieId] || 0);
  return [1, 2, 3, 4, 5].map((value) => {
    const active = value <= selected;
    return `
      <button class="star-btn ${active ? 'is-active' : ''}" type="button"
        data-action="rate" data-movie-id="${movieId}" data-rating-value="${value}"
        aria-label="Rate ${value} out of 5">${active ? '&#9733;' : '&#9734;'}</button>
    `;
  }).join('');
}

function toggleFavorite(movieId) {
  const movie = findMovie(movieId);
  if (!movie) return;

  if (favoriteIds.has(movieId)) {
    favoriteIds.delete(movieId);
    showToast(`${movie.title} removed from favorites.`);
  } else {
    favoriteIds.add(movieId);
    showToast(`${movie.title} added to favorites.`);
  }

  writeStorage(STORAGE_KEYS.favorites, Array.from(favoriteIds));
  updateFavoriteButtons(movieId);
  refreshMovieViews();
}

function updateFavoriteButtons(movieId) {
  const movie = findMovie(movieId);
  const isFavorite = favoriteIds.has(movieId);

  document.querySelectorAll(`[data-favorite-btn][data-movie-id="${movieId}"]`).forEach((button) => {
    button.classList.toggle('is-active', isFavorite);
    button.setAttribute('aria-pressed', String(isFavorite));
    button.setAttribute('aria-label', isFavorite ? `Remove ${movie.title} from favorites` : `Add ${movie.title} to favorites`);
    button.innerHTML = icon('heart', 'favorite-icon');
  });

  renderFavoriteLists();
  renderStats();
}

function renderFavoriteLists() {
  document.querySelectorAll('[data-favorite-list]').forEach((list) => {
    const section = list.closest('.section-shell') || document;
    const empty = section.querySelector('[data-favorites-empty]');
    const favorites = getPopularMovies().filter((movie) => favoriteIds.has(movie.id));

    list.innerHTML = favorites.map(favoriteMiniMarkup).join('');
    if (empty) empty.hidden = favorites.length > 0;
  });
}

function favoriteMiniMarkup(movie) {
  return `
    <article class="favorite-mini">
      <button class="favorite-thumb" type="button" data-action="details" data-movie-id="${movie.id}" aria-label="View details for ${escapeHTML(movie.title)}">
        <img src="${getPoster(movie)}" alt="${escapeHTML(movie.title)} poster" loading="lazy" data-movie-image="${movie.id}">
      </button>
      <div>
        <h3>${escapeHTML(movie.title)}</h3>
        <p>${movie.year} &bull; ${movie.rating.toFixed(1)} rating</p>
      </div>
      ${favoriteButtonMarkup(movie.id)}
    </article>
  `;
}

function renderStats() {
  document.querySelectorAll('[data-stats]').forEach((container) => {
    const type = container.dataset.stats;
    container.innerHTML = type === 'reviews' ? reviewStatsMarkup() : movieStatsMarkup(type);
  });
}

function movieStatsMarkup(type) {
  const movies = type === 'home' ? getPopularMovies().slice(0, 9) : MOVIES;
  const average = averageNumber(movies.map((movie) => movie.rating));
  const userRated = Object.keys(savedRatings).filter((movieId) => findMovie(movieId)).length;
  const favoriteCount = MOVIES.filter((movie) => favoriteIds.has(movie.id)).length;
  const featured = MOVIES.filter((movie) => movie.featured).length;

  return `
    <article class="stat-card">
      ${icon('film', 'stat-icon')}
      <span>${type === 'home' ? 'Home picks' : 'Catalog'}</span>
      <strong>${movies.length}</strong>
    </article>
    <article class="stat-card">
      ${icon('star', 'stat-icon')}
      <span>Avg critic score</span>
      <strong>${average.toFixed(1)}</strong>
    </article>
    <article class="stat-card">
      ${icon('heart', 'stat-icon')}
      <span>Favorites</span>
      <strong>${favoriteCount}</strong>
    </article>
    <article class="stat-card">
      ${icon(type === 'home' ? 'chart' : 'star', 'stat-icon')}
      <span>${type === 'home' ? 'Featured slides' : 'Your ratings'}</span>
      <strong>${type === 'home' ? featured : userRated}</strong>
    </article>
  `;
}

function reviewStatsMarkup() {
  const reviews = getAllReviews();
  const userReviews = readStorage(STORAGE_KEYS.reviews, []);
  const average = averageNumber(reviews.map((review) => Number(review.rating)));

  return `
    <article class="stat-card">
      ${icon('message', 'stat-icon')}
      <span>Total reviews</span>
      <strong>${reviews.length}</strong>
    </article>
    <article class="stat-card">
      ${icon('user', 'stat-icon')}
      <span>User reviews</span>
      <strong>${userReviews.length}</strong>
    </article>
    <article class="stat-card">
      ${icon('star', 'stat-icon')}
      <span>Avg review score</span>
      <strong>${average ? average.toFixed(1) : '0.0'}</strong>
    </article>
  `;
}

function averageNumber(values) {
  const usable = values.filter((value) => Number.isFinite(Number(value)));
  if (!usable.length) return 0;
  return usable.reduce((total, value) => total + Number(value), 0) / usable.length;
}

function saveRating(movieId, rating) {
  const movie = findMovie(movieId);
  if (!movie) return;

  savedRatings[movieId] = rating;
  writeStorage(STORAGE_KEYS.ratings, savedRatings);
  updateRatingGroups(movieId);
  updateUserRatingLabels(movieId);
  refreshMovieViews();
  showToast(`You rated ${movie.title} ${rating}/5.`);
}

function updateRatingGroups(movieId) {
  document.querySelectorAll(`[data-rating-stars][data-movie-id="${movieId}"]`).forEach((group) => {
    group.innerHTML = starButtonsMarkup(movieId);
  });
}

function updateUserRatingLabels(movieId) {
  const rating = Number(savedRatings[movieId] || 0);
  document.querySelectorAll(`[data-user-rating-label][data-movie-id="${movieId}"]`).forEach((label) => {
    label.textContent = rating ? `Your rating: ${rating}/5` : 'Your rating: not rated yet';
  });
}

/* ---------- Modal popup ---------- */
function ensureModal() {
  let modal = document.querySelector('[data-modal]');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.className = 'modal';
  modal.dataset.modal = '';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="modal-backdrop" data-action="close-modal"></div>
    <section class="modal-panel" aria-labelledby="modal-title">
      <button class="modal-close" type="button" data-action="close-modal" aria-label="Close modal">&times;</button>
      <div data-modal-content></div>
    </section>
  `;

  document.body.appendChild(modal);
  return modal;
}

function openMovieModal(movieId, trigger = null) {
  const movie = findMovie(movieId);
  if (!movie) return;

  lastModalTrigger = trigger;
  lastModalMovieId = movieId;
  const modal = ensureModal();
  const content = modal.querySelector('[data-modal-content]');
  content.innerHTML = movieModalMarkup(movie);
  modal.hidden = false;
  document.body.classList.add('modal-open');

  window.setTimeout(() => {
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) closeButton.focus();
  }, 0);
}

function movieModalMarkup(movie) {
  const genres = movie.genres.map((genre) => `<span class="genre-tag">${escapeHTML(genre)}</span>`).join('');
  const userRating = Number(savedRatings[movie.id] || 0);
  const reviewQuote = getReviewQuote(movie.id);
  const quoteMarkup = reviewQuote
    ? `<blockquote class="review-quote">"${escapeHTML(reviewQuote.text)}"<cite>${escapeHTML(reviewQuote.author)}</cite></blockquote>`
    : '';

  return `
    <div class="modal-content">
      <div class="modal-poster">
        <img src="${getPoster(movie)}" alt="${escapeHTML(movie.title)} poster" data-movie-image="${movie.id}">
      </div>
      <div class="modal-details">
        <div>
          <p class="eyebrow">${escapeHTML(movie.genres[0])} review</p>
          <h2 id="modal-title">${escapeHTML(movie.title)}</h2>
        </div>
        <div class="genre-row">${genres}</div>
        <p class="modal-summary">${escapeHTML(movie.summary)}</p>
        <p>${escapeHTML(movie.review)}</p>
        <div class="fact-grid">
          <div class="fact">${icon('calendar', 'fact-icon')}<span>Year</span><strong>${movie.year}</strong></div>
          <div class="fact">${icon('clock', 'fact-icon')}<span>Runtime</span><strong>${escapeHTML(movie.runtime)}</strong></div>
          <div class="fact">${icon('director', 'fact-icon')}<span>Director</span><strong>${escapeHTML(movie.director)}</strong></div>
          <div class="fact">${icon('cast', 'fact-icon')}<span>Cast</span><strong>${escapeHTML(movie.cast)}</strong></div>
        </div>
        <div class="modal-actions">
          ${favoriteButtonMarkup(movie.id)}
          ${ratingGroupMarkup(movie.id)}
          <span class="score-badge">${movie.rating.toFixed(1)} critic</span>
          <span class="user-rating-label" data-user-rating-label data-movie-id="${movie.id}">
            ${userRating ? `Your rating: ${userRating}/5` : 'Your rating: not rated yet'}
          </span>
        </div>
        ${quoteMarkup}
      </div>
    </div>
  `;
}

function closeModal() {
  const modal = document.querySelector('[data-modal]');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  lastModalMovieId = null;

  if (lastModalTrigger && typeof lastModalTrigger.focus === 'function' && document.contains(lastModalTrigger)) {
    lastModalTrigger.focus();
  }
  lastModalTrigger = null;
}

function getReviewQuote(movieId) {
  return getAllReviews().find((review) => review.movieId === movieId);
}

/* ---------- Reviews page and user review storage ---------- */
function setupReviewPage() {
  const form = document.querySelector('[data-review-form]');
  if (!form) return;

  const movieSelect = form.querySelector('[data-review-movie]');
  const filterSelect = document.querySelector('[data-review-filter]');
  movieSelect.innerHTML = getPopularMovies().map((movie) => (
    `<option value="${movie.id}">${escapeHTML(movie.title)}</option>`
  )).join('');
  if (filterSelect) {
    filterSelect.innerHTML = '<option value="">All reviews</option>' + getPopularMovies().map((movie) => (
      `<option value="${movie.id}">${escapeHTML(movie.title)}</option>`
    )).join('');
    filterSelect.addEventListener('change', renderReviews);
  }

  renderReviewStarInput();
  renderReviews();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('[data-review-name]').value.trim();
    const movieId = movieSelect.value;
    const text = form.querySelector('[data-review-text]').value.trim();

    if (!name || !movieId || !text) return;

    const userReviews = readStorage(STORAGE_KEYS.reviews, []);
    userReviews.unshift({
      id: `user-${Date.now()}`,
      author: name,
      movieId,
      rating: reviewDraftRating,
      text,
      createdAt: new Date().toISOString()
    });

    writeStorage(STORAGE_KEYS.reviews, userReviews);
    form.reset();
    reviewDraftRating = 4;
    renderReviewStarInput();
    renderReviews();
    showToast('Review saved locally.');
  });
}

function renderReviewStarInput() {
  const container = document.querySelector('[data-review-star-input]');
  if (!container) return;

  container.innerHTML = [1, 2, 3, 4, 5].map((value) => `
    <button class="review-star-btn ${value <= reviewDraftRating ? 'is-active' : ''}" type="button"
      data-review-star="${value}" aria-label="Set review rating to ${value}">
      ${value <= reviewDraftRating ? '&#9733;' : '&#9734;'}
    </button>
  `).join('');
}

function renderReviews() {
  const list = document.querySelector('[data-review-list]');
  if (!list) return;

  const filterSelect = document.querySelector('[data-review-filter]');
  const movieId = filterSelect ? filterSelect.value : '';
  const reviews = getAllReviews().filter((review) => !movieId || review.movieId === movieId);

  list.innerHTML = reviews.length
    ? reviews.map(reviewMarkup).join('')
    : '<p class="empty-state">No reviews match this movie yet.</p>';
  renderStats();
}

function getAllReviews() {
  const userReviews = readStorage(STORAGE_KEYS.reviews, []).map((review) => ({ ...review, userCreated: true }));
  return [...userReviews, ...SEEDED_REVIEWS];
}

function reviewMarkup(review) {
  const movie = findMovie(review.movieId);
  const title = movie ? movie.title : 'Unknown movie';
  const deleteButton = review.userCreated
    ? `<button class="small-danger" type="button" data-action="delete-review" data-review-id="${review.id}">Delete</button>`
    : '';

  return `
    <article class="review-item">
      <div class="review-top">
        <div>
          <h3>${escapeHTML(review.author)}</h3>
          <div class="review-movie">${escapeHTML(title)} &bull; ${formatDate(review.createdAt)}</div>
        </div>
        <div class="review-stars" aria-label="${review.rating} out of 5">${starsText(review.rating)}</div>
      </div>
      <p>${escapeHTML(review.text)}</p>
      ${deleteButton}
    </article>
  `;
}

function deleteReview(reviewId) {
  const userReviews = readStorage(STORAGE_KEYS.reviews, []);
  writeStorage(STORAGE_KEYS.reviews, userReviews.filter((review) => review.id !== reviewId));
  renderReviews();
  showToast('Review deleted.');
}

/* ---------- Contact form storage ---------- */
function setupContactPage() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const messages = readStorage(STORAGE_KEYS.contacts, []);

    messages.unshift({
      ...data,
      createdAt: new Date().toISOString()
    });

    writeStorage(STORAGE_KEYS.contacts, messages);
    form.reset();

    const status = document.querySelector('[data-contact-status]');
    if (status) status.textContent = 'Message saved locally. Thank you!';
    showToast('Contact message saved.');
  });
}

/* ---------- Global click and keyboard events ---------- */
function handleDocumentClick(event) {
  const themeToggle = event.target.closest('[data-theme-toggle]');
  if (themeToggle) {
    const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
    return;
  }

  const close = event.target.closest('[data-action="close-modal"]');
  if (close) {
    closeModal();
    return;
  }

  const sliderAction = event.target.closest('[data-slider-action]');
  if (sliderAction) {
    stopSliderTimer();
    setActiveSlide(sliderAction.dataset.sliderAction === 'next' ? sliderIndex + 1 : sliderIndex - 1);
    startSliderTimer();
    return;
  }

  const sliderDot = event.target.closest('[data-slider-dot]');
  if (sliderDot) {
    stopSliderTimer();
    setActiveSlide(Number(sliderDot.dataset.sliderDot));
    startSliderTimer();
    return;
  }

  const details = event.target.closest('[data-action="details"]');
  if (details) {
    openMovieModal(details.dataset.movieId, details);
    return;
  }

  const favorite = event.target.closest('[data-action="favorite"]');
  if (favorite) {
    toggleFavorite(favorite.dataset.movieId);
    return;
  }

  const rating = event.target.closest('[data-action="rate"]');
  if (rating) {
    saveRating(rating.dataset.movieId, Number(rating.dataset.ratingValue));
    return;
  }

  const reviewStar = event.target.closest('[data-review-star]');
  if (reviewStar) {
    reviewDraftRating = Number(reviewStar.dataset.reviewStar);
    renderReviewStarInput();
    return;
  }

  const deleteButton = event.target.closest('[data-action="delete-review"]');
  if (deleteButton) {
    deleteReview(deleteButton.dataset.reviewId);
  }
}

function handleKeyboard(event) {
  if (event.key === 'Escape') closeModal();
}

function handleImageError(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.dataset.movieImage || image.dataset.fallbackApplied) return;

  const movie = findMovie(image.dataset.movieImage);
  if (!movie) return;

  image.dataset.fallbackApplied = 'true';
  image.src = getGeneratedPoster(movie);
}

/* ---------- Real movie images with generated fallbacks ---------- */
function getPoster(movie) {
  if (movie.poster) return sizedTmdbImage(movie.poster, 'w500');
  return getGeneratedPoster(movie);
}

function getBackdrop(movie) {
  if (movie.backdrop) return sizedTmdbImage(movie.backdrop, 'w1280');
  if (movie.poster) return sizedTmdbImage(movie.poster, 'w1280');
  return getGeneratedBackdrop(movie);
}

function sizedTmdbImage(url, size) {
  return url.replace('/t/p/original/', `/t/p/${size}/`);
}

function getGeneratedPoster(movie) {
  if (posterCache.has(movie.id)) return posterCache.get(movie.id);

  const canvas = document.createElement('canvas');
  const width = 640;
  const height = 960;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  const random = seededRandom(hashText(movie.id));
  const [dark, mid, bright] = movie.palette;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, dark);
  gradient.addColorStop(0.48, mid);
  gradient.addColorStop(1, bright);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  drawPosterTexture(ctx, width, height, random);
  drawPosterMotif(ctx, movie, width, height, random);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.48)';
  ctx.fillRect(0, 638, width, 322);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.82)';
  ctx.font = '800 28px Arial, sans-serif';
  ctx.fillText(movie.genres[0].toUpperCase(), 54, 704);

  const title = fitCanvasTitle(ctx, movie.title.toUpperCase(), 530, 58, 38);
  ctx.font = `900 ${title.size}px Arial, sans-serif`;
  ctx.fillStyle = '#ffffff';
  title.lines.forEach((line, index) => {
    ctx.fillText(line, 54, 770 + index * (title.size + 8));
  });

  ctx.font = '700 27px Arial, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
  ctx.fillText(`${movie.year}  |  ${movie.rating.toFixed(1)} RATING`, 54, 912);

  const dataUrl = canvas.toDataURL('image/png');
  posterCache.set(movie.id, dataUrl);
  return dataUrl;
}

function getGeneratedBackdrop(movie) {
  if (backdropCache.has(movie.id)) return backdropCache.get(movie.id);

  const canvas = document.createElement('canvas');
  const width = 1600;
  const height = 720;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  const random = seededRandom(hashText(`${movie.id}-backdrop`));
  const [dark, mid, bright] = movie.palette;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, dark);
  gradient.addColorStop(0.54, mid);
  gradient.addColorStop(1, bright);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  drawBackdropScene(ctx, movie, width, height, random);
  drawPosterTexture(ctx, width, height, random, 320);

  const dataUrl = canvas.toDataURL('image/png');
  backdropCache.set(movie.id, dataUrl);
  return dataUrl;
}

function drawPosterTexture(ctx, width, height, random, count = 520) {
  ctx.save();
  ctx.globalAlpha = 0.15;
  for (let i = 0; i < count; i += 1) {
    const size = 1 + random() * 2.5;
    ctx.fillStyle = random() > 0.5 ? '#ffffff' : '#000000';
    ctx.fillRect(random() * width, random() * height, size, size);
  }
  ctx.restore();
}

function drawPosterMotif(ctx, movie, width, height, random) {
  const primary = movie.genres[0];

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.arc(random() * width, 120 + random() * 420, 80 + random() * 180, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  if (primary === 'Action') {
    drawActionMotif(ctx, width, height);
  } else if (primary === 'Drama') {
    drawDramaMotif(ctx, width, height);
  } else if (primary === 'Comedy') {
    drawComedyMotif(ctx, width, height, random);
  } else {
    drawSciFiMotif(ctx, width, height);
  }
}

function drawActionMotif(ctx, width, height) {
  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.34)';
  ctx.beginPath();
  ctx.moveTo(width * 0.42, height * 0.22);
  ctx.lineTo(width * 0.86, height * 0.64);
  ctx.lineTo(width * 0.14, height * 0.64);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.34)';
  ctx.lineWidth = 9;
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * (0.28 + i * 0.07));
    ctx.lineTo(width * (0.45 - i * 0.06), height * (0.64 + i * 0.015));
    ctx.stroke();
  }

  ctx.fillStyle = 'rgba(255, 206, 84, 0.82)';
  ctx.beginPath();
  ctx.arc(width * 0.78, height * 0.2, 72, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDramaMotif(ctx, width, height) {
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  fillRoundRect(ctx, width * 0.16, height * 0.16, width * 0.68, height * 0.42, 8);
  ctx.clearRect(width * 0.2, height * 0.2, width * 0.25, height * 0.14);
  ctx.clearRect(width * 0.55, height * 0.2, width * 0.25, height * 0.14);
  ctx.clearRect(width * 0.2, height * 0.4, width * 0.25, height * 0.14);
  ctx.clearRect(width * 0.55, height * 0.4, width * 0.25, height * 0.14);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.33)';
  ctx.lineWidth = 3;
  for (let x = 70; x < width; x += 70) {
    ctx.beginPath();
    ctx.moveTo(x, 70);
    ctx.lineTo(x - 36, 570);
    ctx.stroke();
  }
  ctx.restore();
}

function drawComedyMotif(ctx, width, height, random) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.34, 150, 0.08 * Math.PI, 0.92 * Math.PI);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  for (let i = 0; i < 22; i += 1) {
    ctx.beginPath();
    ctx.arc(55 + random() * (width - 110), 80 + random() * 470, 10 + random() * 22, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawSciFiMotif(ctx, width, height) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.44)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.ellipse(width * 0.55, height * 0.32, 180, 52, -0.25, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.beginPath();
  ctx.arc(width * 0.55, height * 0.32, 116, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.beginPath();
  ctx.arc(width * 0.48, height * 0.26, 26, 0, Math.PI * 2);
  ctx.arc(width * 0.62, height * 0.38, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBackdropScene(ctx, movie, width, height, random) {
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  for (let i = 0; i < 7; i += 1) {
    ctx.beginPath();
    ctx.arc(width * (0.2 + random() * 0.75), height * (0.1 + random() * 0.55), 90 + random() * 210, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'rgba(4, 8, 15, 0.52)';
  ctx.beginPath();
  ctx.moveTo(0, height * 0.78);
  for (let x = 0; x <= width; x += 90) {
    ctx.lineTo(x, height * (0.55 + random() * 0.2));
    ctx.lineTo(x + 45, height * (0.68 + random() * 0.18));
  }
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
  for (let x = 860; x < width - 80; x += 76) {
    const buildingHeight = 140 + random() * 240;
    fillRoundRect(ctx, x, height - buildingHeight - 70, 44 + random() * 44, buildingHeight, 6);
  }

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.moveTo(width * 0.08, height * 0.9);
  ctx.bezierCurveTo(width * 0.32, height * 0.56, width * 0.58, height * 0.76, width * 0.92, height * 0.28);
  ctx.stroke();
  ctx.restore();

  if (movie.genres.includes('Sci-Fi')) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.ellipse(width * 0.72, height * 0.24, 210, 56, -0.22, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function fillRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

function fitCanvasTitle(ctx, text, maxWidth, startSize, minSize) {
  for (let size = startSize; size >= minSize; size -= 2) {
    ctx.font = `900 ${size}px Arial, sans-serif`;
    const lines = wrapCanvasText(ctx, text, maxWidth);
    if (lines.length <= 3) return { size, lines };
  }

  ctx.font = `900 ${minSize}px Arial, sans-serif`;
  return { size: minSize, lines: wrapCanvasText(ctx, text, maxWidth).slice(0, 3) };
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';

  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function hashText(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return function random() {
    value = Math.imul(1664525, value) + 1013904223;
    return (value >>> 0) / 4294967296;
  };
}

/* ---------- Small formatting helpers ---------- */
function starsText(rating) {
  const full = Math.max(0, Math.min(5, Number(rating) || 0));
  return [1, 2, 3, 4, 5].map((value) => (value <= full ? '&#9733;' : '&#9734;')).join('');
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entities[character];
  });
}

function ensureToast() {
  let toast = document.querySelector('[data-toast]');
  if (toast) return toast;

  toast = document.createElement('div');
  toast.className = 'toast';
  toast.dataset.toast = '';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);
  return toast;
}

function showToast(message) {
  const toast = ensureToast();
  toast.textContent = message;
  toast.classList.add('is-visible');

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2200);
}
