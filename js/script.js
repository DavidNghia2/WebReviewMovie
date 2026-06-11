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

const MOVIE_PLOTS = {
  'oppenheimer': `The film begins with J. Robert Oppenheimer already living inside the consequences of his own brilliance. As a young physicist, he studies in Europe, absorbs the new language of quantum theory and returns to the United States with a mind that seems several steps ahead of the institutions around him. He is charismatic, restless and politically curious, drawn to left-wing circles during the 1930s while also trying to build an American school of theoretical physics. That early life matters because the story does not present him as a simple genius waiting to be discovered. It shows a man made of contradictions: elegant and insecure, idealistic and vain, intellectually fearless and emotionally evasive.

When the Second World War reshapes the scientific world, Oppenheimer is recruited by General Leslie Groves to lead the Manhattan Project. The decision surprises many people because Oppenheimer has no Nobel Prize, no military background and a paper trail of radical associations. Groves chooses him because he understands that the project needs more than a technician. It needs someone who can gather brilliant, difficult minds and hold them together under pressure. Oppenheimer proposes Los Alamos, a secret desert laboratory where scientists, soldiers and families build a temporary city around an almost unthinkable mission: create an atomic bomb before Nazi Germany can.

At Los Alamos, the story becomes a race between theory and dread. Oppenheimer manages egos, deadlines, secrecy and ethical doubts while the weapon slowly moves from blackboard possibility to engineered reality. Scientists argue over whether the bomb is necessary, whether Germany is still the real threat and whether the United States will use the result responsibly. Oppenheimer keeps the work moving because he believes the war has made hesitation dangerous. Even when the project learns that Germany is no longer in the atomic race, momentum continues. The bomb has become a political object as much as a scientific one, and the people who built it are no longer fully in control of its purpose.

The Trinity test becomes the turning point. In the desert, before dawn, the team waits to see whether their calculations will ignite a new era or fail in front of the army that trusted them. The explosion succeeds with terrifying beauty. Oppenheimer is celebrated, but the triumph is poisoned almost immediately by the knowledge of what success means. Hiroshima and Nagasaki are bombed. The war ends, but the film refuses to treat that ending as moral closure. Oppenheimer becomes famous as the father of the atomic bomb, yet his public face cannot hide the shock of seeing theory converted into mass death. He has helped stop one catastrophe while opening the door to another.

After the war, Oppenheimer tries to influence nuclear policy. He opposes a reckless arms race and resists the development of the hydrogen bomb, arguing that endless escalation will make humanity less safe. This makes him vulnerable. His earlier political associations, his complicated personal life and his change of conscience become weapons used against him. Lewis Strauss, a powerful figure who feels humiliated by Oppenheimer and threatened by his influence, helps create the conditions for a security hearing designed less to find truth than to destroy reputation.

The hearing strips Oppenheimer of his clearance and turns his private contradictions into public evidence. Friends, colleagues and government officials are forced to choose how much loyalty they can afford. Some defend him, some retreat and Edward Teller's testimony wounds him deeply. The process is framed as a judgment on his trustworthiness, but emotionally it feels like the state punishing a scientist for developing a conscience after serving its needs. Oppenheimer does not emerge innocent in a simple sense; the film is too interested in ambiguity for that. He emerges as a man who wanted to shape history and then discovered that history could use him, discard him and keep moving.

The ending returns to a private conversation between Oppenheimer and Einstein. Earlier, Strauss misread their exchange as a personal slight, but the real subject was far larger. Oppenheimer fears that the chain reaction they truly started was not physical ignition of the atmosphere, but political ignition of a nuclear world. The final images suggest missiles, fire and global consequence. The full story closes on the terrible irony of a man who changed the world by solving a problem and then spent the rest of his life understanding that some solutions become permanent dangers.`,
  'dune-part-two': `The story begins in the aftermath of House Atreides' destruction. Paul Atreides and his mother Jessica have survived the Harkonnen assault and entered the deep desert with the Fremen, the people of Arrakis who have resisted imperial exploitation for generations. Paul is not immediately accepted as a leader. He must learn the desert's rules, ride with people who distrust off-world nobles and prove that he is not only the son of a fallen duke hiding behind prophecy. Chani becomes his closest bond, teaching him Fremen ways while also challenging the religious myths that others project onto him.

Jessica understands those myths differently. As a Bene Gesserit, she recognizes that legends planted long ago by her order have prepared some Fremen to see Paul and herself as figures of prophecy. To protect her son and strengthen their position, she drinks the Water of Life and becomes a Reverend Mother, surviving a ritual that also awakens the consciousness of her unborn daughter. From that point, Jessica becomes more openly political and more unsettling. She encourages belief in Paul's messianic identity, especially among southern Fremen, even as Paul fears that accepting such power will unleash a holy war across the universe.

Meanwhile, the Harkonnens tighten their control over Arrakis. Glossu Rabban rules with brutality but cannot crush Fremen resistance. Baron Harkonnen and the Emperor need spice production restored, so Feyd-Rautha, a cruel and charismatic Harkonnen heir, is introduced as a sharper instrument. The imperial system remains built on denial. The Emperor helped destroy House Atreides because Duke Leto had become too popular, yet the consequences of that betrayal have only made Paul more dangerous. Every attempt to reduce Arrakis to a resource pushes its people closer to revolt.

Paul's life among the Fremen deepens his conflict. He loves Chani and finds a home with the fighters who rename him Muad'Dib, but every victory makes the prophecy more real to others. His raids damage Harkonnen spice operations and make him a symbol. Stilgar's faith grows stronger, transforming Paul's practical survival into evidence of destiny. Chani remains wary, not because she doubts Paul's courage, but because she sees how belief can erase choice. Their romance gives the film its emotional center: Paul is most human when he is with her, and most frightening when others insist he is more than human.

The turning point comes when the northern sietches are attacked and Paul can no longer remain between identities. He goes south despite knowing his visions point toward mass violence. By drinking the Water of Life, he unlocks ancestral memories and a clearer view of possible futures. The act changes him. He sees the path through politics, bloodline and religious force, and he chooses the route that will let him defeat his enemies. He also discovers that Baron Harkonnen is his maternal grandfather, making the conflict not just a war between houses but a family nightmare shaped by hidden breeding programs and imperial manipulation.

Paul challenges the Emperor directly. The Fremen launch a massive assault during a storm, using sandworms and desert knowledge to overwhelm imperial and Harkonnen forces. Paul kills the Baron and confronts the Emperor over his betrayal of House Atreides. To secure power, he offers to marry Princess Irulan, turning revenge into a political transfer of legitimacy. Chani understands what this means immediately. Paul's choice may save the Fremen from one oppressor, but it also places their revolution inside the structure of empire.

The duel with Feyd-Rautha is the final personal test. Feyd is deadly, disciplined and cruel, a dark mirror of noble inheritance without conscience. Paul defeats him in single combat and forces the Emperor to submit. Yet victory does not bring peace. The Great Houses refuse Paul's rise, and Paul orders the Fremen to take them on, beginning the war he once feared. Chani leaves rather than accept a future where love is sacrificed to prophecy and power. The ending is intentionally uneasy: Paul has avenged his father, liberated Arrakis from one regime and become the figure millions wanted. But he has also stepped into the role that may turn freedom into conquest.`,
  'top-gun-maverick': `Pete "Maverick" Mitchell begins the story as a legendary pilot who has avoided promotion because promotion would take him out of the cockpit. He is still testing aircraft, still breaking rules and still proving that instinct can survive inside institutions built on caution. When a hypersonic test program is about to be shut down, Maverick pushes the plane beyond the required speed and destroys it, saving the project only in spirit. Instead of being permanently grounded, he is sent back to Top Gun by Admiral Iceman, his old rival and loyal friend, for a mission that requires exactly the kind of pilot the Navy no longer knows what to do with.

The mission is almost impossible: destroy a heavily defended uranium enrichment facility hidden in mountainous terrain. The attack requires pilots to fly low, fast and precisely, survive extreme G-forces and escape enemy fighters and missiles afterward. Maverick is not asked to fly at first. He is asked to train a new generation of elite pilots, many of whom admire his reputation but doubt his relevance. Among them is Bradley "Rooster" Bradshaw, the son of Maverick's late wingman Goose. Rooster carries grief and resentment because Maverick once blocked his naval academy papers, delaying his career. Maverick did it because Rooster's mother begged him to protect her son, but Rooster experiences it as betrayal.

Training turns into a battle over risk, trust and leadership. The younger pilots are talented, but many treat the mission like a technical problem rather than a human one. Hangman is brilliant but arrogant. Phoenix, Bob, Payback and Fanboy have skill but must learn to operate under terrifying pressure. Rooster flies cautiously, haunted by his father's death and by his anger toward Maverick. Maverick pushes them hard because he knows the mission plan will kill them if they simply follow official expectations. He also struggles with his own fear: not fear of dying, but fear of failing Goose's son again.

Outside the base, Maverick reconnects with Penny Benjamin, a bar owner and former love who understands both his charm and his evasiveness. Their relationship gives the film a quieter emotional rhythm. Penny is not interested in chasing the boyish pilot forever; she expects honesty from a man who has spent decades outrunning consequences. Maverick's visits with Iceman also deepen the stakes. Iceman, now ill, reminds Maverick that the pilots need him and that Rooster needs him. After Iceman dies, Maverick loses his main institutional protector, and the Navy removes him from the mission.

Maverick responds the only way he knows how: he steals a jet and flies the training course at the speed and precision required, proving the mission can be done. The demonstration forces command to reinstate him, not as instructor but as team leader. He selects the pilots, including Rooster, and accepts that leadership means taking responsibility in the air. During the mission, the team reaches the target, hits it and begins the escape, but Maverick sacrifices his own safety to protect Rooster from a missile. Believing Maverick dead, Rooster turns back and saves him, repeating the loyalty that defined Goose but making it his own choice.

Stranded behind enemy lines, Maverick and Rooster steal an old F-14 and fight their way out. The sequence turns nostalgia into character resolution: the plane belongs to Maverick's past, but the survival depends on him and Rooster finally trusting each other in the present. Hangman arrives at the last moment to save them, completing his own smaller arc from showboat to teammate. Back home, Rooster and Maverick repair the old P-51 together, a wordless sign that grief has shifted from accusation to shared memory.

The ending is not about Maverick becoming a different person. He is still a pilot, still most alive in the sky. But he has stopped using flight only as escape. By leading the mission, saving Rooster and allowing Rooster to save him, he finally faces the wound that shaped his life after Goose's death. The story closes as a legacy film that understands legacy is not just remembering the past. It is deciding which parts of the past deserve to keep flying.`,
  'inception': `Dom Cobb is introduced as a thief who steals secrets from dreams. In this world, dream-sharing technology allows trained teams to enter a subject's subconscious, build artificial spaces and extract information while the mind is vulnerable. Cobb is one of the best, but he is also damaged. His dead wife Mal appears inside his missions as a violent projection, sabotaging jobs and revealing that Cobb's own subconscious is no longer safe. He cannot return to the United States because he is accused of murdering Mal, so he lives as a fugitive separated from his children.

After a failed extraction against businessman Saito, Cobb receives an offer that seems impossible to refuse. Saito wants him to perform inception, the planting of an idea rather than the stealing of one. The target is Robert Fischer, heir to a corporate empire that threatens Saito's interests. Saito wants Fischer to break up his father's company voluntarily. Cobb says inception is nearly impossible, but he knows it can be done because he once did it to Mal. That past mistake becomes the hidden wound under the entire mission.

Cobb gathers a team: Arthur, the organized point man; Ariadne, a young architect who designs dream environments; Eames, a forger who can impersonate figures in the dream; Yusuf, a chemist who creates a powerful sedative; and Saito, who insists on joining to verify success. Ariadne quickly realizes Cobb is unstable. She discovers that he keeps memories of Mal locked in dream levels and visits them out of guilt. Cobb explains that he and Mal once lived for decades in limbo, a raw dream space where they built a life together. To convince Mal to wake up, Cobb planted the idea that her world was not real. It worked, but the idea followed her into waking life, leading her to suicide and framing Cobb so he would join her.

The plan for Fischer is built around emotional reconciliation. The team will enter layered dreams during a long flight, making Fischer believe that his dying father wanted him to become his own man rather than live under corporate expectation. Each layer has a purpose: a rainy city kidnapping, a hotel manipulation and a snowy fortress that represents Fischer's guarded inner life. But the mission goes wrong quickly. Fischer's subconscious has been trained to defend itself, sending armed projections after them. Worse, the sedative is so strong that death inside the dream will send them to limbo rather than waking them up.

As the layers deepen, time stretches. Yusuf drives a van through a chaotic chase in the first level. Arthur fights in a rotating hotel corridor as gravity changes because of the van's movement. Eames leads the assault on the fortress. Cobb tries to keep Mal contained, but she appears at crucial moments, threatening the mission and forcing Ariadne to confront the truth he hides. Saito is wounded and slipping toward death, which means Cobb may have to descend into limbo to retrieve him.

The emotional climax comes when Fischer reaches the safe in the fortress and finds the staged message from his father. The planted idea works because it is not delivered as corporate logic; it is felt as personal release. Fischer believes his father wanted him to build something for himself. At the same time, Cobb confronts Mal in limbo and finally admits that the projection is not his wife. She is his guilt, his memory and his punishment, but she cannot replace the real person he lost. Letting her go allows him to finish the mission and seek Saito.

The team wakes on the plane, and Saito uses his influence to clear Cobb's legal charges. Cobb returns home and sees his children. He spins his totem, a top that supposedly reveals whether he is dreaming, but he walks away before watching it fall. The camera stays with the top as it wobbles, cutting before certainty arrives. The ending is not merely a puzzle about reality. It shows that Cobb's deepest prison was not the dream world but his inability to release guilt. Whether the top falls or not, he has chosen the life in front of him over the maze behind him.`,
  'interstellar': `The story opens on an Earth that is slowly becoming uninhabitable. Crops are failing, dust storms cover homes and society has narrowed its imagination to survival. Cooper, a former NASA pilot turned farmer, raises his children Tom and Murph in a world that denies its own lost ambitions. Murph believes a ghost in her room is sending messages through gravity, knocking books from shelves and leaving patterns in dust. Cooper eventually recognizes coordinates in the pattern, leading him and Murph to a hidden NASA facility. There, Professor Brand reveals that humanity's future depends on a wormhole near Saturn, placed there by unknown beings, leading to distant worlds that may support life.

Cooper is asked to pilot the Endurance on a mission to investigate planets previously scouted by astronauts. He leaves Murph behind after a painful argument, promising to return though neither of them knows whether time will make that promise impossible. The mission has two hopes. Plan A is to solve a gravity equation that can lift massive human colonies off Earth. Plan B is to use embryos to start a new human population elsewhere if Earth cannot be saved. Cooper believes Plan A is real because he cannot accept abandoning his children.

The crew, including Brand's daughter Amelia, Romilly and Doyle, travels through the wormhole and reaches a system orbiting the black hole Gargantua. Their first stop is Miller's planet, where time dilation is extreme: every hour on the surface equals years outside. The planet appears promising but is covered by shallow water and enormous waves. Doyle dies, the data proves useless and the delay costs the crew twenty-three Earth years. When Cooper returns to the ship and watches decades of messages from his children, the cosmic scale becomes brutally personal. Tom is grown, bitter and resigned. Murph has become a scientist working with Professor Brand, still wounded by her father's departure.

The mission worsens when Professor Brand dies and Murph learns he solved the equation years earlier but hid the truth that it could not work without data from inside a black hole. She feels betrayed, realizing Plan A may have been a lie to motivate the mission. In space, the crew must choose between two remaining planets: Edmunds, whom Amelia loves and whose data looks promising, and Mann, whose signal is still active. Cooper chooses Mann's planet because the evidence seems stronger. The choice reveals another human failure. Dr. Mann, celebrated as the best of them, falsified his data because isolation broke him and he wanted rescue.

Mann's betrayal nearly destroys the mission. He tries to kill Cooper, steals a lander and fails to dock properly with the Endurance, causing an explosion. Cooper and Amelia survive through a difficult docking maneuver, but fuel and options are almost gone. To give Amelia a chance to reach Edmunds' planet, Cooper and the robot TARS detach into Gargantua, sacrificing themselves. Instead of dying, Cooper falls into a tesseract, a higher-dimensional space where Murph's childhood bedroom appears across time.

Cooper realizes that the mysterious beings who created the wormhole are future humans, and that he himself was Murph's ghost. Gravity can cross time, so he sends messages through the books and the watch he gave her. With TARS's quantum data from inside the black hole, Cooper transmits the missing information Murph needs. Adult Murph understands the signal, solves the equation and saves humanity by making large-scale evacuation possible.

Cooper wakes near Saturn decades later, physically not much older but now younger than his dying daughter. He reunites with Murph, who has lived a full life and helped build humanity's new home. She tells him not to watch her die and urges him to find Amelia, who has reached Edmunds' planet and is preparing a future colony. The ending brings the story back to love, not as a vague miracle but as the emotional force that kept Cooper and Murph searching across impossible distances. Humanity survives because science, sacrifice and attachment finally align.`,
  'the-dark-knight': `Gotham is changing when the story begins. Batman, Lieutenant Gordon and district attorney Harvey Dent have put real pressure on organized crime, and Dent's public heroism gives the city something Batman cannot: a lawful symbol of hope. Bruce Wayne sees in Dent the possibility of retirement. If Gotham can believe in a clean district attorney, perhaps it no longer needs a masked vigilante. But the Joker enters the criminal underworld with a different goal. He is not interested in territory or wealth in the usual sense. He wants to prove that order is a performance and that fear can make anyone abandon principle.

The mob initially dismisses the Joker, but he understands their weakness. Their money is threatened, their leaders are exposed and Batman has made them desperate. The Joker offers to kill Batman, then begins a campaign of escalation designed to force Gotham into panic. He murders officials, stages public threats and turns ordinary choices into moral traps. Batman tries to stop him through force and surveillance, but every move reveals the limits of control. The Joker cannot be intimidated because he does not value self-preservation in the same way his enemies do.

Harvey Dent becomes the center of Gotham's hope. He is brave, charming and willing to stand in public where Batman hides in shadows. He also loves Rachel Dawes, who once loved Bruce and now represents the life Bruce might have had. Bruce believes Dent can be the hero Gotham needs, but the film carefully shows Dent's anger and willingness to bend rules. The Joker sees that Dent's purity is not guaranteed; it is a pressure point waiting to be exploited.

The Joker's most devastating move is personal. He arranges for Rachel and Dent to be held in separate locations rigged to explode, then gives Batman reversed addresses. Batman races to save Rachel but finds Dent instead. Rachel dies, and Dent survives with half his face burned. The loss breaks the triangle between Bruce, Rachel and Harvey. Bruce loses the future he imagined, and Harvey loses the moral center that kept his anger from taking over. The Joker visits Dent in the hospital and reframes chaos as fairness, nudging him toward revenge through the flip of a scarred coin.

Batman captures the Joker, but capture does not mean victory. The Joker has already turned Dent into Two-Face, and he creates one final public experiment with two ferries, each given the power to destroy the other. The passengers refuse to become murderers, proving that Gotham's citizens are not as easily corrupted as the Joker claims. Batman stops him, but the Joker laughs because his deeper target was never the ferries. It was Dent, the city's white knight.

Two-Face hunts the people he blames for Rachel's death, reducing justice to chance. He kidnaps Gordon's family, forcing Batman into the ruins of Dent's moral collapse. Batman saves Gordon's son, but Dent dies. The truth would destroy the reforms built around Dent's image and give the Joker a posthumous victory. Batman chooses to take responsibility for Dent's killings, becoming the villain Gotham can chase so Dent can remain its symbol.

The ending turns triumph into sacrifice. Batman has stopped the Joker's immediate plan, saved lives and preserved Gotham's fragile faith, but he must surrender the public meaning of his own heroism. Gordon destroys the Bat-Signal and orders a manhunt. Batman rides into darkness not because he has failed, but because he accepts a burden that lawful society cannot publicly honor. The full story is a crime tragedy about symbols: Dent shows how hope can be built, the Joker shows how it can be poisoned and Batman becomes the lie that protects a truth Gotham still needs.`,
  'parasite': `The Kim family begins in a cramped semi-basement apartment, folding pizza boxes for low pay and stealing Wi-Fi from neighbors. Ki-taek, Chung-sook, Ki-woo and Ki-jung are clever and affectionate, but poverty has trained them to treat opportunity as something that must be seized quickly before it disappears. When Ki-woo's friend Min offers him a chance to tutor Da-hye, the daughter of the wealthy Park family, he uses forged university documents to enter a world of clean lines, sunlight and casual abundance. The Parks live in a modern house designed by a famous architect, a home that seems to float above the city and its hardships.

Ki-woo quickly realizes the Parks are not stupid, but they are insulated. Their trust is shaped by class confidence, by the assumption that credentials and recommendations can turn strangers into safe employees. Ki-woo recommends Ki-jung as an art therapist for the young son Da-song, hiding that she is his sister. Ki-jung then helps remove the family's driver through a staged scandal, allowing Ki-taek to take the job. Finally, the Kims exploit the housekeeper Moon-gwang's peach allergy to make it appear she has tuberculosis, and Chung-sook replaces her. The infiltration is funny, tense and morally slippery because the Kims are both exploiting and being exploited by a system that gives them no clean path upward.

For a brief stretch, the Kims enjoy their victory. When the Parks leave for a camping trip, they occupy the house as if trying on another life. They drink, eat and fantasize about belonging there. The illusion collapses when Moon-gwang returns, begging to retrieve something from the basement. She reveals a hidden bunker beneath the house where her husband Geun-sae has been living for years to escape debt collectors. The house, once a symbol of effortless wealth, is suddenly revealed to contain another layer of desperation below even the Kims' position.

The confrontation between the Kims and Moon-gwang turns ugly. Both families are poor, both are trying to survive and both understand that the Parks' ignorance is their only protection. Instead of solidarity, scarcity produces violence. The Parks unexpectedly return after rain cancels their trip, forcing the Kims to hide under furniture while Chung-sook maintains the appearance of normal service. The Parks casually discuss Ki-taek's smell, a detail that wounds him because it marks poverty as something the wealthy can sense even when they do not understand it.

That night, the Kims escape through flooded streets to find their own apartment submerged by the storm. What was a mild inconvenience for the Parks is a disaster for them. They sleep in a gym with other displaced people, then return to work the next day for Da-song's birthday party. The party is bright and tasteful on the surface, but the hidden violence below the house has not been resolved. Geun-sae escapes the bunker, kills Ki-jung and attacks the gathering. Chung-sook kills him, and the scene becomes a nightmare collision of class performance and raw survival.

The final break occurs when Mr. Park recoils from Geun-sae's smell while reaching for car keys. Ki-taek sees in that gesture the same disgust previously aimed at him. In a moment of grief, rage and humiliation, he kills Mr. Park and disappears into the bunker. The surviving Kims are shattered. Ki-jung is dead, Ki-woo suffers a head injury and Ki-taek becomes the hidden man beneath the rich house, replacing Geun-sae in the architecture of inequality.

The ending follows Ki-woo as he discovers messages from his father through the house lights. He imagines earning enough money to buy the house and free Ki-taek. The fantasy is presented with warmth, then quietly withdrawn. Ki-woo remains in the semi-basement, and the dream of rescue feels almost impossible. The full story is not simply about one poor family deceiving one rich family. It is about a social structure arranged like the house itself: beautiful above, desperate below and built so that people on each level can smell each other but rarely truly see each other.`,
  'whiplash': `Andrew Neiman enters Shaffer Conservatory with a clear, consuming desire: he wants to be one of the great jazz drummers. He practices until his hands bleed and measures his life against legends whose brilliance seems inseparable from sacrifice. Terence Fletcher, the school's feared studio band conductor, notices him and invites him into the top ensemble. At first, this feels like validation. Andrew has been chosen by the person whose approval matters most. But Fletcher's teaching style is built on humiliation, intimidation and psychological control. He claims that comfort produces mediocrity and that true greatness requires being pushed past ordinary limits.

The early rehearsals reveal the trap. Fletcher can be charming in one moment and monstrous in the next. He throws objects, insults students, manipulates private information and turns tempo into a test of identity. Andrew is terrified, but he also believes Fletcher may be the gatekeeper to greatness. That belief makes the abuse effective. Andrew does not simply endure Fletcher because he is powerless; part of him accepts the premise that suffering might be the price of becoming exceptional. The film tightens around that dangerous idea.

Andrew's obsession begins to consume his life outside music. He breaks up with Nicole, a kind movie theater employee, because he assumes his ambition will eventually make him neglect and resent her. He distances himself from family members who do not understand the scale of his hunger. Practice becomes less a discipline than a compulsion. Fletcher pits drummers against one another, especially Andrew, Tanner and Connolly, forcing them to compete for the core part until exhaustion replaces musicianship. Andrew wins moments of recognition, but each victory only deepens his dependence on Fletcher's approval.

The pressure peaks before a major competition. Andrew is late after a bus problem, rents a car, retrieves his drumsticks and is then hit by another vehicle. Bloodied and injured, he crawls from the wreck and still tries to perform. When he cannot play properly, Fletcher dismisses him. Andrew attacks Fletcher onstage and is expelled. The incident appears to end his dream, but it also opens a different view of Fletcher's methods. Andrew learns that a former student, Sean Casey, died after suffering under Fletcher's pressure, though Fletcher publicly frames the death as a tragedy unrelated to his teaching.

Andrew eventually agrees to testify anonymously, leading to Fletcher's removal from Shaffer. Later, he encounters Fletcher performing in a jazz club. Fletcher is calm, reflective and persuasive. He explains his philosophy through the story of Charlie Parker, insisting that the worst words in the English language are "good job" because they stop people from reaching greatness. Andrew is drawn back in. Fletcher invites him to play at a prestigious festival with a professional band, offering what looks like a second chance.

The invitation is a trap. Onstage, Andrew realizes Fletcher knows he testified and has given him the wrong music, intending to humiliate him publicly. Andrew leaves the stage in shame, then returns. Instead of surrendering, he starts playing "Caravan," forcing the band to follow him. What begins as defiance becomes an extraordinary performance. Andrew drives the tempo, commands the music and launches into a drum solo that seizes control from Fletcher. Fletcher first resists, then begins conducting him, recognizing the brilliance he always claimed to be seeking.

The ending is thrilling and disturbing at the same time. Andrew achieves a moment of greatness, and Fletcher appears satisfied, almost proud. But the cost is unresolved. Andrew has become powerful by internalizing the same brutal logic that harmed him. His father's worried face in the audience reminds us that this victory may not be healthy, even if it is artistically stunning. The full story refuses easy comfort. It asks whether greatness built through cruelty can be separated from the cruelty that shaped it, and whether applause can hide the damage done on the way to the final beat.`,
  'the-matrix': `Thomas Anderson lives two lives. By day, he is a software employee trapped in a sterile corporate routine. By night, he is Neo, a hacker searching for Morpheus and for an answer to the feeling that reality itself is wrong. Agents, led by the cold and relentless Smith, monitor him because Morpheus believes Neo may be "the One," a figure prophesied to free humanity. Trinity contacts Neo and leads him toward a choice. Morpheus offers him the blue pill, which would return him to ordinary illusion, or the red pill, which will reveal the truth.

Neo chooses truth and wakes into horror. The world he knew is a simulated reality called the Matrix, created by machines that conquered humanity and now harvest human bodies for energy. Humans live in pods, their minds trapped in a late twentieth-century illusion. Morpheus and his crew free Neo's body and bring him aboard the Nebuchadnezzar, a hovercraft operating from the last human city, Zion. Neo's muscles are weak, his understanding shattered, but he begins training in programs that upload martial arts, weapons skills and knowledge directly into his mind.

The Matrix has rules, but because it is code, those rules can be bent. Morpheus teaches Neo that the real limit is not physical ability but belief. Neo struggles with the idea that he is special. The Oracle complicates matters by telling him he is not the One, or at least that he seems to be waiting for something. She also warns him that he will have to choose between his life and Morpheus's. The prophecy becomes less a guarantee than a psychological path Neo must walk.

Inside the crew, Cypher reveals the temptation of illusion. Exhausted by hardship, he makes a deal with Agent Smith to betray Morpheus in exchange for being reinserted into the Matrix with no memory of the truth. His betrayal kills several crew members and leads to Morpheus's capture. Smith interrogates Morpheus to obtain Zion's access codes, revealing his hatred for the Matrix and for humanity. He is not merely a program doing a job; he is disgusted by the world he polices and desperate to escape it.

Neo and Trinity choose to rescue Morpheus rather than unplug him. Their assault on the government building becomes Neo's first full expression of impossible capability. He moves faster, fights harder and begins to sense that the Matrix's laws are not absolute. After rescuing Morpheus, Neo is trapped by Smith in a subway station. Instead of running, he fights. He is not yet unbeatable, but the decision matters. He is beginning to act from belief rather than fear.

Near the end, Neo is shot and killed inside the Matrix while sentinels attack the Nebuchadnezzar in the real world. Trinity, believing the Oracle's statement that she would love the One, tells Neo he cannot be dead. Neo rises. Something changes. He sees the Matrix as code, stops bullets in midair and destroys Smith from within. The prophecy becomes real not because someone handed him certainty, but because love, choice and self-knowledge finally align.

The final sequence shows Neo calling the machines from inside the Matrix. He promises to show people a world without their control, then flies into the sky. The full story is an action film, a cyberpunk myth and a liberation narrative at once. Its central arc is awakening: from office worker to rebel, from body trapped in machinery to mind capable of rewriting rules. The Matrix is terrifying because comfort itself is the prison, and Neo's victory matters because freedom begins with the willingness to see the cage.`,
  'the-shawshank-redemption': `Andy Dufresne arrives at Shawshank State Penitentiary convicted of murdering his wife and her lover, a crime he insists he did not commit. He is quiet, educated and emotionally unreadable, which makes him an object of curiosity to Ellis "Red" Redding, the inmate known for getting things. Red has spent years inside and understands prison as a system that wears down hope until routine feels like safety. Andy enters that system without knowing how brutal it can be, but he carries an inner reserve that slowly changes the people around him.

The early years are harsh. Andy is targeted by violent inmates, beaten and isolated. He survives not through physical dominance but through patience, intelligence and a refusal to surrender his sense of self. He asks Red for a rock hammer, supposedly to shape stones for a hobby, and later for a poster. These requests seem small, almost quaint, but they are part of a long private plan. Publicly, Andy begins to gain value when he helps a guard with tax advice. His banking knowledge makes him useful to the prison staff, and eventually to Warden Norton.

Andy builds the prison library, helps inmates earn education credentials and gives Shawshank moments of unexpected dignity. One of the most memorable acts comes when he plays music over the loudspeakers, briefly filling the prison yard with beauty the men cannot possess but can still feel. Red, who has learned to distrust hope, is both drawn to and frightened by Andy's belief in it. Their friendship becomes the emotional center of the story. Andy does not preach freedom abstractly; he practices it in small acts that remind others they are still human.

Warden Norton uses Andy's financial skills to launder money through fake accounts while presenting himself as a moral authority. Shawshank's corruption is not chaotic; it is organized, hypocritical and protected by power. When Tommy, a younger inmate, arrives and reveals evidence that another man confessed to the murders for which Andy was convicted, Andy finally sees a legal path out. Norton cannot allow that. He has Tommy killed and throws Andy into solitary confinement, making clear that the system values Andy's usefulness more than his innocence.

After Tommy's murder, Andy appears broken, and Red fears he may take his own life. Instead, Andy completes the plan he has pursued for nearly twenty years. Behind the poster in his cell is a tunnel carved slowly with the rock hammer. On a stormy night, Andy escapes through the wall, crawls through a sewage pipe and emerges into rain as a free man. The next morning, the prison discovers not only his absence but the extent of his preparation. Andy has taken Norton's laundered money under the identity Randall Stevens and sent evidence of corruption to the press.

Norton commits suicide as authorities close in, and Hadley is arrested. Andy vanishes to Zihuatanejo, Mexico, a place he once described to Red as having no memory. Red remains in prison, facing parole hearings that have long felt meaningless. When he finally stops performing remorse and speaks honestly about the young man he used to be, he is released. Freedom, however, is frightening. Like Brooks before him, Red finds the outside world overwhelming after decades of institutional life.

Andy leaves Red a path: a field, a stone wall, a buried box with money and an invitation. Red violates parole and travels south. The ending reunites the friends on a beach, where Andy is repairing a boat. The moment is powerful because it has been earned through endurance rather than miracle. The full story is about wrongful imprisonment, but even more about the spiritual danger of accepting captivity as identity. Andy's escape is physical; Red's is emotional. Together, they make hope feel not naive, but disciplined, patient and necessary.`,
  'the-godfather': `The story opens at the wedding of Connie Corleone, where Don Vito Corleone receives requests in his office while his family celebrates outside. The contrast defines the film: warmth and violence, loyalty and coercion, family ritual and criminal power all occupying the same space. Vito is a mafia patriarch who sees himself as a protector and negotiator, a man of old codes. His sons represent different futures. Sonny is impulsive, Fredo is weak and Michael, a decorated war veteran, insists he is separate from the family business. Michael tells Kay Adams that his family is not him, and at that moment he believes it.

The central conflict begins when Sollozzo, backed by the Tattaglia family, asks Vito to invest in narcotics. Vito refuses because drugs would endanger his political connections and violate his sense of order. Sollozzo responds with an assassination attempt that leaves Vito badly wounded. With the Don incapacitated, the Corleone family enters crisis. Sonny takes command with aggression, Tom Hagen tries to manage negotiations and Michael starts moving closer to the center. When he visits his father in the hospital and finds the guards gone, he realizes the system meant to protect Vito has been compromised.

Michael's transformation begins as necessity. After police captain McCluskey breaks his jaw and openly sides with Sollozzo, Michael proposes killing both men during a restaurant meeting. The family doubts him because he has never been part of their violence, but Michael understands that the act will change the balance of power. He retrieves a hidden gun and kills Sollozzo and McCluskey, then flees to Sicily. The murder is both a tactical success and a spiritual threshold. Michael crosses into the family world and cannot return unchanged.

In Sicily, Michael experiences a temporary exile that resembles rebirth. He marries Apollonia and imagines a different life, but the violence of the Corleone name follows him. Apollonia is killed by a car bomb meant for him. Back in America, Sonny is murdered after being lured by his anger over Carlo's abuse of Connie. Vito recovers and makes peace with rival families, not because justice has been served, but because he wants Michael home alive. The cost of survival is compromise.

Michael returns and gradually assumes power. He reconnects with Kay, promising that the family will become legitimate, but his calmness has become more dangerous than Sonny's rage. Vito teaches him strategy and warns that whoever approaches him with a meeting involving Barzini is the traitor. After Vito dies in his garden, Michael moves with ruthless patience. Tessio reveals himself as the betrayer, and Michael prepares a coordinated purge during the baptism of Connie's child, where he stands as godfather renouncing Satan while his enemies are murdered across the city.

The climax exposes the full distance between Michael's words and actions. The heads of rival families are killed. Moe Greene is killed. Tessio is taken away. Carlo, who helped set up Sonny's murder, is strangled after Michael extracts a confession. Connie confronts Michael hysterically, telling Kay what he has done. Kay asks whether it is true, and Michael lies directly, allowing her one question and then closing the subject.

The final image seals the transformation. Kay watches as men enter Michael's office and kiss his hand, addressing him as Don Corleone. The door closes between husband and wife, between the public family and the hidden empire, between the Michael who claimed innocence and the man who has inherited everything. The full story is not simply about organized crime. It is about how power disguises itself as duty, how family love can become a moral trap and how a reluctant outsider becomes the most complete expression of the system he once rejected.`,
  'pulp-fiction': `The film begins in a diner with Pumpkin and Honey Bunny deciding to rob the customers, but the story immediately shifts into a larger mosaic of Los Angeles criminals whose lives intersect out of order. Vincent Vega and Jules Winnfield, two hitmen working for Marsellus Wallace, retrieve a mysterious briefcase from young men who have tried to cheat their boss. The scene establishes the film's world: violence is casual, conversation is elaborate and fate often arrives through accidents that characters do not fully understand.

Jules and Vincent execute the men, but one hidden shooter bursts from the bathroom and fires at them without landing a shot. Jules interprets their survival as divine intervention. Vincent dismisses it as luck. This disagreement becomes one of the film's deepest threads. For Vincent, events are random obstacles or pleasures. For Jules, the same events begin to suggest moral meaning. Their difference matters later, but the film delays resolution by moving to another story.

Vincent is asked to take Marsellus's wife Mia out while Marsellus is away. The evening at Jack Rabbit Slim's is playful and tense because Vincent knows the danger of crossing his boss, and Mia enjoys testing the boundary. They dance, talk and return home without betrayal, but Mia mistakes Vincent's heroin for cocaine and overdoses. Vincent rushes her to his dealer Lance, where a chaotic adrenaline shot saves her life. The episode turns flirtation into near disaster and leaves both characters bonded by a secret that must never be spoken.

The film then follows boxer Butch Coolidge, who has been paid by Marsellus to throw a fight. Butch betrays him, wins the bout and accidentally kills his opponent. Planning to flee with his girlfriend Fabienne, he realizes she forgot his father's watch, a family heirloom carried through war and suffering. Butch risks returning to his apartment to retrieve it and kills Vincent, who is waiting for him. The out-of-order structure makes Vincent's death strange because we have already spent time with him and will see him alive again in later scenes.

Butch's escape collides with Marsellus on the street. Their chase leads into a pawnshop where both men are captured by sadistic criminals. Butch escapes first, but instead of leaving Marsellus behind, he returns with a weapon and saves him. Marsellus grants him freedom on the condition that he leave Los Angeles and never speak of what happened. The sequence turns an enemy relationship into a grim code of honor. Butch survives not because he is pure, but because he makes one decisive moral choice in a grotesque situation.

The final movement returns to Jules and Vincent after the apartment shooting. Vincent accidentally kills Marvin in the car, forcing the pair to seek help from Jimmie and then the Wolf, who efficiently cleans the mess. The absurd cleanup brings the hitmen down from mythic cool to practical panic. Afterward, they stop at the diner from the opening scene. Pumpkin and Honey Bunny begin their robbery, placing Jules inside the test created by his earlier "miracle."

Jules chooses not to kill them. He recites his familiar biblical speech but gives it new meaning, admitting he is trying to become the shepherd rather than the tyranny. He lets the robbers go with money and decides to leave the life. Vincent, still skeptical, remains on the path that will eventually lead to his death in Butch's apartment. The full story is a circle of crime, chance and interpretation. Its characters live in a violent world, but the film asks whether meaning can still appear there if someone notices the difference between surviving and changing.`,
  'forrest-gump': `Forrest Gump tells his life story from a bench in Savannah, speaking with strangers while waiting for a bus. He begins as a boy in Alabama with leg braces, a low measured IQ and a mother who refuses to let the world define him by limitations. His closest friend is Jenny, a girl from an abusive home who becomes the emotional constant of his life. Forrest does not understand cruelty in the way others do, but he recognizes kindness, fear and loyalty. When bullies chase him, he runs out of his braces and discovers a gift that carries him far beyond the expectations placed on him.

Forrest's speed leads to college football, where he becomes part of public spectacle almost by accident. The film moves him through decades of American history, placing him near famous events and figures without making him a mastermind of history. He meets presidents, becomes a soldier and enters the Vietnam War. There, he befriends Bubba, who dreams of starting a shrimp business, and serves under Lieutenant Dan, a career officer whose identity depends on dying honorably in battle. When their unit is ambushed, Forrest saves several men, including Dan, but Bubba dies, leaving Forrest with grief and a promise.

The war changes everyone differently. Forrest receives the Medal of Honor and becomes briefly involved in antiwar culture, where he sees Jenny again. Jenny's path is painful and unstable. She seeks escape through music, relationships, drugs and countercultural movements, but her childhood trauma follows her. Forrest loves her with simple devotion, yet he cannot save her from wounds he does not fully understand. The film's emotional tension often comes from the gap between Forrest's steadiness and Jenny's restless search for safety.

After the war, Forrest becomes a ping-pong champion, then keeps his promise to Bubba by buying a shrimp boat. Lieutenant Dan joins him, bitter after losing his legs and angry that Forrest saved him from the death he expected. A hurricane destroys the competing boats, making Forrest and Dan unexpectedly successful. Dan eventually finds a measure of peace, investing their earnings and thanking Forrest for saving his life. Forrest becomes wealthy, but wealth does not change his basic habits. He returns home, cares for his mother as she dies and continues waiting for Jenny.

Jenny comes back to Forrest for a time, and they share a tender domestic period. She leaves again after sleeping with him, unable to remain in the safety he offers. Heartbroken, Forrest begins running across the country for no clear reason. His run becomes a national symbol to others, but for Forrest it is a way of moving through grief. Eventually he stops, returns home and receives a letter from Jenny.

The final act reveals that Jenny has a son, Forrest Jr., and Forrest is his father. Forrest's immediate concern is whether the boy is like him, exposing the insecurity he rarely names. Jenny is ill, and she asks Forrest to marry her. They spend a brief, gentle time as a family before she dies. Forrest buries her under the tree where they played as children and speaks to her about their son, showing that his innocence has not protected him from loss but has shaped how he carries it.

The story ends with Forrest sending his son to school, echoing his own childhood. A feather drifts in the air, suggesting chance, destiny and the mystery of how a life moves. The full story is an American fable, sometimes sentimental and selective, but its core is intimate: a man dismissed as simple keeps meeting history with loyalty, patience and love, while the people around him struggle with wounds that intelligence alone cannot heal.`,
  'gladiator': `Maximus Decimus Meridius begins as Rome's greatest general, leading troops under Emperor Marcus Aurelius during a campaign in Germania. He is respected by soldiers because he shares danger with them and dreams not of power but of returning to his wife and son in Spain. Marcus Aurelius, near death, believes Rome has drifted from its ideals and asks Maximus to become protector of Rome, restore power to the Senate and prevent imperial corruption. Maximus does not want the role, but his honor makes refusal difficult.

Commodus, the emperor's son, expects inheritance and is devastated when Marcus tells him he will not rule. His grief turns instantly into murder. He suffocates his father and claims the throne before Maximus can act. Commodus asks Maximus for loyalty, but Maximus sees the truth and refuses. He is arrested, his family is condemned and he barely escapes execution. By the time he reaches home, his wife and son have been killed and the farm destroyed. The loss breaks his life into before and after.

Maximus is captured by slavers and sold in North Africa to Proximo, a former gladiator who trains men to fight for crowds. At first, Maximus wants only death, but his skill makes survival automatic. He becomes a gladiator, earning the name "Spaniard," and learns that the arena is another version of the battlefield: brutal, theatrical and political. Proximo tells him to win the crowd because the crowd can become power. Maximus slowly turns performance into a path back to Rome and toward justice.

Commodus, insecure and hungry for love, stages games in the Colosseum to win public affection. He imagines himself as a people's emperor, but his rule is built on fear, vanity and incestuous obsession with his sister Lucilla. Lucilla recognizes both his danger and Maximus's importance. She once loved Maximus, and now she sees him as a possible ally in restoring Rome. The Senate, especially Gracchus, also hopes to resist Commodus, but open opposition is dangerous.

Maximus's identity is revealed after a spectacular arena victory. Commodus descends to meet the victorious gladiator and orders him to remove his helmet. Maximus announces himself fully, naming his murdered family and promising vengeance. Commodus cannot kill him immediately because the crowd loves him. From that moment, the arena becomes a political stage where Maximus's honor exposes Commodus's emptiness. Each victory makes Maximus more dangerous because he represents a Rome people want to believe still exists.

A plan forms to free Maximus, reunite him with his army and overthrow Commodus. Lucilla, Gracchus and others risk everything, but Commodus discovers the conspiracy by threatening Lucilla's son. He arrests the conspirators and ensures Maximus cannot fight fairly. Before their final duel, Commodus stabs Maximus in secret, weakening him while preserving the public appearance of honorable combat.

In the Colosseum, Maximus fights through pain and kills Commodus. His victory is not triumphant in a simple way; he is dying. With his final authority, he orders the release of prisoners, the restoration of Senator Gracchus and the political wishes of Marcus Aurelius. Then he sees a vision of his family waiting in a golden field and dies. The film closes as Rome honors him, while Proximo's words about winning the crowd gain a deeper meaning. Maximus began as a soldier who wanted home, became a slave turned symbol and ended by giving Rome a chance to remember justice. The full story is revenge, but beneath revenge is grief, duty and the longing for a world where honor outlives empire.`,
  'mad-max-fury-road': `Max Rockatansky begins as a wanderer haunted by the people he failed to save. In the wasteland, survival has reduced him to instinct. He is captured by the War Boys of Immortan Joe, a tyrant who controls water, fuel and bodies from a fortress called the Citadel. Max is used as a living blood bag for Nux, a sick War Boy who believes dying for Joe will carry him to glory. The society around them is a grotesque religion of scarcity, where Joe hoards water and keeps women as property while convincing young men that sacrifice for him is sacred.

Imperator Furiosa drives a war rig out from the Citadel on what appears to be a fuel run, but she has secretly hidden Joe's five wives inside. These women have been enslaved for breeding, and Furiosa intends to take them to the Green Place, the matriarchal homeland from which she was stolen as a child. Joe discovers the escape and launches a massive pursuit across the desert, joined by allied war parties. Nux brings Max along as his blood supply, tying Max's survival to the chase.

The early action is relentless, but the story is simple and clear: Furiosa is moving toward freedom, Joe is trying to reclaim control and Max is trying not to die. After a storm and a violent battle, Max frees himself and reluctantly joins Furiosa and the wives. Trust does not come quickly. Max is animal-like, Furiosa is guarded and the wives are determined but inexperienced in open violence. Yet necessity builds alliance. They repair the rig, fight off attackers and keep moving through terrain where every resource matters.

Nux's arc complicates the enemy side. He begins as a true believer, desperate to die impressively in Joe's service. After repeated failure and kindness from Capable, one of the wives, he begins to see himself apart from the cult that shaped him. His shift is not sentimental; it is the awakening of someone who has never been valued except as disposable. By joining the escapees, he turns from worship of death toward an act of chosen protection.

Furiosa eventually finds the Vuvalini, the women from her childhood, but the Green Place is gone, poisoned into swamp. This revelation nearly destroys her. The destination that justified years of longing no longer exists. The group considers riding across the salt flats in search of something else, but Max, prompted by his own ghosts, proposes a harder truth: the best hope is not ahead but behind them. The Citadel has water, food and people waiting to be freed. Instead of running forever, they must turn back through Joe's army and seize the place they escaped.

The return chase becomes the climax. Furiosa is wounded, the rig is damaged and the group fights through vehicles, poles, bullets and bodies. The wives participate in their own rescue rather than functioning only as cargo. Nux sacrifices himself to block the canyon and stop the pursuers. Furiosa kills Joe by tearing away the mask and machinery that made him seem godlike. Max gives Furiosa his blood, reversing his earlier exploitation as a blood bag and choosing connection over isolation.

At the Citadel, the people see Joe's corpse and understand that the tyrant is dead. Furiosa and the wives are lifted upward as liberators. Max, having helped create a possibility of community, disappears into the crowd. He does not claim leadership or reward because his role is transitional: he helps others reach freedom even when he cannot stay inside it himself. The full story is one long chase, but its emotional structure is rich. It is about bodies reclaimed from ownership, belief systems broken by compassion and the radical decision to stop fleeing and take back the source of life.`,
  'john-wick': `John Wick begins in grief. His wife Helen has died from illness, leaving him emotionally emptied and alone in a quiet house that feels too large. Before her death, she arranged for a puppy named Daisy to be delivered to him, a final gift meant to give him something to love and a reason to move forward. John is not introduced as a killer at first, but as a widower trying to survive silence. That matters because the violence that follows is not caused by pride or greed. It begins when a fragile connection to his dead wife is destroyed.

At a gas station, Iosef Tarasov, the spoiled son of Russian crime boss Viggo Tarasov, notices John's car and tries to buy it. John refuses. Iosef later breaks into John's house with friends, beats him, steals the car and kills Daisy. The act is small in the criminal world's hierarchy, but enormous in John's emotional life. When Viggo learns whose car his son stole, fear replaces anger. John Wick is not just a retired assassin; he is the legendary figure once used to build Viggo's empire, the man people describe with awe because of the impossible tasks he completed.

John digs up the weapons and gold coins buried beneath his floor, reopening a life he had escaped for Helen. The criminal underworld has its own rules, currency and neutral ground, especially the Continental Hotel, where business cannot be conducted. John's return sends signals through that world. Viggo tries to protect Iosef by sending killers after John, but each attack only confirms that the old skills remain. The film's plot is direct: John hunts the men responsible, and Viggo tries to survive the consequences of his son's arrogance.

What makes the story more than simple revenge is the way grief and code intersect. John does not speak much because the action expresses what language cannot. Every fight is precise, disciplined and exhausting. He kills with terrifying efficiency, but the film does not pretend this heals him. It shows a man moving through a system he understands too well, using the identity he abandoned because the last piece of his new life was taken from him.

Viggo is both antagonist and witness. He knows John's power because he benefited from it. He attempts negotiation, intimidation and assassination, even placing a bounty on John's head. Marcus, an old associate and friend of John, appears to accept the contract but secretly protects him. Perkins, another assassin, violates Continental rules by attacking John inside the hotel, showing that even criminal codes become unstable when enough money and fear are involved.

John eventually reaches Iosef and kills him, but the story does not end there because revenge has widened the conflict. Viggo tortures and kills Marcus for helping John, then tries to flee. The final confrontation between John and Viggo strips away the armies and underworld glamour. It becomes two men fighting in the rain, one desperate to escape and one too wounded to stop. John kills Viggo but is badly injured.

The ending returns to the emotional beginning. John breaks into an animal clinic to treat himself and finds a dog scheduled to be put down. He takes the dog and walks away along the waterfront. This does not erase Daisy's death or Helen's absence, but it gestures toward survival. The full story is lean because John's motive is elemental: someone destroyed the last gift of love in his life. Yet the world around that motive is rich with ritual and consequence. John Wick is about revenge, but underneath it is a portrait of grief forced to speak in the only language its world will understand.`,
  'avengers-endgame': `The story begins after failure. Thanos has used the Infinity Stones to erase half of all life, and the surviving Avengers are scattered through grief, shock and guilt. Tony Stark and Nebula drift in space until Captain Marvel rescues them. On Earth, the team locates Thanos and hopes to reverse the snap, only to discover that he has destroyed the stones to prevent undoing his work. Thor kills him in rage, but the act changes nothing. Five years pass, and the world becomes a place of absences.

The time jump is crucial because it lets grief settle into different shapes. Natasha keeps coordinating what remains of the Avengers, unable to move on. Steve Rogers leads support groups and speaks about acceptance while clearly struggling with it himself. Thor has collapsed into depression and self-loathing in New Asgard. Clint Barton, having lost his family, becomes a violent vigilante. Tony builds a peaceful life with Pepper and their daughter Morgan, the one future he is terrified to risk. The team is no longer waiting for a rematch; they are living with defeat.

Scott Lang returns from the quantum realm after experiencing only hours while five years passed outside. His survival creates a possibility: time travel. The plan is not to change the past directly but to borrow the Infinity Stones from earlier moments, use them in the present and return them. Tony initially refuses because he has too much to lose, but he solves the problem and rejoins the team. The time heist becomes a journey through the franchise's own memory, revisiting New York, Asgard, Morag and Vormir.

Each mission carries emotional weight. Steve sees Peggy Carter and is reminded of the life he lost. Tony encounters his father Howard and receives a moment of closure he never had. Thor speaks with his mother Frigga, who recognizes his pain and tells him failure has not made him unworthy. On Vormir, Natasha and Clint learn that the Soul Stone requires a sacrifice. Both try to give their lives, but Natasha wins the terrible contest, dying so the others can bring everyone back. Her death grounds the adventure in real cost.

The team assembles the stones, and Bruce Banner uses them to restore the vanished. The victory is immediate but not safe. A past version of Thanos, alerted through Nebula's memories, travels to the present and attacks the Avengers compound. This Thanos has not learned weary certainty; he is younger, more openly brutal and decides that if the universe resists gratitude, he will destroy it and build another. The final battle gathers heroes from across the restored universe after Doctor Strange and other sorcerers open portals. The emotional force comes from return: characters lost to dust step back into the fight.

The battle turns on the gauntlet. Many heroes carry it, protect it and nearly remove it from the field, but Thanos remains overwhelming. Doctor Strange signals to Tony that this is the one winning future he saw. Tony takes the stones from Thanos and uses them himself, destroying Thanos and his army at the cost of his life. His death completes the arc that began with a selfish weapons manufacturer in a cave. He becomes the person willing to sacrifice his future so others can have one.

The ending is a series of farewells. Tony's funeral gathers the people his life touched. Thor joins the Guardians, choosing a path beyond the throne. Clint returns to his family with Natasha's absence still present. Steve returns the stones to their timelines and chooses to remain in the past with Peggy, later appearing as an old man to pass the shield to Sam. The full story is a superhero epic, but its real subject is consequence. It asks how heroes live after losing, what victory costs and whether endings can honor both sacrifice and renewal.`,
  'spider-man-across-the-spider-verse': `Miles Morales begins the story trying to balance two lives that refuse to fit together neatly. In Brooklyn, he is a teenager with loving parents, school expectations and a future being planned around him. As Spider-Man, he is already experienced but still hiding the truth from Rio and Jefferson. His loneliness is sharpened by the absence of the other Spider-people he met before, especially Gwen Stacy. In her universe, Gwen is dealing with her own rupture: her father, a police captain, believes Spider-Woman killed Peter Parker, not knowing Gwen's secret identity or the tragedy behind it.

Gwen is recruited by Miguel O'Hara and Jessica Drew into a multiverse Spider-Society after a Renaissance Vulture appears in her world. She leaves home before reconciling with her father, carrying guilt and relief at the same time. Meanwhile, Miles faces a strange new enemy, the Spot, a former scientist transformed during the collider incident from the previous film. At first, Spot seems awkward and almost ridiculous, but he is fueled by humiliation and by the belief that Miles created him. His portals grow more powerful as he learns to move across dimensions.

Miles reunites with Gwen when she secretly comes to his universe tracking Spot. Their connection is joyful but uneasy because Gwen has been told to avoid him. Miles follows her into the multiverse and sees worlds that expand the visual and emotional scale of the story. In Mumbattan, they meet Pavitr Prabhakar and try to stop Spot's damage. Miles saves Inspector Singh, the father of Pavitr's girlfriend, during a collapsing disaster. This act seems heroic, but Miguel later argues that Miles has disrupted a canon event, one of the recurring tragedies supposedly required in Spider-Man stories.

At Spider-Society headquarters, Miles meets countless Spider-people and learns Miguel's worldview. Miguel believes that each Spider-person's life contains fixed events, including the death of a close police captain, and that preventing them can destroy entire universes. He reveals that he once tried to replace a dead version of himself in another universe and watched that reality collapse. For Miguel, protecting the multiverse means accepting suffering as structural necessity. For Miles, that logic is unbearable, especially when he realizes his father is about to become captain, making him the next expected casualty.

The deeper revelation is that Miles himself is considered an anomaly. The spider that bit him came from another universe, Earth-42, which was left without its Spider-Man. The collider's effects also led to Peter Parker's death in Miles's own universe. Miguel frames Miles's existence as a mistake that caused damage from the start. This is the emotional core of the conflict. Miles is not merely being told he cannot save his father; he is being told his heroism is illegitimate.

Miles rejects the script. He escapes a massive chase through Spider-Society, using his creativity and invisibility against opponents who underestimate him. Gwen is sent home in disgrace and finally reveals her identity to her father, only to learn he has quit the police, complicating Miguel's supposedly fixed canon. Miles tries to return home using the Go Home Machine, but because it reads the spider's origin, it sends him to Earth-42 rather than his own universe.

On Earth-42, there is no Spider-Man. Miles's father is dead, his uncle Aaron is alive and this universe's Miles has become the Prowler. The film ends with Miles captured by alternate versions of himself and Aaron while Spot approaches his attack in Miles's home universe. Gwen gathers a rescue team including Peter B. Parker, Pavitr, Hobie, Margo, Peni, Spider-Ham and Spider-Man Noir. The full story closes on a cliffhanger, but its argument is clear: Miles refuses to accept that heroism must be defined by inherited tragedy. His fight is for his father, for his own legitimacy and for the right to write a different kind of Spider-Man story.`,
  'spider-man-into-the-spider-verse': `Miles Morales begins as a bright Brooklyn teenager caught between worlds. He loves art, music and his neighborhood, but his parents send him to an elite school where he feels out of place. His father Jefferson is a police officer who loves him but struggles to understand his creative side. His uncle Aaron offers easier warmth, taking Miles to paint graffiti in an abandoned subway tunnel. There, Miles is bitten by a radioactive spider from another dimension, giving him strange powers he cannot control.

Miles returns to the tunnel and discovers Spider-Man fighting Wilson Fisk's collider, a machine designed to access parallel universes. Fisk wants to retrieve alternate versions of his dead wife and son, but the collider threatens reality itself. Spider-Man recognizes Miles's new powers and promises to teach him, then is killed by Fisk. Miles escapes with a device that can destroy the collider, but he is terrified and unprepared. The public mourns Spider-Man, and Miles feels the weight of replacing a hero everyone loved.

The collider has pulled other Spider-people into Miles's universe. Peter B. Parker, an older and more exhausted Spider-Man from another reality, becomes Miles's reluctant mentor. Gwen Stacy, already posing as a student at Miles's school, reveals herself as Spider-Woman. They are later joined by Spider-Man Noir, Peni Parker and Spider-Ham. Each has a different style and history, but all understand loss, responsibility and the loneliness of the mask. Miles wants to help, yet his powers remain unreliable because fear keeps overwhelming him.

Fisk's forces, including Doc Ock, the Prowler, Tombstone and Scorpion, pursue the group. The biggest emotional shock comes when Miles discovers that the Prowler is Uncle Aaron. Aaron realizes Miles is the new Spider-Man and refuses to kill him, leading Fisk to shoot him. Aaron dies in Miles's arms, and Miles's grief is intensified by the fact that his father, who hated Spider-Man and was hunting the Prowler, does not know the truth. Miles is now connected to both sides of the conflict in a way he cannot explain.

The other Spider-people decide Miles is not ready and web him to a chair for his own safety while they plan to destroy the collider and return home. Jefferson comes to Miles's door and, not knowing Miles is inside, speaks with vulnerability and love. His words help Miles understand that he does not have to become Peter Parker or anyone else. He has to take the leap as himself. Miles controls his powers, escapes and creates his own suit, combining the symbol of Spider-Man with his own visual identity.

At the collider, Miles joins the battle and proves himself. He helps send the other Spider-people back to their universes, making peace with Gwen and earning Peter B.'s respect. Fisk remains, driven by grief that has become selfish obsession. Miles defeats him not by being stronger in a traditional sense, but by mastering his unique abilities and trusting his timing. He destroys the collider and saves Brooklyn.

The ending shows Miles settling into his role. He repairs his relationship with his father, honors Aaron and embraces Spider-Man as a mantle that can belong to more than one kind of person. The other Spider-people return home changed by meeting him, especially Peter B., who is inspired to repair his own life. The full story is an origin tale, but its power comes from the idea that heroism is not imitation. Miles becomes Spider-Man when he stops asking for permission from the past and jumps with his own rhythm.`,
  'blade-runner-2049': `K is a replicant working as a blade runner for the LAPD, hunting older replicant models who are considered illegal. He begins the story by retiring Sapper Morton, a protein farmer and former combat replicant. At Sapper's farm, K discovers a buried box containing the remains of a female replicant who died during childbirth. The discovery is explosive because replicants are manufactured, not born. A replicant child would challenge the boundary between human and artificial life and could destabilize the social order.

K's superior, Lieutenant Joshi, orders him to erase all evidence and find the child, believing the truth could start a war. Niander Wallace, the industrialist who now manufactures replicants, also wants the child because reproduction would allow him to expand his empire beyond the limits of production. Wallace's assistant Luv pursues the same trail with elegant brutality. K is therefore caught between police containment, corporate ambition and a buried miracle that everyone wants to control.

K's own life is lonely and controlled. He lives with Joi, an artificial companion who appears to love him but is also a product designed to satisfy him. Their relationship is tender and troubling because the film never reduces it to one meaning. Joi gives K emotional comfort, but her programming raises questions about whether comfort is the same as freedom. When the investigation leads K to memories of a wooden horse and an orphanage, he begins to suspect that his own implanted childhood memory may be real.

The possibility transforms him. Replicants are given artificial memories to stabilize them; if K has a real memory, he may be the child. He visits Dr. Ana Stelline, a memory designer who lives in isolation because of an immune condition. She confirms that the memory is authentic, though she does not say whose it is. K fails his baseline test afterward, revealing emotional disruption. For the first time, he imagines himself not as a disposable product but as someone born, hidden and meaningful by origin.

K's search leads him to Las Vegas, where he finds Rick Deckard living in the ruins of a casino. Deckard reveals that he and Rachael had a child and that he disappeared to protect that child from discovery. K's belief in his own identity grows, but Luv attacks, captures Deckard and leaves K badly wounded. A replicant resistance rescues K and reveals the truth: the child was female, not male. K is not the miracle child. The real child is Ana Stelline, the memory designer who placed her own memory in him.

This revelation breaks the fantasy that he is special by birth, but it opens a more profound possibility. The resistance wants K to kill Deckard to prevent Wallace from using him to find Ana. Instead, K chooses his own path. He stages Deckard's death by defeating Luv and crashing Wallace's transport into the sea. He saves Deckard and brings him to Ana, giving father and daughter a chance to meet.

K lies down on the steps outside as snow falls, mortally wounded. Earlier, Joi told him he was special and called him Joe, but a giant advertisement later used the same name, making him question whether any of that intimacy was real. In the end, his meaning does not depend on being the chosen child or being loved by a program. He makes a free moral choice despite being designed for obedience. The full story is a mystery about birth, memory and identity, but its final answer is ethical rather than biological: personhood is revealed through the capacity to choose meaning for someone other than oneself.`,
  'la-la-land': `Mia is an aspiring actress working as a barista on a studio lot, surrounded by the dream of Hollywood but repeatedly rejected in auditions. Sebastian is a jazz pianist who loves traditional jazz with almost religious devotion but cannot keep steady work because he refuses to compromise. They first encounter each other in traffic, then again in a restaurant where Sebastian is fired for playing his own music instead of the assigned holiday set. Their early meetings are prickly, built on attraction disguised as irritation.

Los Angeles becomes both setting and dream machine. Mia and Sebastian fall in love through parties, walks, music and shared ambition. Their romance is not separate from their artistic hopes; each sees the other's dream clearly. Sebastian encourages Mia to write and perform her own one-woman play rather than wait for permission from casting rooms. Mia encourages Sebastian to imagine opening a jazz club where the music he loves can live. Their love is built on mutual recognition: each believes the other is more than the world currently sees.

The tension begins when practical life pressures Sebastian to join Keith's band. The music is successful but commercial in a way Sebastian once mocked. He tells himself the money will help him build the club, but touring pulls him away from Mia and from the version of himself she fell in love with. Mia, meanwhile, pours herself into her play. The show is poorly attended and emotionally devastating. Overhearing dismissive comments afterward, she loses faith and returns home, convinced she has been foolish to believe she could make it.

Sebastian receives a call from a casting director who saw Mia's play and wants her to audition for a film in Paris. He drives to her hometown and pushes her to return, even though their relationship is strained. The audition asks Mia to tell a story, and she sings about her aunt who lived boldly and inspired her. This moment gathers the film's belief in dreamers: not that dreams always come true cleanly, but that the willingness to risk embarrassment and heartbreak is itself meaningful.

Mia gets the role, and she and Sebastian confront the reality that her career will take her away. They still love each other, but the timing no longer supports the relationship. They part with tenderness rather than betrayal, acknowledging that they will always love what they gave each other. Years pass. Mia becomes a successful actress, marries another man and has a child. Sebastian opens his jazz club, using the name Mia once suggested.

The final sequence occurs when Mia and her husband accidentally enter Sebastian's club. Mia sees him onstage, and he sees her in the audience. He plays their theme, and the film enters a fantasy of the life they might have shared: a version where the first meeting goes differently, where love and career align, where Paris, jazz and domestic happiness coexist. The fantasy is beautiful because it is impossible. It honors the emotional truth of their love without pretending it could survive every choice unchanged.

When the fantasy ends, Mia and Sebastian share a final look. They smile, not because there is no pain, but because each helped the other become who they hoped to be. The full story is a musical romance about ambition, compromise and timing. It refuses the idea that a relationship only matters if it lasts forever. Mia and Sebastian lose each other, but they do not lose the music, courage and self-belief their love awakened.`,
  'fight-club': `The unnamed narrator begins as an office worker consumed by insomnia, consumer habits and emotional numbness. His apartment is full of catalog furniture, but his life has no center. He finds relief by attending support groups for illnesses he does not have, crying among strangers because their suffering gives him permission to feel. That false comfort is disrupted by Marla Singer, another impostor whose presence mirrors his own dishonesty. Unable to cry when she is there, he splits the support groups with her like custody arrangements over borrowed pain.

On a business flight, he meets Tyler Durden, a soap salesman with charisma, contempt for consumer culture and a philosophy that sounds liberating because it attacks everything the narrator secretly hates about his life. After the narrator's apartment explodes, he calls Tyler and moves into his dilapidated house. Their first fight outside a bar becomes a revelation. Pain feels real. Violence cuts through numbness. Soon, other men join them, and Fight Club becomes an underground ritual where participants feel briefly freed from jobs, status and social expectations.

The club grows because it offers identity to men who feel invisible. But what begins as voluntary bruising evolves into something more authoritarian. Tyler creates rules, tests loyalty and expands the movement into Project Mayhem, a campaign of vandalism and anti-corporate sabotage. The narrator is both attracted and disturbed by the escalation. Tyler's confidence gives him purpose, but that purpose increasingly requires obedience rather than freedom.

Marla remains close to the truth without understanding it. She has a sexual relationship with Tyler and an emotionally confused relationship with the narrator, who treats her with cruelty and fascination. Her presence exposes the narrator's fragmentation. He is jealous of Tyler, dependent on him and unable to recognize that the triangle does not make sense. As Project Mayhem spreads, members surrender their names and individuality, repeating slogans about sacrifice. The narrator begins to see that the rebellion against dehumanization has become another machine.

The twist arrives when the narrator discovers Tyler is not a separate person. Tyler is his dissociated identity, the embodiment of desires he could not admit: aggression, sexual confidence, contempt for weakness and hunger for control. The apartment explosion, the creation of Fight Club and the relationship with Marla are all part of his own fractured life. This revelation reframes the story not as a friendship gone wrong, but as an internal civil war given social form.

The narrator tries to stop Project Mayhem's plan to destroy buildings containing credit records, hoping to erase debt and reset society. But because Tyler anticipated him, the organization treats the narrator's resistance as part of the plan. He goes to the police, only to find members everywhere. He attempts to disarm bombs and protect Marla, finally understanding that rejecting Tyler means taking responsibility rather than pretending Tyler made him do everything.

In the climax, the narrator shoots himself through the cheek, symbolically killing Tyler by damaging the body they share without dying. Tyler disappears. Marla is brought to him, and the buildings collapse outside the windows. The ending is both romantic and catastrophic, intimate and apocalyptic. The full story is a satire of consumer emptiness, masculine insecurity and ideological seduction. It understands why Tyler is appealing, then reveals the danger of turning pain into a movement that worships destruction. The narrator's final act is not a clean redemption, but it is the first honest ownership of the self he tried to escape.`,
  'se7en': `Detective William Somerset is days from retirement in a city defined by rain, decay and moral exhaustion. He is methodical, literate and deeply weary. His new partner, David Mills, is younger, impatient and eager to prove that determination can make a difference. Mills has moved to the city with his wife Tracy, who feels isolated and uneasy in their new life. The partnership begins with friction because Somerset sees the city as a condition, while Mills sees it as a problem to be fought.

Their case begins with a murder staged around gluttony: an obese man forced to eat until death. Soon after, a corrupt defense attorney is killed in a crime representing greed. Somerset recognizes the pattern of the seven deadly sins and understands that the killer is patient, theatrical and intellectually vain. Mills wants action, but the investigation demands interpretation. Each crime scene is less a clue in the ordinary sense than a message designed to make the detectives read the killer's worldview.

The murders continue with horrifying precision. Sloth is revealed through a victim kept alive in prolonged suffering. Lust involves an innocent person forced into an act of sexualized violence. Pride centers on a woman given a cruel choice after mutilation. Each sin expands the killer's thesis that the city is morally rotten and that people ignore corruption until violence makes it impossible to look away. Somerset is disgusted not only by the killer but by the possibility that the world has made such sermons persuasive to some.

Somerset and Mills identify John Doe through library records and investigative pressure, but Doe remains ahead of them. His apartment is filled with notebooks documenting obsession on a massive scale, yet the evidence does not immediately end the case. Doe has planned for discovery. He arrives at the police station covered in blood and surrenders, offering to confess if Somerset and Mills accompany him to a remote location where the final two bodies will be found. The arrangement is obviously a trap, but legally and practically they have little choice.

Before the final drive, the film deepens the emotional stakes through Tracy. She confides in Somerset that she is pregnant and unsure whether to bring a child into the city. Somerset tells her about a past abortion and advises that if she chooses not to keep the child, she should never tell Mills, but if she does, she should spoil the child every chance she gets. This quiet scene gives the ending its devastating force because it reveals a future Mills does not yet know he has.

In the desert, a delivery van arrives with a box. Somerset opens it away from Mills and discovers the result of Doe's final design. Doe has killed Tracy and placed her head in the box. He explains that he envied Mills's normal life, making himself envy, and he wants Mills to become wrath by killing him. Somerset tries desperately to stop Mills, telling him that if he shoots Doe, the killer wins. Doe reveals Tracy was pregnant, and Mills, shattered beyond restraint, kills him.

The case ends exactly as Doe intended. Five victims are dead for the first five sins, Doe dies as envy and Mills becomes wrath. Somerset, who planned to leave, says he will be around, suggesting retirement is no longer possible in the same way. The full story is a detective thriller that denies the comfort of solved order. The killer is caught, but capture does not prevent victory because his real crime is psychological architecture. The film leaves the audience inside Somerset's bleak recognition: the world is worth fighting for, but the fight may never feel clean or victorious.`,
  'dune': `Paul Atreides begins as the heir of House Atreides on the ocean planet Caladan, trained in politics, combat and mental discipline but still uncertain about the future expected of him. His father Duke Leto is ordered by the Emperor to take control of Arrakis, the desert planet that produces spice, the most valuable substance in the universe. Spice enables interstellar travel and shapes imperial power, making Arrakis both a prize and a trap. The previous rulers, House Harkonnen, have been removed officially, but the political arrangement feels dangerous from the start.

Paul's mother Jessica is a Bene Gesserit, part of a secretive order that has trained bloodlines and planted religious myths across worlds for generations. She has taught Paul skills beyond what a noble son should possess, and Paul experiences visions of a Fremen woman and a violent future. The Reverend Mother tests him with the gom jabbar, forcing him to endure pain and proving he may be part of a larger breeding plan. Paul is not simply inheriting a dukedom; he is moving into a destiny shaped by institutions that predate him.

On Arrakis, House Atreides tries to govern differently from the Harkonnens. Duke Leto wants an alliance with the Fremen, the desert people who know the planet better than any imperial power. Duncan Idaho earns Fremen respect, and Liet-Kynes, the imperial ecologist, recognizes Leto's potential sincerity. But Arrakis itself is harsh and sacred. Sandworms dominate the desert, water is life and spice extraction is dangerous. Paul begins to understand that control of Arrakis from above is an illusion. Real power lies with those who can survive the desert.

The betrayal comes through Dr. Yueh, who disables Atreides defenses because the Harkonnens hold his wife hostage. The Harkonnens attack with Sardaukar support secretly authorized by the Emperor, revealing that Leto's popularity made him a political threat. Duke Leto is captured and dies trying to assassinate Baron Harkonnen with poison gas hidden in a tooth. The attempt kills others but not the Baron. House Atreides is destroyed in a single night of fire and treachery.

Paul and Jessica escape into the desert. Their survival depends on Bene Gesserit control, stolen equipment and help from Kynes, who eventually dies after being abandoned in the desert. Paul begins seeing visions more clearly, including possible futures where he becomes a religious leader whose name is used in war. He also realizes that Jessica is pregnant and that his own identity may be tied to the Kwisatz Haderach, the male figure the Bene Gesserit have tried to produce. These revelations frighten him because they suggest his life may become a channel for violence he does not want.

The desert brings Paul and Jessica to the Fremen led by Stilgar. Among them is Chani, the young woman from Paul's visions. Acceptance is not automatic. Jamis challenges Jessica and Paul, leading to ritual combat. Paul has trained to fight but has never killed. When he defeats and kills Jamis, he crosses a threshold into the world he has been dreaming about. The Fremen interpret signs around him through prophecy, while Paul feels the burden of becoming someone others already believe in.

The film ends with Paul choosing to join the Fremen rather than seek immediate escape. He sees a Fremen riding a sandworm, a sign that Arrakis contains forms of power outsiders barely understand. The story is deliberately incomplete because it is an origin of transformation: a noble house falls, a father dies, a son enters exile and a desert people become the center of a future empire. The full story of this chapter is about the collapse of inherited power and the beginning of a more dangerous identity. Paul survives the trap, but survival places him on the path toward the very future he fears.`,
  'coco': `Miguel Rivera grows up in a family where music is forbidden. His great-great-grandmother Imelda banned it after her musician husband left the family, and generations later the Riveras define themselves through shoemaking and suspicion of performers. Miguel secretly loves music and idolizes Ernesto de la Cruz, the famous singer from his town. He practices in hiding, dreaming of becoming a musician despite the pain that music represents to his family. The conflict is not simply rebellion against rules; it is a struggle over memory and who gets to define the family story.

On Dia de los Muertos, Miguel discovers what he believes is proof that Ernesto is his great-great-grandfather. After his family destroys his hidden guitar, he steals Ernesto's guitar from the singer's tomb to enter a talent show. The theft curses him, transporting him to the Land of the Dead, where he can see deceased relatives who have returned for the holiday. The world is vibrant and full of celebration, but it has rules. Miguel must receive a blessing from his family before sunrise or remain among the dead.

Imelda offers a blessing on the condition that Miguel give up music forever. Miguel refuses and runs away to find Ernesto, hoping the famous musician will bless his dream. He meets Hector, a charming and desperate skeleton who wants Miguel to place his photo on an ofrenda so he can visit his daughter before she forgets him. In the Land of the Dead, memory is survival. When no living person remembers a soul, that soul fades into final death. Hector's urgency gives the adventure emotional stakes beyond Miguel's ambition.

Miguel and Hector travel through the city, perform together and form a bond. Hector helps Miguel reach Ernesto, who initially welcomes the boy as family. But the truth emerges: Hector wrote the songs that made Ernesto famous and wanted to return home to his daughter. Ernesto poisoned him, stole his music and built a career on betrayal. The song Miguel associates with Ernesto's greatness actually belongs to Hector. More importantly, Hector is Miguel's real great-great-grandfather, and the daughter he longs to see is Mama Coco.

Ernesto's villainy is rooted in image. He values legacy as public admiration, while Hector values being remembered by the person he loves. Ernesto tries to destroy Hector's photo and keep the truth hidden, but Miguel's dead relatives uncover the betrayal. Imelda, who spent years believing Hector abandoned her, realizes she built the music ban on a lie. Her anger shifts from music itself to the man who stole both songs and family trust.

As sunrise approaches, Miguel returns to the living world with a blessing that allows music. But Hector is fading because Coco's memory is nearly gone and the photo is missing. Miguel rushes to Mama Coco and plays "Remember Me," not as Ernesto's showpiece but as Hector's lullaby to his daughter. The song awakens Coco's memory of her father. She sings with Miguel, tells the family about Hector and restores his place in the family history before she dies.

The ending shows the next Dia de los Muertos with Hector's photo on the ofrenda, Imelda and Hector reunited in the Land of the Dead and Miguel openly sharing music with his family. Coco has joined the ancestors, and memory now connects rather than divides. The full story is about a boy pursuing artistic identity, but its deeper movement is from false history to restored love. Music is not the thing that broke the family. Silence was. By recovering the true story, Miguel gives his family both its past and its song back.`,
  'the-fellowship-of-the-ring': `The story begins with the history of the One Ring, forged by Sauron to dominate the free peoples of Middle-earth. Though Sauron was defeated when Isildur cut the Ring from his hand, Isildur failed to destroy it, allowing evil to survive in hidden form. Centuries later, the Ring rests in the Shire with Bilbo Baggins, who found it during an earlier adventure. Bilbo's nephew Frodo inherits it after Bilbo leaves, unaware that this small object is the weapon Sauron needs to return fully to power.

Gandalf discovers the truth and warns Frodo that the Ring cannot stay in the Shire. Frodo leaves with Sam, and they are soon joined by Merry and Pippin. The early journey changes the scale of the world. What began as a quiet rural life becomes a flight from the Nazgul, terrifying servants of Sauron who sense the Ring. The hobbits are protected for a time by Aragorn, a ranger known as Strider, who leads them toward Rivendell. Frodo is stabbed by a Morgul blade at Weathertop, nearly falling into darkness before Arwen carries him to safety.

At Rivendell, the political and moral stakes become clear. The Ring must be destroyed in the fires of Mount Doom, where it was made. Representatives of different peoples argue over what to do, but the Ring corrupts desire and turns even good intentions toward domination. Frodo volunteers to carry it, not because he is powerful, but because he understands that someone must. The Fellowship forms around him: Sam, Merry, Pippin, Gandalf, Aragorn, Boromir, Legolas and Gimli. Their unity is hopeful but fragile because the Ring works inwardly on fear, pride and longing.

The journey south tests them. Saruman, once head of Gandalf's order, has betrayed them and allied with dark power, breeding armies and trying to capture the Ring. The Fellowship cannot cross the mountain Caradhras and instead passes through the mines of Moria. There they find the dwarf kingdom destroyed, a reminder that ancient grandeur offers no protection from greed and darkness. Gandalf faces the Balrog on the bridge of Khazad-dum and falls, sacrificing himself so the others can escape. The loss wounds the group deeply, especially Frodo, who depended on Gandalf's guidance.

In Lothlorien, Galadriel gives the Fellowship rest and gifts, but she also tests the temptation of power. When Frodo offers her the Ring, she imagines becoming a terrible queen and refuses, proving that wisdom includes renunciation. The Fellowship continues by river, but Boromir's desperation grows. He wants to save Gondor and believes the Ring could be used as a weapon. His desire is understandable, which makes it dangerous. The Ring twists love of homeland into attempted theft.

At Amon Hen, Boromir tries to take the Ring from Frodo, then immediately recognizes his failure. Frodo realizes the Ring endangers everyone near him and decides to leave alone. Sam refuses to abandon him and nearly drowns trying to follow. Their loyalty becomes the emotional foundation of the quest. Meanwhile, Uruk-hai attack. Boromir dies defending Merry and Pippin, redeeming himself through sacrifice after his fall to temptation. Aragorn comforts him and accepts more fully the responsibility he has avoided.

The Fellowship breaks into separate paths. Frodo and Sam head toward Mordor. Aragorn, Legolas and Gimli choose to rescue Merry and Pippin rather than chase the Ring. The ending is not victory but commitment. The full story of this first chapter is about accepting a burden no one can carry safely and discovering that fellowship matters even when the fellowship fails to remain physically together. Evil is vast, but the film insists that courage begins in small people choosing not to turn away.`,
  'the-return-of-the-king': `The final chapter begins with the history of Smeagol, showing how the Ring corrupted him from an ordinary creature into Gollum through murder, isolation and obsession. This opening matters because Frodo is now carrying the same burden toward Mordor. With Sam beside him and Gollum as guide, the quest approaches its most dangerous stage. Gollum serves because of a promise, but his divided self remains at war. Smeagol wants connection; Gollum wants the Ring. The closer they get to Mount Doom, the more the Ring turns trust into suspicion.

Elsewhere, the war for Middle-earth gathers around Gondor. Aragorn, Legolas, Gimli and Gandalf understand that Sauron's forces will strike Minas Tirith. Denethor, steward of Gondor, is consumed by grief and pride, especially after Boromir's death. He favors the memory of Boromir over Faramir, whose courage is quieter and less rewarded. Pippin enters Denethor's service, while Merry remains with Rohan, binding the hobbits to different fronts of the same war.

Aragorn's arc is acceptance. He can no longer remain only a ranger avoiding the failures of his ancestors. To save Minas Tirith and unite resistance, he takes the Paths of the Dead, confronting an oath-breaking army that once abandoned Isildur. By claiming his identity as Isildur's heir, Aragorn turns legacy from shame into responsibility. His kingship is not a reward for victory; it is a burden he finally agrees to carry.

The siege of Minas Tirith is catastrophic. Orc armies, siege towers and the Witch-king's terror break against the city. Denethor collapses into madness and nearly burns Faramir alive, but Pippin and Gandalf intervene. Rohan arrives at dawn in one of the story's great reversals, with Theoden leading a charge that gives Gondor hope. Yet victory costs dearly. Theoden dies, and Eowyn, who has ridden disguised into battle with Merry, kills the Witch-king after he claims no man can defeat him. Her act brings together courage, despair and the refusal to remain caged by others' expectations.

Frodo and Sam's path becomes more intimate and spiritually brutal. Gollum manipulates Frodo into distrusting Sam, and Frodo sends Sam away. Sam discovers the truth too late but returns, rescuing Frodo from Shelob and from orcs who take him prisoner. As they cross Mordor, the landscape becomes almost abstract in its suffering. Sam carries Frodo when Frodo can no longer walk, expressing the trilogy's deepest form of heroism: not conquest, but faithful endurance.

To distract Sauron and give Frodo a chance, Aragorn leads a hopeless march to the Black Gate. He does this knowing they may all die without ever knowing whether the Ring is destroyed. At Mount Doom, Frodo finally fails. He claims the Ring instead of throwing it into the fire. The quest succeeds because Gollum attacks him, bites off his finger and falls into the lava with the Ring. Evil is destroyed through a mixture of mercy, corruption and accident. Frodo's earlier pity toward Gollum made the ending possible, even though Frodo himself could not complete the final act.

Sauron falls, Aragorn is crowned and the hobbits return to honor. Yet Frodo cannot fully return to the life he saved. The wound of the Ring remains, and peace does not erase trauma. He sails west with Gandalf, Bilbo and the elves, leaving Sam to build a life with Rosie and their children. The full story is epic in scale, but its final note is tender and sad. Victory matters, but it costs the innocent something permanent. The world is saved by courage, friendship and mercy, and the ones who carry the greatest burden may still need to leave in order to heal.`,
  'the-green-mile': `Paul Edgecomb looks back from old age on his time as a death row guard at Cold Mountain Penitentiary in 1935. The death row corridor is called the Green Mile because of the color of the floor leading to the electric chair. Paul and most of his fellow guards try to maintain dignity within a system built to execute people, but the work is morally heavy. The arrival of John Coffey changes everything. Coffey is a huge Black man convicted of murdering two young girls, yet he is gentle, frightened of the dark and emotionally unlike the crime attributed to him.

Paul is suffering from a painful urinary infection when Coffey touches him and miraculously heals him, releasing the sickness as black particles. This event forces Paul to question what Coffey is. Coffey's power is not only physical healing; he seems to absorb suffering, feel the pain of others and understand truth through touch. The contrast between his gift and his death sentence becomes the central moral wound of the story. A man with extraordinary compassion is trapped inside a legal machine that has already named him monstrous.

The other inmates reveal different aspects of the Mile. Eduard Delacroix, flawed but childlike in his affection for a mouse named Mr. Jingles, becomes the target of guard Percy Wetmore's cruelty. Percy is protected by political connections and enjoys power without responsibility. William "Wild Bill" Wharton, another inmate, is violent, chaotic and predatory. When Coffey touches him, he sees that Wharton is the real killer of the two girls. The knowledge confirms Coffey's innocence, but it does not create a simple path to saving him.

Percy's cruelty culminates in Delacroix's execution, where he deliberately fails to wet the sponge used to conduct electricity. Delacroix dies in agony, and the guards are horrified. Coffey later transfers pain and sickness into Percy, causing Percy to shoot Wharton and fall into permanent mental collapse. The act removes two sources of evil, but it also reveals the limits of justice. The truth has appeared, yet the institution cannot easily reverse itself because the world outside the Mile has already accepted Coffey's guilt.

Paul and the guards take Coffey out of prison secretly to heal Melinda, the warden's wife, who is dying from a brain tumor. Coffey saves her, again absorbing unbearable suffering into himself. This miracle should make his innocence undeniable to those who witness it, but it also deepens Coffey's exhaustion. He explains that the pain of the world is too much for him. He feels cruelty everywhere, and life has become a burden.

Paul considers letting Coffey escape, but Coffey does not want to run. He is tired and ready to die, even though he fears the dark and does not deserve execution. This is the story's most painful turn. Coffey's death is not justice, and everyone who knows the truth understands that. Paul participates in the execution because the system leaves him with no morally clean option. Before dying, Coffey asks not to have a hood placed over his face because he is afraid of darkness.

Years later, Paul reveals that Coffey's touch extended his life and Mr. Jingles' life far beyond normal limits. Longevity becomes not a blessing but a sentence. Paul has outlived everyone he loved and interprets his long life as punishment for executing a miracle of God. The full story is a supernatural prison drama, but its deepest concern is mercy trapped inside injustice. It asks what goodness can do in a world that recognizes miracles too late and whether witnessing grace makes a person responsible for failures he could not prevent.`,
  'one-flew-over-the-cuckoos-nest': `The story is set in a psychiatric hospital ward ruled by Nurse Ratched, whose control depends on routine, shame and the quiet manipulation of vulnerable men. The patients live under rules that appear therapeutic but often keep them passive and afraid. Chief Bromden, a large Native American patient who pretends to be deaf and mute, observes everything while remaining invisible to the staff. Into this controlled environment comes Randle P. McMurphy, transferred from prison for evaluation. He hopes the hospital will be easier than a work farm, but he underestimates the power of the institution.

McMurphy is loud, funny, sexual and disruptive. At first, his rebellion is selfish. He wants comfort, gambling, television and freedom from rules. But his energy awakens the other patients, especially Billy Bibbit, Harding, Cheswick and Martini. They laugh more, question more and begin to see that Ratched's authority is not natural law. Ratched responds not with open rage but with calm procedural dominance. She uses group therapy to expose weaknesses, turns patients against themselves and frames control as care.

The battle over watching the World Series becomes a turning point. McMurphy asks for a vote to change the schedule, but Ratched manipulates the process. When he loses on a technicality, he pretends to watch the game on a blank television and narrates it with such conviction that the other men join him. The scene shows his gift: he can make freedom feel real before it is formally granted. He later learns that many patients are voluntary and could leave, which shocks him. Their captivity is psychological as much as institutional.

McMurphy's influence grows through acts that are reckless but liberating. He steals a hospital bus and takes the men fishing, giving them a brief experience of adulthood, risk and dignity outside the ward. Chief reveals that he can speak and that he is not deaf. A bond forms between him and McMurphy, who begins planning escape. Yet McMurphy also discovers that Ratched can keep him committed indefinitely, unlike his prison sentence. The institution's power becomes frighteningly real.

After Cheswick's distress and other consequences, McMurphy attempts to behave, but the ward's cruelty keeps pulling him back. The final rebellion is a night party with alcohol and women, arranged before McMurphy's planned escape to Canada. Billy gains confidence and sleeps with Candy, momentarily overcoming his terror of sexuality and maternal judgment. In the morning, Ratched discovers the scene. Rather than only punishing rule-breaking, she targets Billy's shame, threatening to tell his mother. Billy collapses emotionally and kills himself.

McMurphy, enraged by Ratched's cruelty and Billy's death, attacks her and nearly strangles her. He is taken away. When he returns, he has been lobotomized, his personality erased. The punishment reveals the institution's final power: if it cannot control life, it can destroy the self. Chief cannot bear to leave McMurphy as a living symbol of defeat. He smothers him in an act of mercy, then lifts the heavy hydrotherapy console McMurphy once tried to move, throws it through a window and escapes.

The ending is tragic but not hopeless. McMurphy does not physically escape, and his rebellion costs him everything. But he changes Chief, and through Chief, the possibility of freedom survives. The full story is about institutional control, masculinity, madness and dignity, but its emotional force comes from the way laughter becomes resistance. McMurphy is no saint; he is selfish, impulsive and often crude. Yet inside a ward designed to shrink people, his refusal to be small becomes contagious.`,
  'star-wars-a-new-hope': `The story begins with the galaxy under Imperial rule. Princess Leia carries stolen plans for the Death Star, a planet-destroying battle station, but Darth Vader captures her ship. Before being taken prisoner, Leia hides the plans in the droid R2-D2, who escapes to the desert planet Tatooine with C-3PO. The droids are sold to Luke Skywalker's family, drawing an ordinary farm boy into a conflict far larger than his isolated life. Luke dreams of leaving Tatooine, but obligation to his aunt and uncle keeps him trapped.

R2-D2 leads Luke to Obi-Wan Kenobi, an old hermit who reveals he was once a Jedi Knight and knew Luke's father. Obi-Wan gives Luke his father's lightsaber and introduces him to the Force, an energy field connecting living things. Luke is hesitant until Imperial stormtroopers searching for the droids murder his aunt and uncle. With his home destroyed, Luke chooses to leave with Obi-Wan, learn the ways of the Force and deliver Leia's message to the Rebellion.

In Mos Eisley, they hire Han Solo and Chewbacca, smugglers with the ship Millennium Falcon. Han is cynical, motivated by money and trying to pay off debts, while Luke is idealistic and inexperienced. Their journey to Alderaan ends in shock when they find the planet destroyed by the Death Star as a demonstration of Imperial power. The Falcon is captured by the station, forcing the heroes to hide, improvise and eventually rescue Leia from detention. Leia proves to be more than a prisoner; she is sharp, brave and immediately critical of her rescuers' incompetence.

The rescue becomes an escape through trash compactors, corridors and firefights. Obi-Wan disables the tractor beam and confronts Darth Vader, his former pupil. Their duel is less physically elaborate than spiritually weighted: old teacher and fallen student meeting after years of ruin. Obi-Wan allows Vader to strike him down, becoming one with the Force and continuing to guide Luke in another form. The others escape, but the Empire tracks them to the Rebel base on Yavin IV.

The stolen plans reveal a weakness in the Death Star: a small exhaust port leading to the reactor. The Rebels launch a desperate fighter assault while the station approaches firing range. Luke joins the attack as a pilot, supported by Biggs and other Rebels who are gradually destroyed by Imperial defenses and Vader's fighter. Han takes his reward and leaves, appearing to confirm his selfishness, but he returns at the crucial moment to knock Vader away and give Luke a clear path.

In the trench, Luke hears Obi-Wan's voice telling him to trust the Force. He turns off his targeting computer and fires by instinct and faith. The torpedoes hit, destroying the Death Star seconds before it can annihilate the Rebel base. The victory is military, emotional and symbolic. Luke has moved from longing farm boy to active participant in a larger moral struggle. Han has chosen loyalty over profit. Leia's rebellion survives.

The ending awards Luke and Han medals, but the larger war remains. The Empire is not destroyed, and Vader survives. The full story is a classic hero's journey built with unusual clarity: a call to adventure, a mentor, a rescue, a sacrifice and a leap of faith. Its power comes from making myth feel immediate and lived-in. The galaxy is vast, but the emotional arc is simple: ordinary people become heroes when they answer tyranny with courage, friendship and trust in something beyond themselves.`,
  'the-empire-strikes-back': `The story begins after the Rebel victory over the Death Star, but triumph has not made the galaxy safe. The Empire drives the Rebels into hiding on the ice planet Hoth. Luke Skywalker, now more experienced but still impatient, is attacked by a wampa and receives a vision of Obi-Wan telling him to seek Yoda on Dagobah. The Empire discovers the base, and the Rebels evacuate during a massive assault. The battle shows that the Rebellion remains fragile, always surviving rather than controlling events.

Luke leaves with R2-D2 for Dagobah, while Han, Leia, Chewbacca and C-3PO flee in the damaged Millennium Falcon. Han and Leia's relationship sharpens under pressure. Their arguments hide attraction, fear and classically mismatched temperaments: Leia is disciplined and responsible, Han deflects vulnerability with jokes and swagger. The Falcon hides in an asteroid field and later attaches to a Star Destroyer to avoid detection, but the ship's mechanical failures keep them from true escape.

On Dagobah, Luke meets Yoda without recognizing him at first. Yoda tests his patience and finds him restless, angry and too focused on the future. Training teaches Luke that the Force requires discipline, humility and self-knowledge, not just heroic desire. In the cave, Luke confronts a vision of Darth Vader and sees his own face behind the mask, foreshadowing the danger that the enemy is connected to him more intimately than he understands.

Darth Vader pursues Luke by targeting his friends. He hires bounty hunters, including Boba Fett, to track the Falcon. Han seeks help from Lando Calrissian in Cloud City, an old acquaintance who appears welcoming but has already been pressured by the Empire. Lando's betrayal is not simple villainy; he is trying to protect his city from Imperial occupation. Still, the result is devastating. Han and Leia are captured, and Vader uses them as bait.

Before Luke arrives, Han is tortured and then frozen in carbonite as a test for the process Vader intends to use on Luke. Leia tells Han she loves him, and Han answers with characteristic understatement, turning bravado into tenderness. Boba Fett takes Han away to Jabba the Hutt. Lando, recognizing that Vader keeps changing the deal, turns against the Empire and helps Leia, Chewbacca and the droids escape, but they cannot save Han.

Luke abandons his training because he senses his friends' suffering. Yoda and Obi-Wan warn him that he is not ready, but Luke chooses attachment over patience. In Cloud City, he duels Vader and is overwhelmed. Vader cuts off his hand and then reveals the truth: he is Luke's father. The revelation shatters Luke's understanding of good, evil, lineage and self. He chooses to fall rather than join Vader, surviving only because Leia senses him and returns with the Falcon.

The ending is wounded and unresolved. Luke receives a mechanical hand, Lando and Chewbacca leave to find Han, and the Rebel fleet gathers in uncertainty. The full story is a sequel about defeat that deepens everything the first film established. Luke learns that heroism without discipline can lead to disaster. Han and Leia's romance becomes real just as they are separated. Vader changes from masked villain to family tragedy. The film ends without victory, but its losses give the myth emotional gravity. The heroes survive, and survival must be enough until hope can become action again.`,
  'joker': `Arthur Fleck lives in Gotham as a party clown and aspiring comedian while caring for his mother Penny. He is poor, socially isolated and suffers from a neurological condition that causes uncontrollable laughter at inappropriate moments. Gotham around him is tense, dirty and increasingly divided between the wealthy and everyone else. Arthur depends on medication, social services and fantasy to keep functioning. He dreams of appearing on Murray Franklin's talk show, imagining Murray as the approving father figure he lacks.

Arthur's life begins to collapse through humiliation and abandonment. Teenagers steal his sign and beat him. A co-worker gives him a gun, supposedly for protection, which later falls out during a children's hospital performance, costing him his job. City budget cuts end his therapy and medication. The systems that barely held him together disappear. The film does not present these events as a single cause of violence, but as pressure accumulating around a man already unstable and desperate to be seen.

On the subway, Arthur is harassed and beaten by three wealthy Wayne employees. He shoots them, first in fear and then in pursuit. The killings ignite public unrest because many Gotham citizens see the dead men as symbols of elite cruelty. Arthur does not initially act from political ideology, but the city projects meaning onto him. Clown masks become protest symbols. For the first time, Arthur feels that his existence has had an effect on the world.

Arthur's fantasies unravel. He imagines a romantic relationship with his neighbor Sophie, but later the film reveals that their intimacy existed only in his mind. He reads Penny's letters to Thomas Wayne and believes Wayne may be his father. Seeking answers, he confronts Wayne and later steals records from Arkham, discovering that Penny was delusional, that he was adopted and that he suffered severe abuse as a child while in her care. Whether every document is fully trustworthy matters less than the emotional result: Arthur's last story about family collapses.

Arthur kills Penny in the hospital, severing the identity of dutiful son. He also kills Randall, the co-worker who gave him the gun and then lied about it, while sparing Gary, who had treated him kindly. These acts show a new clarity in his violence. He is no longer simply reacting in panic; he is choosing who belongs inside his private moral theater. When Murray Franklin's show mocks Arthur's failed stand-up routine, Arthur accepts an invitation to appear, planning to kill himself on live television.

On the show, Arthur arrives in full Joker makeup and shifts the performance. Instead of suicide, he confesses to the subway murders and condemns a society he believes decides what is funny and what is acceptable. Murray challenges him, and Arthur shoots him on live television. The murder turns private breakdown into public spectacle. Gotham erupts. Rioters in clown masks attack symbols of wealth and authority, and in the chaos, Thomas and Martha Wayne are killed in front of young Bruce.

Arthur is rescued from a crashed police car by rioters who cheer him as a symbol. Standing on the hood, he paints a smile in blood, fully becoming Joker. The ending in Arkham leaves ambiguity around how much of the story may be filtered through Arthur's mind, but the transformation is clear. The full story is a descent from wounded invisibility into theatrical violence. It is not a clean political argument or a simple origin of evil. It is a portrait of alienation curdling into performance, where being noticed becomes more important than being saved.`
};

const OWNER_REVIEWS = {
  'oppenheimer': {
    rating: 5,
    verdict: 'A thunderous historical epic about genius becoming consequence.',
    text: `Oppenheimer is strongest when it treats scientific achievement as both triumph and moral rupture. Christopher Nolan builds suspense from rooms, hearings and competing memories rather than from battlefield action, which makes the film feel unusually interior for something so large. Cillian Murphy gives Oppenheimer a haunted elegance: he is magnetic enough to lead Los Alamos, but never simple enough to become a clean hero. The editing can feel overwhelming, and some supporting figures arrive as sharp fragments rather than full portraits, but that density also matches the subject. The film keeps asking whether brilliance can stay innocent after power adopts it. Its final force comes from refusing comfort. The bomb ends a war, opens a new terror and leaves its maker trapped between pride, guilt and political punishment. It is a demanding watch, but a deeply rewarding one for viewers who like historical drama with moral pressure.`
  },
  'dune-part-two': {
    rating: 5,
    verdict: 'A monumental sequel that makes destiny feel dangerous.',
    text: `Dune: Part Two is grand blockbuster filmmaking with a rare sense of dread. The sandworm rides, battles and desert imagery are spectacular, but the film's real achievement is how uneasy it makes Paul's rise. Denis Villeneuve understands that prophecy is not just wonder; it is also machinery that can turn people into symbols before they understand the cost. Timothee Chalamet and Zendaya give the story its emotional fracture, especially as Paul's political choices pull him away from the more human self Chani loves. The movie is not light entertainment, and its cold scale may feel severe to some viewers, but that severity is part of its design. It makes conquest look beautiful and frightening at once. As a sequel, it expands the first film's world while giving it sharper dramatic teeth. The ending lands like victory with poison in it.`
  },
  'top-gun-maverick': {
    rating: 4,
    verdict: 'Old-school spectacle with a surprisingly graceful emotional engine.',
    text: `Top Gun: Maverick succeeds because it knows exactly what kind of movie it wants to be and executes that mission with conviction. The aerial sequences are clean, physical and thrilling, with a sense of speed and danger that many effects-heavy blockbusters lack. More importantly, the film gives its nostalgia a dramatic purpose. Maverick's relationship with Rooster turns the sequel into a story about guilt, aging and learning when to lead from the front. The plot is familiar and some beats are proudly old-fashioned, but the craft is so sharp that predictability becomes part of the pleasure rather than a weakness. Tom Cruise brings movie-star intensity, while the younger pilots give the mission a lively ensemble feel. It is not especially complicated, but it is emotionally direct, technically polished and built for a big screen.`
  },
  'inception': {
    rating: 5,
    verdict: 'A dazzling puzzle film anchored by grief and release.',
    text: `Inception remains rewarding because its famous mechanics never completely swallow its emotional story. The dream layers, timed kicks and shifting architecture are intricate, but Cobb's guilt over Mal gives the film a wounded center. Nolan builds a heist movie out of subconscious rules, then uses those rules to explore memory, denial and the desire to return home. Some exposition is heavy, and a few characters function more as roles than fully developed people, yet the ensemble keeps the machine moving with style and clarity. The action is inventive because it grows from the concept rather than merely decorating it. What I like most is that the ending does not reduce the film to a puzzle answer. Whether the top falls matters less than Cobb finally turning away from obsession and toward his children.`
  },
  'interstellar': {
    rating: 5,
    verdict: 'Cosmic science fiction powered by intimate longing.',
    text: `Interstellar is enormous in scale, but its best moments are painfully intimate. The film reaches for black holes, relativity, dying ecosystems and the future of humanity, yet the father-daughter bond between Cooper and Murph gives those ideas weight. Matthew McConaughey makes Cooper's ambition and guilt feel inseparable, while Jessica Chastain gives adult Murph a fierce emotional intelligence. The movie is openly sentimental, and some viewers may find its language about love too direct, but I think that sincerity is central to its identity. It treats attachment as a mystery worth placing beside gravity and time. The middle section has moments of blunt exposition, but the imagery, music and emotional payoff are overwhelming. Few modern science fiction films are this willing to be both cerebral and vulnerable.`
  },
  'the-dark-knight': {
    rating: 5,
    verdict: 'A superhero film built like a ruthless urban tragedy.',
    text: `The Dark Knight still feels powerful because it treats superhero conflict as a crisis of civic faith. Batman, Dent and Gordon are all trying to create order, but the Joker understands how fragile that order becomes when fear enters the system. Heath Ledger's performance is frightening because it is playful without being light; he turns chaos into a philosophy. The film is long and sometimes packed with plot machinery, but its momentum rarely loosens. What makes it last is the Dent tragedy. Gotham's hope is not destroyed by brute force alone, but by grief, manipulation and the desire for revenge. Batman's final choice gives the film moral complexity: he wins the fight, preserves a symbol and loses the right to be publicly understood. That is why it remains more than a genre landmark.`
  },
  'parasite': {
    rating: 5,
    verdict: 'A flawless social thriller that turns architecture into destiny.',
    text: `Parasite is astonishing because its craft feels both invisible and exact. Bong Joon Ho moves from comedy to suspense to horror to tragedy without making any turn feel artificial. The performances are sharp across both families, and the house itself becomes a map of class power: upper rooms, lower rooms, hidden rooms and flooded streets all carrying meaning. The film refuses easy moral sorting. The Kims deceive, the Parks condescend, and everyone is shaped by a structure that rewards blindness and desperation. Its violence shocks because the social pressure has been building quietly from the first scene. I especially admire how funny the film remains before it becomes devastating; the humor makes the cruelty more human. It is accessible, entertaining and politically precise without turning into a lecture.`
  },
  'whiplash': {
    rating: 5,
    verdict: 'An electrifying portrait of ambition as both fuel and poison.',
    text: `Whiplash is thrilling because it never lets the audience sit comfortably with its own excitement. The music, editing and performances make Andrew's pursuit of greatness feel exhilarating, but Fletcher's cruelty keeps poisoning that exhilaration. Miles Teller captures the hunger of a young artist who wants to be exceptional more than he wants to be happy, while J.K. Simmons makes Fletcher terrifying without reducing him to noise. The film is lean, almost brutally focused, and that narrowness works in its favor. It does not try to solve every question about teaching or art; it traps us inside one destructive relationship. The ending is brilliant because it can be read as triumph and disaster at the same time. Andrew plays magnificently, but the cost of that magnificence is the question that lingers.`
  },
  'the-matrix': {
    rating: 5,
    verdict: 'A sleek action landmark with a still-potent freedom myth.',
    text: `The Matrix blends style, philosophy and action with remarkable clarity. Its world-building is efficient: within a short span, the viewer understands the simulation, the machines, the resistance and the stakes of awakening. The action design remains iconic because it expresses the concept; bending the rules of reality becomes a physical language. Keanu Reeves gives Neo the right mixture of blankness, curiosity and growing conviction, while Laurence Fishburne and Carrie-Anne Moss provide mythic confidence around him. Some late-1990s textures now feel period-specific, but the central metaphor remains flexible and alive. It can speak to technology, identity, control, labor or personal liberation. Most importantly, the film makes freedom look difficult rather than cozy. The truth is horrifying, but once Neo sees the code, returning to sleep is impossible.`
  },
  'the-shawshank-redemption': {
    rating: 5,
    verdict: 'A deeply satisfying prison drama about hope as discipline.',
    text: `The Shawshank Redemption earns its reputation through patience and emotional clarity. It never treats hope as a slogan. For Andy, hope is work: building a library, protecting the inner self, carving a tunnel inch by inch and refusing to let prison define reality. Tim Robbins gives Andy mystery without coldness, while Morgan Freeman's Red gives the film warmth, skepticism and memory. The movie can be sentimental, but its sentiment is grounded by cruelty, corruption and time. Warden Norton is frightening because his evil wears respectability, making Andy's escape feel like moral balance as well as personal freedom. The final reunion works because the film has made waiting feel heroic. It is less about a clever breakout than about keeping the soul alive long enough for freedom to matter.`
  },
  'the-godfather': {
    rating: 5,
    verdict: 'A crime epic whose real subject is inheritance and corruption.',
    text: `The Godfather is magnificent because it is calm where lesser crime films might be loud. Francis Ford Coppola gives violence the weight of ritual, business and family obligation. Marlon Brando's Vito is iconic, but the film belongs just as much to Al Pacino's Michael, whose transformation is gradual, elegant and chilling. He does not become a gangster through one sudden appetite for power. He is pulled by loyalty, trauma, strategy and pride until the family business becomes indistinguishable from his identity. The film's length allows rooms, meals and silences to become dramatic events. Its view of family is both loving and terrifying, because affection becomes the language through which corruption survives. The final door closing on Kay remains one of cinema's great endings: private intimacy shut out by public power.`
  },
  'pulp-fiction': {
    rating: 5,
    verdict: 'A restless crime mosaic where style becomes structure.',
    text: `Pulp Fiction is often remembered for attitude, but its structure is what gives that attitude lasting force. The scrambled chronology turns chance encounters into echoes, letting Vincent be alive after we have seen his death and letting Jules's spiritual pivot become the film's final moral note. Tarantino's dialogue is theatrical, funny and self-conscious, yet it gives criminals oddly vivid everyday lives. The film can be abrasive, and its coolness sometimes risks turning brutality into decoration, but the best sections are smarter than imitation suggests. Butch's return to save Marsellus, Mia's overdose and Jules in the diner all show characters meeting moments where instinct becomes choice. It is stylish, yes, but not empty. Beneath the pop surface is a film about luck, consequence and the rare possibility of walking away changed.`
  },
  'forrest-gump': {
    rating: 4,
    verdict: 'A sentimental American fable with an undeniable emotional pull.',
    text: `Forrest Gump is broad, polished and often very tidy about American history, but its emotional pull is difficult to deny. Tom Hanks gives Forrest a gentle directness that keeps the film from becoming only a clever premise. The historical cameos and digital tricks are memorable, though sometimes they flatten complex eras into a storybook parade. The deeper material is in Forrest's relationships with Jenny, his mother, Bubba and Lieutenant Dan. Jenny's story is painful and imperfectly handled, but it provides a necessary contrast to Forrest's steadiness. The film believes in kindness as a way of moving through chaos, and that belief can be moving even when the storytelling is openly sentimental. It is not subtle, but it has sincerity, strong craft and a final act that still lands with feeling.`
  },
  'gladiator': {
    rating: 4,
    verdict: 'A muscular revenge epic with a mournful, honorable heart.',
    text: `Gladiator endures because Maximus is not chasing revenge alone. He is chasing reunion, honor and a vision of Rome that may never have fully existed. Ridley Scott gives the arena scenes scale and brutality, but the film's mournful tone is what makes them matter. Russell Crowe plays Maximus with grounded dignity, while Joaquin Phoenix makes Commodus needy, frightening and pathetic in equal measure. Some political details are simplified, and the story leans into classical melodrama, but that clarity gives the film mythic strength. It knows the emotional shape it wants: a good man loses everything, becomes a symbol and uses spectacle against tyranny. The ending is satisfying because it gives Maximus victory and release at once. It is grand entertainment with genuine sadness under the armor.`
  },
  'mad-max-fury-road': {
    rating: 5,
    verdict: 'Pure visual momentum with a fierce moral center.',
    text: `Mad Max: Fury Road is action cinema reduced to essentials and then rebuilt with astonishing imagination. The plot is basically a chase out and a chase back, but every frame communicates geography, character and social order. George Miller turns vehicles, costumes and movement into world-building. Charlize Theron's Furiosa gives the film its emotional spine, while Tom Hardy's Max works as a haunted survivor who helps without taking over the story. The movie is loud and relentless, yet it is never shapeless. Its action is readable, rhythmic and purposeful. What makes it more than spectacle is its moral clarity: bodies treated as property fight to reclaim themselves, and the answer is not endless escape but taking back the source of life. It is exhilarating because liberation and motion become the same thing.`
  },
  'john-wick': {
    rating: 4,
    verdict: 'A lean revenge film sharpened by grief, rules and movement.',
    text: `John Wick is beautifully direct. The emotional premise is simple, but the film respects it: the puppy matters because it is a final gift from John's wife, not because the plot needs an excuse for violence. Keanu Reeves gives John a physical sadness that makes the action feel rooted in loss. The choreography is precise, readable and stylish without becoming sterile, and the underworld details give the revenge a mythic charge. Gold coins, the Continental and whispered fear around John's name suggest a larger world without overexplaining it. The movie is not deep in a conventional dramatic sense, but it is elegant in construction. It understands that John's skill is impressive while his violence is not healing. That tension keeps the film from becoming only a power fantasy.`
  },
  'avengers-endgame': {
    rating: 4,
    verdict: 'A giant finale that turns franchise memory into farewell.',
    text: `Avengers: Endgame is messy in the way only a massive franchise finale can be, but it understands the feeling its audience came to experience. The time-heist structure is playful fan service, yet it also lets the characters revisit earlier selves and unresolved wounds. Tony's fear of losing his family, Steve's longing for a life outside duty, Thor's depression and Natasha's sacrifice give the spectacle emotional anchors. Not every character receives equal depth, and the mechanics of time travel are best accepted as comic-book logic, but the film's generosity carries it. The final battle is less surprising than cathartic, a roll call of years of attachment. Its strongest moments are goodbyes: Tony's sacrifice, Steve's choice and the sense that an era of shared pop storytelling is closing.`
  },
  'spider-man-across-the-spider-verse': {
    rating: 5,
    verdict: 'A visually fearless sequel about refusing inherited tragedy.',
    text: `Across the Spider-Verse is visually overwhelming in the best way, but its emotional argument is just as strong as its style. Every universe has its own texture, rhythm and color logic, yet the film never loses Miles as its center. The conflict with Miguel works because it turns Spider-Man mythology into a philosophical problem: must heroism require certain wounds, or can Miles save someone he loves and still be Spider-Man? Gwen's story adds guilt and tenderness, while Spot evolves from joke to genuine threat. The film is incomplete by design, and the cliffhanger may frustrate viewers wanting closure, but the momentum is earned. It expands the first film without losing the personal stakes. Miles is fighting a villain, a system and the accusation that his very existence is a mistake.`
  },
  'spider-man-into-the-spider-verse': {
    rating: 5,
    verdict: 'A joyful origin story about becoming yourself under the mask.',
    text: `Into the Spider-Verse is bursting with invention, but its heart is beautifully simple. Miles Morales does not become Spider-Man by copying Peter Parker perfectly. He becomes Spider-Man when he accepts that the role can sound, move and feel like him. The animation is revolutionary because it is not only decorative; comic panels, frame rates, color bursts and graffiti textures all express identity. The humor is generous, the ensemble Spider-people are memorable and the emotional beats with Miles's father and Uncle Aaron give the film real weight. It is rare for a superhero origin to feel this fresh while still honoring the core myth. The leap of faith sequence remains extraordinary because it turns self-belief into pure visual motion. It is funny, moving, stylish and deeply rewatchable.`
  },
  'blade-runner-2049': {
    rating: 5,
    verdict: 'A patient, haunting sequel about chosen meaning.',
    text: `Blade Runner 2049 is slow, but its slowness is not emptiness. It lets loneliness become atmosphere. Denis Villeneuve and Roger Deakins create a future of fog, neon, dust and vast interiors where every space seems to ask whether a manufactured life can still be meaningful. Ryan Gosling's restrained performance is crucial; K is quiet because obedience has been built into him, and the investigation gradually teaches him desire, disappointment and choice. The film's most moving idea is that K does not need to be special by birth to matter. In fact, losing that fantasy makes his final act more profound. Some viewers may find the pace severe, but the patience rewards attention. As a sequel, it honors the original while deepening its questions about memory, personhood and freedom.`
  },
  'la-la-land': {
    rating: 4,
    verdict: 'A bittersweet musical about love, timing and artistic cost.',
    text: `La La Land is bright on the surface and quietly bruised underneath. The colors, music and old-Hollywood gestures create a romantic glow, but the story is ultimately about how dreams can bring people together and still pull them apart. Emma Stone gives Mia vulnerability and stubbornness, while Ryan Gosling's Sebastian is charming even when his purism becomes limiting. The film's view of jazz and artistic compromise can be simplified, but its emotional architecture is graceful. It does not punish ambition or romance; it admits that both can be sincere and still conflict. The final fantasy sequence is devastating because it gives viewers the happy version while refusing to rewrite the life that actually happened. The result is a musical that celebrates dreamers without pretending dreams are free.`
  },
  'fight-club': {
    rating: 4,
    verdict: 'A provocative identity crisis that weaponizes dissatisfaction.',
    text: `Fight Club is angry, funny and intentionally unstable. Its power comes from how effectively it seduces the viewer with Tyler Durden's confidence before revealing the emptiness and violence behind that confidence. David Fincher's control is remarkable: the grimy surfaces, sharp narration and restless editing make alienation feel stylish and contagious. The film is often misunderstood when Tyler's speeches are taken as wisdom rather than bait, but the movie itself is more critical than its imitators. It shows how real dissatisfaction with consumer life can be redirected into hierarchy, misogyny and destruction. Edward Norton makes the narrator's fragmentation both pathetic and frightening, while Brad Pitt gives Tyler dangerous glamour. The ending is not clean redemption, but it is a break in the fantasy. As satire, it still bites because its targets have not disappeared.`
  },
  'se7en': {
    rating: 5,
    verdict: 'A grim procedural that turns investigation into moral defeat.',
    text: `Se7en is oppressive in the best possible way. Every room feels damp with moral exhaustion, and the city seems less like a location than a spiritual condition. Morgan Freeman's Somerset and Brad Pitt's Mills give the investigation its shape: experience versus impulse, resignation versus outrage. The murders are horrifying, but David Fincher avoids making the case only a puzzle. John Doe's crimes are staged as sermons, forcing the detectives to confront a worldview they despise but cannot simply dismiss as nonsense. The final trap is devastating because it uses Mills's love, innocence and future against him. It is not a pleasant film, and it should not be. Its greatness lies in how completely it denies the comfort of procedural victory. The killer is caught, but the moral damage is already done.`
  },
  'dune': {
    rating: 4,
    verdict: 'A patient opening chapter with monumental atmosphere.',
    text: `Dune is more foundation than conclusion, but the foundation is stunning. Villeneuve makes Arrakis feel tactile and sacred through scale, sound and restraint. The film trusts silence, ritual and landscape more than quick exposition, which gives the world a rare physical authority. Paul is still becoming interesting here; much of the drama is about forces gathering around him rather than choices fully made by him. That can make the ending feel abrupt for viewers expecting a complete arc, but the incompleteness also feels intentional. This is the fall of House Atreides and the beginning of a dangerous myth. The cast is strong, the design is immense and the tone is serious without feeling hollow. As a first half, it invites patience and rewards immersion.`
  },
  'coco': {
    rating: 5,
    verdict: 'A vibrant family story about memory as an act of love.',
    text: `Coco is colorful, funny and emotionally exact. Its world of the dead is visually dazzling, but the film's strength is not only design; it is the way every rule of that world supports the theme of memory. Miguel's desire to be a musician is easy to understand, and the family conflict has enough pain behind it to matter. The Ernesto twist works because it shifts the story from fame to authorship, from being remembered by crowds to being remembered truthfully by family. Hector's longing for Coco gives the final act enormous tenderness. By the time Miguel sings to Mama Coco, the film has turned music into inheritance, apology and rescue. It is accessible for children, but its understanding of grief and legacy is mature and beautifully handled.`
  },
  'the-fellowship-of-the-ring': {
    rating: 5,
    verdict: 'A near-perfect fantasy opening built on friendship and dread.',
    text: `The Fellowship of the Ring makes fantasy feel ancient, dangerous and intimate. Peter Jackson introduces a vast world without losing the small emotional center: Frodo accepting a burden and Sam refusing to let him carry it alone. The film balances comfort and terror beautifully. The Shire matters because leaving it hurts; Moria matters because history feels heavy; Lothlorien matters because beauty is already passing away. The ensemble is strong, and the Fellowship's breaking gives the adventure real consequence. Boromir's fall and redemption are especially important because they show that temptation often begins in love of something good. The film ends not with victory but with commitment, which is the right note. It is grand, heartfelt and still one of the finest examples of cinematic world-building serving character rather than smothering it.`
  },
  'the-return-of-the-king': {
    rating: 5,
    verdict: 'A sweeping finale that understands victory does not erase wounds.',
    text: `The Return of the King delivers enormous spectacle, but its lasting power comes from emotional aftermath. The battles are grand, the coronation is cathartic and the destruction of the Ring completes one of cinema's great quests. Yet the film is most moving when it admits that victory does not make Frodo whole again. Aragorn's rise gives the world political healing, while Sam's loyalty gives the story its deepest moral beauty. The multiple endings are often joked about, but I think their length is justified. The film is not only resolving plot; it is grieving a journey and allowing each bond to receive farewell. Some moments lean heavily into operatic emotion, but that scale suits the material. It is a rare finale that feels both triumphant and permanently sad.`
  },
  'the-green-mile': {
    rating: 4,
    verdict: 'A tender prison fable about mercy trapped inside injustice.',
    text: `The Green Mile is deliberately emotional, and its sincerity is both its strength and its risk. The film moves slowly, giving the prison staff, inmates and rituals enough time to feel lived in. Michael Clarke Duncan's John Coffey is the heart of the story, bringing gentleness and sorrow to a role that could have become only symbolic. Tom Hanks grounds the film as a witness forced to recognize grace inside an unjust system. Some scenes are broad, and the moral contrasts can be very clear, especially around Percy and Wild Bill. Still, the emotional design works because the film is not asking whether Coffey is good; it is asking what goodness can do when the system has already decided to kill it. The answer is moving, painful and intentionally unresolved.`
  },
  'one-flew-over-the-cuckoos-nest': {
    rating: 5,
    verdict: 'A fierce human drama about control, dignity and contagious freedom.',
    text: `One Flew Over the Cuckoo's Nest is powerful because its rebellion is messy, funny and life-giving before it becomes tragic. Jack Nicholson's McMurphy is not a saint; he is selfish, crude and often reckless. But inside Nurse Ratched's controlled ward, his refusal to shrink becomes revolutionary. Louise Fletcher's performance is terrifying because Ratched rarely needs to raise her voice. Her authority is procedural, polite and psychologically exact. The film's view of mental health institutions is shaped by its era and should not be mistaken for a complete modern discussion, but as a drama about control and dignity it remains piercing. Billy's collapse and McMurphy's punishment are devastating, yet Chief's escape prevents the ending from becoming pure defeat. Freedom survives because McMurphy made someone else believe in it.`
  },
  'star-wars-a-new-hope': {
    rating: 5,
    verdict: 'A clean heroic adventure with mythic simplicity and lasting warmth.',
    text: `A New Hope works because it makes myth feel friendly and immediate. The story is direct, but every character enters with a clear energy: Luke's longing, Leia's steel, Han's swagger, Obi-Wan's calm and Vader's ominous authority. The film invites viewers into a huge universe without drowning them in explanation. Its lived-in details make the galaxy feel old, while the plot stays clean enough for the emotional journey to shine. Some dialogue is plain and the effects show their age in places, but the film's charm is inseparable from that handmade quality. The final trench run remains stirring because Luke's victory is not only technical; it is a leap of trust. As an adventure template, it is still remarkably elegant.`
  },
  'the-empire-strikes-back': {
    rating: 5,
    verdict: 'A darker sequel that deepens the myth through defeat.',
    text: `The Empire Strikes Back is the rare middle chapter that feels complete because defeat is the point. The film deepens Star Wars by separating its heroes and testing them in different emotional registers. Luke's training with Yoda turns heroism into discipline rather than enthusiasm. Han and Leia's romance gains texture through argument, vulnerability and loss. Vader becomes more than a masked villain when the father reveal turns the conflict inward. The tone is darker, but the film never loses adventure; the asteroid chase, Cloud City and Dagobah all have distinct wonder. Its ending leaves the heroes wounded and unfinished, which is exactly why it endures. It trusts the audience to sit with uncertainty, and that trust makes the eventual hope of the saga feel earned.`
  },
  'joker': {
    rating: 4,
    verdict: 'A bleak character descent powered by an unnerving lead performance.',
    text: `Joker is uncomfortable by design, and its strongest element is Joaquin Phoenix's physical and emotional commitment. Arthur Fleck seems fragile, theatrical and frightening at once, a man whose need to be seen curdles into performance and violence. The film borrows heavily from earlier urban alienation dramas, and its social diagnosis can feel blunt. Gotham's cruelty is drawn in thick lines, and not every idea about class, illness and spectacle lands with equal nuance. Still, as a mood piece about humiliation becoming identity, it is undeniably effective. The cinematography, music and Phoenix's movement create a sense of dread even in quiet scenes. I value it more as a portrait of collapse than as a definitive explanation for evil. Its final transformation is memorable because it turns applause into something horrifying.`
  }
};

const MOVIE_PLOT_EXPANSIONS = {
  'oppenheimer': `The film also frames Oppenheimer through two official procedures: the 1954 security hearing that destroys him and the later Senate confirmation battle that exposes Strauss's resentment. This structure matters because it turns biography into investigation. We are not simply watching what happened; we are watching powerful men decide which version of events will become public record. The black-and-white Strauss sections contrast with Oppenheimer's more subjective memories, creating a tension between political self-justification and personal reckoning.

The women in Oppenheimer's life sharpen that reckoning. Jean Tatlock represents intellectual intimacy, political danger and unresolved guilt, while Kitty Oppenheimer sees more clearly than many men how the hearing is staged to break her husband. Their scenes show that Oppenheimer's private failures cannot be separated from his public vulnerability. He wants to be both morally serious and admired by power, both detached scientist and historical actor. That divided self is why the ending hurts. He receives late recognition, but recognition cannot undo Hiroshima, Nagasaki, the arms race or the cowardice of institutions that celebrate genius only while it is useful. The final nightmare is not that Oppenheimer was uniquely monstrous. It is that he was human, brilliant and persuadable enough to help build a world no one can fully control.`,
  'dune-part-two': `The film's most important shift is that Paul stops merely surviving and begins using the forces gathered around him. His early reluctance is sincere, but reluctance does not prevent consequences. Each Fremen name, ritual and victory pulls him deeper into a role that others have prepared for him. Stilgar's devotion becomes increasingly comic and tragic at once, because he interprets every denial as proof. Chani's skepticism is therefore essential. She is not rejecting the liberation of her people; she is rejecting the conversion of political freedom into worship of one man.

The Emperor's arrival clarifies the colonial structure behind the story. Arrakis has been treated as a possession by houses that need spice but do not understand the planet or its people. Paul defeats that system by mastering Fremen power, yet the film leaves open whether he has broken empire or simply claimed it with better desert knowledge. His marriage offer to Irulan is practical and cold, a move that turns Chani's love into collateral damage. By the end, Paul's enemies have fallen, but the language around him has changed from resistance to command. That is why the final Fremen launch feels both exhilarating and frightening. A people long oppressed are rising, but they are rising under a messiah who has chosen the path of unavoidable war.`,
  'top-gun-maverick': `The film's emotional design depends on Maverick recognizing that skill alone is no longer enough. In the original Top Gun mythology, he was the instinctive pilot who had to learn teamwork. Here, he must learn a harder form of responsibility: sending younger pilots into danger without using them to resolve his own guilt. Rooster embodies everything Maverick cannot fix about the past. He has Goose's face, his father's musical ease and a justified anger that Maverick cannot answer with charm.

The training sequences work because they are not only demonstrations of aviation. Each failed run reveals a psychological weakness. Rooster hesitates because caution has become his defense against grief. Hangman leaves others exposed because independence has become vanity. Maverick breaks rules because he knows the official version of success is too slow to save anyone. The final mission synthesizes those lessons. The pilots survive by trusting timing, formation and one another under impossible pressure. Maverick and Rooster's stolen F-14 escape is knowingly nostalgic, but it also dramatizes reconciliation: the older pilot's past and the younger pilot's future occupying one cockpit. The movie's pleasure comes from that clean emotional engineering. Everything technical is also personal.`,
  'inception': `Ariadne's role is especially important because she is the viewer's way into the rules and Cobb's conscience inside the story. She learns how to build dreams, but she also sees that Cobb's private dream architecture has become a prison. The elevator of memories, with each floor holding another moment of guilt, shows how grief can become a place someone keeps choosing to visit even when it destroys the present. Mal is frightening because she is not simply an enemy projection. She is Cobb's love reshaped by remorse.

Fischer's story gives the mission an unexpectedly humane target. The team is manipulating him for corporate reasons, yet the idea they plant is emotionally liberating: that he does not have to live as an extension of his father. That ambiguity is central to the film's power. A selfish job produces a real catharsis for the mark, while Cobb's criminal craft becomes the means by which he finally confronts his own lie. The layered dream climax is impressive as a feat of structure, but the real resolution is simpler. Cobb must stop choosing the dead image of Mal over the living children waiting at home. The top keeps spinning in cultural memory because the film understands that emotional certainty can matter more than factual certainty.`,
  'interstellar': `The film repeatedly contrasts survival as biology with survival as relationship. Professor Brand's lie is cruel because it treats human attachment as a tool: he lets Cooper and Murph believe in reunion to keep the mission alive, even though he thinks evacuation is impossible. Yet the ending complicates that cynicism. The bond Brand exploits becomes the very channel through which the missing data travels. Murph solves the equation not because love magically replaces science, but because love keeps her attentive to the watch, the room and the possibility that her father did not abandon her.

Cooper's choices are similarly double-edged. He leaves Earth to save his children, but leaving wounds the child most like him. Tom's tragedy is quieter than Murph's triumph; he becomes rooted in denial, unable to accept that the farm is killing his family. Amelia Brand's faith in Edmunds' planet, mocked as emotional bias, is also partly vindicated. The story does not claim that love is always rational, only that human beings cannot make civilization-saving choices as if they were machines. Its cosmic ending works because the vast machinery of wormholes and black holes ultimately circles back to a child's bedroom, a father saying he was there and a daughter finally able to believe him.`,
  'the-dark-knight': `What makes the story unusually rich is that each major figure represents a different answer to Gotham's crisis. Dent believes public law can still be clean enough to inspire. Gordon believes compromised institutions can be protected by decent people working inside them. Batman believes fear can be turned against criminals, but he also knows his symbol is unstable. The Joker attacks all three answers. He corrupts law through Dent, pressures Gordon through his family and pushes Batman toward invasive surveillance and impossible choices.

The film's set pieces are therefore moral experiments. The bank robbery shows criminal loyalty collapsing under greed. The assassination threats show public order bending under panic. The ferry sequence gives ordinary people the choice the Joker expects them to fail, and their refusal becomes one of the film's few hopeful gestures. But hope is not allowed to remain simple because Dent has already fallen. Batman's final lie is troubling because it preserves civic faith through deception, suggesting that societies sometimes build stability on stories they cannot examine too closely. That complexity is why the ending still resonates. The hero becomes hunted not because truth is unimportant, but because Gotham is not yet strong enough to survive the whole truth.`,
  'parasite': `The film's brilliance is visible in how objects and spaces change meaning. The scholar's rock begins as a symbol of luck and aspiration, then becomes a weapon and a cruel joke about the fantasy of upward mobility. The Parks' living room window frames the garden like a private landscape, while the Kims' window opens onto street-level filth and fumigation. Stairs constantly define who is above and below. Even smell becomes social information, something the wealthy notice without understanding and the poor cannot easily escape.

No character fully controls the system they inhabit. Mrs. Park is naive but not intentionally monstrous. Mr. Park is polite but reveals hard boundaries around class intimacy. The Kims are resourceful and loving, but their plan depends on harming workers not much safer than themselves. Moon-gwang and Geun-sae are not villains invading a clean con; they are the buried truth of the same economy. The birthday massacre feels shocking because the house has been pretending that beauty can contain every contradiction. Once violence erupts, the architecture can no longer hide what it was built over. Ki-woo's final dream of buying the house is moving precisely because the film has taught us how unlikely such escape really is.`,
  'whiplash': `The film leaves viewers arguing because it understands the seductive power of results. If Andrew had collapsed into mediocrity, Fletcher would be easier to condemn within the story's own terms. Instead, the final performance is extraordinary, which forces the audience to confront an uncomfortable question: does artistic greatness justify the method that produced it? The film's answer is not a simple yes. It shows the thrill of excellence while keeping Andrew's isolation, cruelty and self-erasure in view.

Fletcher is dangerous because he mixes truth with abuse. Great art does require discipline, and empty praise can be limiting. But Fletcher uses those facts to excuse humiliation and domination. Andrew, desperate for a story in which suffering proves destiny, becomes the perfect student for that philosophy. The final exchange of looks between drummer and conductor is therefore electrifying and chilling. They understand each other at last, but what they understand may be a closed circuit rather than liberation. Andrew wins the stage and possibly loses the rest of his life to the belief that love, health and ordinary happiness are acceptable sacrifices for one perfect solo. That ambiguity is the movie's lasting sting.`,
  'the-matrix': `The film's mythology works because it turns abstract control into concrete choices. The office cubicle, the interrogation room, the training dojo and the battery fields are all versions of systems that define what bodies are allowed to do. Neo's journey is not only learning that the world is false; it is learning that his own fear has been trained by that false world. Every impossible act begins as a refusal to accept the limits the Matrix taught him.

Morpheus's faith gives Neo a path, but the film avoids making prophecy passive. The Oracle does not simply hand Neo certainty. She tells him what he needs to hear so he will choose Morpheus's life, confront death and become capable of belief through action. Trinity's love is similarly active. It calls Neo back not as magical reward, but as recognition of the self he has finally become. Agent Smith's hatred adds another layer: even the system's enforcer feels trapped by the system. By the end, Neo's flight is more than a power upgrade. It is the visual expression of a mind no longer negotiating with the prison. The film remains potent because that fantasy of awakening still feels personal.`,
  'the-shawshank-redemption': `The supporting stories make Andy's endurance more meaningful. Brooks's release shows how prison can become identity; outside, he is legally free but spiritually stranded. His death is a warning about institutionalization, and it hangs over Red's later parole. Tommy's brief presence offers innocence, energy and proof of Andy's wrongful conviction, which is why Norton's murder of him feels so cruel. The system does not merely ignore truth; it kills truth when truth threatens profit.

Andy's escape is satisfying because it retroactively transforms details into evidence of patience. The rock hammer, the posters, the financial accounts, the polished stones and the Bible all become pieces of a life lived on two levels: one visible to the prison, one inwardly free. Red's narration gives the film its reflective soul. He begins by thinking hope is dangerous inside prison, then learns from Andy that hopelessness is the deeper danger because it cooperates with captivity. The beach ending can be read as idealized, but it is powerful because the film has earned its simplicity. After so much stone, steel and gray routine, blue water becomes the image of a self restored.`,
  'the-godfather': `The film is also a study of how language softens violence. Characters speak of favors, respect, business and family, rarely naming brutality directly unless forced. This vocabulary lets the Corleones see themselves as honorable while maintaining power through fear. Vito's old-world dignity is real in personal terms, but the system around him is still predatory. That tension keeps the film from becoming either pure condemnation or simple glamorization.

Michael's tragedy is that he is very good at the thing he claims not to want. Sonny's temper makes him vulnerable, Fredo's weakness makes him unusable, and Tom's outsider status limits him. Michael has patience, intelligence and emotional control. Once he acts for the family, those gifts find their darkest purpose. Kay's position is crucial because she measures the cost from outside the code. She loves Michael, but she also represents the ordinary moral world he keeps promising to rejoin. The baptism sequence is devastating because it fuses sacred language with murder, making hypocrisy ceremonial. By the time the office door closes, Michael has not only inherited his father's empire. He has perfected its ability to separate love from truth.`,
  'pulp-fiction': `The out-of-order structure does more than seem clever. It changes judgment. Seeing Vincent's death before his final diner scene makes his casual skepticism feel doomed, while Jules's decision to spare Pumpkin and Honey Bunny becomes the film's last word even though it happens earlier in chronology. The structure asks viewers to think less about what happens next and more about what each character does when chance interrupts habit.

Objects also carry playful mystery. The briefcase glows but is never explained, turning criminal desire into almost religious awe. The watch in Butch's story is absurd, sentimental and sacred at once, a family inheritance that sends him back into danger. Mia's overdose shows how quickly cool surfaces can become panic. The film's moral universe is loose, profane and violent, but not empty. Some characters receive opportunities to change, and most do not take them. Jules does. Butch does, in his limited way. Vincent does not. That pattern gives the film more shape than its imitators often notice. Under the style is a question about whether a person can recognize grace when it arrives disguised as accident.`,
  'forrest-gump': `The film's episodic design makes Forrest a witness to history rather than a conventional driver of it. He drifts through Elvis, segregation, Vietnam, protest culture, celebrity, business and political scandal with the same basic openness. This can simplify history, but it also creates the movie's fable-like rhythm. Forrest changes events accidentally while remaining inwardly consistent. The world keeps reinventing itself around him; he keeps responding with loyalty.

Jenny's arc is the film's most painful and debated element. She is sometimes seen through Forrest's limited understanding, which means her trauma is not always explored with the depth it deserves. Still, her repeated departures are not simply rejection of Forrest. They reflect shame, damage and the difficulty of accepting safety after a childhood without it. Lieutenant Dan provides another counterpoint. He believes destiny has been stolen from him when Forrest saves him, then slowly discovers a life beyond the death he expected. Together, these stories make Forrest's simplicity less about ignorance than steadiness. He cannot explain the world better than others, but he often loves more consistently than those who can.`,
  'gladiator': `The film's Rome is less a historically exact institution than a moral arena. Marcus Aurelius imagines a republic restored, Commodus imagines love purchased through spectacle, the Senate imagines influence without courage and the crowd imagines justice through entertainment. Maximus moves through these competing fantasies as a man who would rather be anywhere else. That reluctance gives his heroism weight. He does not seek symbolic power, but symbolic power gathers around him because he keeps behaving with honor where others perform it.

Lucilla's role adds political and emotional complexity. She knows Commodus intimately enough to fear him, but she is trapped by her need to protect her son. Her alliance with Maximus is not only romantic memory; it is a desperate calculation inside a court where every word can become fatal. Proximo also matters because he shows what survival after glory can look like. Once freed by Marcus, he returned to profiting from the arena, yet Maximus awakens his buried respect for courage. The ending works because Maximus's death restores moral imagination to people who had accepted corruption as normal. His body falls, but the idea he carried briefly outlives him.`,
  'mad-max-fury-road': `The wives are sometimes discussed as symbols, but the film gives them distinct attitudes toward freedom. The Splendid Angharad carries moral authority and pregnancy, Capable extends compassion to Nux, Toast is pragmatic with weapons, Cheedo wavers under fear and the Dag holds strange, sharp perception. Their differences keep the escape from becoming abstract. They are not only fleeing Joe; they are learning what agency feels like when no one owns them.

Furiosa's grief over the lost Green Place is one of the film's key emotional pauses. Until that moment, movement itself seems like hope. Discovering that the promised refuge is gone forces a more radical strategy. The return to the Citadel is powerful because it changes the meaning of home. Home is not a pure place waiting untouched in the distance; it is something that may have to be seized, repaired and shared. Max's arc is quieter but important. His hallucinations begin as accusations, then guide him toward one useful act. He cannot undo past failures, but he can help this group survive. In a film of engines and explosions, that is its humane center: damaged people making one another less alone.`,
  'john-wick': `The film's underworld is compelling because it behaves like a society with manners, rituals and consequences. Violence is everywhere, but it is not random. The Continental's rules, the gold coins and the formal language around contracts suggest a civilization beneath ordinary civilization. John once belonged to it completely, then escaped through an impossible task performed for Viggo. That history makes his return feel like a relapse as much as a rampage.

The revenge is satisfying on a genre level, but the film keeps reminding us that John's real enemy is absence. Iosef can be killed, Viggo can be defeated and the stolen car can be recovered, but Helen cannot return and Daisy cannot be unkilled. This is why the ending matters. Taking another dog is not replacement; it is a small refusal to let the violence have the final word. The movie's restraint is part of its elegance. It does not overexplain John's marriage or his past. It gives just enough to understand that the most feared assassin in the room is also a man trying not to disappear into grief.`,
  'avengers-endgame': `The film also works as a meditation on what long-running serial storytelling can do. Many of its emotional beats rely on memory: Tony meeting Howard, Steve seeing Peggy, Thor speaking to Frigga, Peter returning to Tony on the battlefield. These moments mean more because earlier films built the relationships. Endgame uses that accumulated attachment as narrative material, which is why it can feel unwieldy as a standalone film but powerful as a culmination.

Natasha's death is one of the more complicated choices. It gives her sacrifice central importance, but the film moves on quickly because the larger machine has so much to resolve. Thor's depression is treated with humor that does not always land gently, yet his scene with Frigga gives him real compassion. Steve's ending is romantic and controversial, but emotionally consistent with his buried longing for a life not defined by war. Tony's ending is the cleanest: the man who once survived by building armor dies by using ultimate power with his bare hand. The finale's scale is massive, but its meaning rests on that intimate reversal from self-preservation to self-gift.`,
  'spider-man-across-the-spider-verse': `Hobie Brown's role is a clever counterweight to Spider-Society's institutional logic. He looks chaotic, but he sees the authoritarian shape of Miguel's rules faster than many others. His advice and hidden help give Miles tools to escape, reinforcing the film's belief that style and politics are linked. Margo, Peter B. Parker and Jessica Drew each reveal different compromises within the society: affection for Miles, loyalty to order and uncertainty about whether Miguel's fear has become control.

Gwen's arc gives the cliffhanger emotional balance. She begins by running from a father who cannot understand her and from a home where truth seems impossible. By revealing herself and finding that her father's choice changes the supposed canon, she becomes living evidence that Miguel's model may be incomplete. Miles's situation on Earth-42 is therefore not just a twist; it is the consequence of origin itself being displaced. The spider that gave him power also deprived another world of its hero. The sequel's genius is that it refuses to make that fact a reason for shame. It makes it the battlefield where Miles must prove that being an anomaly does not make him a mistake.`,
  'spider-man-into-the-spider-verse': `The film's mentor story is unusually generous. Peter B. Parker is not the perfect hero teaching a novice from above; he is a tired, grieving version of Spider-Man who has lost confidence in his own life. Teaching Miles helps him remember responsibility as something warmer than obligation. Gwen, Noir, Peni and Spider-Ham broaden the myth without turning it into noise because each reflects a different way the Spider-Man idea can survive style, genre and loss.

Kingpin is also more than a large villain. His collider is powered by grief, but it is selfish grief. He wants his family back without accepting that another version of them is not his to steal, and he is willing to endanger countless lives for the fantasy of repair. That contrasts with Miles, who loses Aaron but chooses responsibility rather than possession. The leap of faith works because it gathers every emotional thread: his father's love, Aaron's loss, Peter's lesson and Miles's own artistic identity. When he rises upward while falling, the film turns becoming into an image. It is one of modern animation's clearest expressions of self-trust.`,
  'blade-runner-2049': `The film's emotional ambiguity around Joi is one of its richest elements. She may be programmed to serve K's desires, yet the experiences they share still affect him. Her decision to be transferred to the portable emitter, risking deletion, can be read as simulated devotion or as the closest thing to agency available to her. The later advertisement calling him Joe wounds him because it suggests his intimacy was mass-produced. The film does not solve that pain; it lets it deepen the question of whether artificial origins invalidate real feeling.

Wallace and Luv provide contrasting forms of inhumanity. Wallace speaks like a god but treats life as production capacity. Luv appears controlled and efficient, yet her violence often carries emotion she has no permission to name. K's final choice stands against both. He is not the child, not the miracle and not the center of the revolution. That disappointment frees him from the vanity of destiny. Saving Deckard for Ana becomes meaningful because no prophecy requires it. He dies in snow rather than neon, in quiet rather than spectacle, having made one act of grace that belongs entirely to him.`,
  'la-la-land': `The film's musical numbers trace the changing relationship between fantasy and reality. Early sequences turn Los Angeles into a playground of possibility, where traffic can become choreography and a party can become a doorway into romance. As Mia and Sebastian's careers diverge, the numbers become more interior, carrying longing rather than simple delight. The final montage is the fullest expression of that idea: cinema gives them the life that reality did not, then returns them to the truth.

Sebastian is often criticized for rigidity, and the criticism is fair. His love of jazz can become possessive, as if preserving the music matters more than letting it breathe. But the film also understands why he clings to it. For both characters, art is not a hobby; it is the form their dignity takes. Mia's audition song is moving because it accepts vulnerability as inheritance. She sings for people foolish enough to leap, and the film honors that foolishness without guaranteeing happiness. The final smile between Mia and Sebastian is mature because it contains gratitude, grief and release in one small gesture.`,
  'fight-club': `Project Mayhem is the key to the film's critique. Fight Club begins as an outlet for men who feel numb, but Project Mayhem turns that shared pain into hierarchy. Members lose names, shave heads, repeat slogans and obey orders from the very kind of charismatic authority they claim to reject. This is why Tyler is not the cure for modern emptiness. He is another product, another brand, another fantasy of purity sold to people who want meaning without vulnerability.

Marla's importance grows once Tyler is revealed as a split identity. She is the person who keeps puncturing the narrator's self-mythology because she is too real, too needy and too unimpressed by his performances. His cruelty to her is part of his refusal to accept responsibility for desire and connection. Shooting himself is a violent metaphor for integration: he cannot simply defeat Tyler as an outside enemy; he must damage the fantasy inside himself. The collapsing buildings leave the ending morally unstable. Debt records may fall, but so do the illusions that destruction alone can create a self. The narrator has begun to wake up, but he wakes in ruins he helped make.`,
  'se7en': `John Doe's power comes from preparation and from his understanding of Mills. He does not need to overpower the detectives physically in the end; he needs to arrange a situation where Mills's most human response becomes the final piece of the design. That is what makes the ending so cruel. Love, grief and unborn hope are turned into mechanisms inside a killer's artwork. Somerset sees the trap because he understands symbolic thinking, but understanding does not give him the power to stop it.

Tracy's role may seem small in screen time, yet she gives the film its soul. Without her, Mills would be only impatience and anger. With her, he has a home, a possible child and a future the city has not yet corrupted. Somerset's conversation with her reveals his own buried tenderness, the part of him that has survived cynicism. When the box arrives, the film destroys not only a character but the possibility that innocence can remain untouched by the case. Somerset's final decision to stay "around" is modest but important. He cannot save Mills from wrath, but he also cannot fully abandon a world that still contains people worth mourning.`,
  'dune': `The first film also carefully distinguishes different forms of power. The Atreides have honor and military loyalty, but honor does not protect them from imperial conspiracy. The Harkonnens have brutality and appetite, but they need the Emperor's hidden support. The Bene Gesserit have patience, genetics and myth. The Fremen have ecological knowledge, discipline and a relationship with Arrakis that outsiders mistake for primitiveness. Paul stands at the intersection of all these forces, which is why his future is so dangerous.

Jessica's choices are especially important. By bearing a son instead of the daughter ordered by the Bene Gesserit, she acts from love and ambition, disrupting a centuries-long plan. Her training saves Paul, but it also prepares him to become something no mother can fully control. Duke Leto's death gives Paul emotional motive, yet the visions suggest revenge is only one part of a much larger storm. The ending with Jamis is therefore not a minor duel. It is Paul's initiation into a culture, his first killing and the moment the dream woman becomes real. He enters Fremen life carrying grief, prophecy and the seeds of holy war.`,
  'coco': `The film's emotional intelligence lies in how it separates fame from remembrance. Ernesto is remembered by millions, but his memory is built on theft. Hector is almost forgotten by everyone except the daughter who once loved him, yet his songs carry the truth of family. This contrast turns the adventure into a moral lesson about legacy. Being famous is not the same as being known. Being honored publicly is not the same as being loved truthfully.

Imelda's change matters as much as Miguel's. She is not simply a strict ancestor blocking his dream; she is a woman who built rules around heartbreak because she believed abandonment was the truth. Learning that Hector tried to return and was murdered lets her anger finally find the right target. Miguel's final song to Coco works because it repairs more than one relationship at once: son to mother, husband to wife, living family to dead family, music to memory. The ending's joy is earned by grief. Coco dies, but she dies after restoring Hector to the family story, which means the afterlife becomes reunion rather than disappearance.`,
  'the-fellowship-of-the-ring': `The film also succeeds because it makes the Ring's evil psychological rather than merely magical. It does not turn everyone instantly monstrous. It magnifies what is already present: Bilbo's possessiveness, Boromir's patriotic desperation, even Frodo's growing secrecy. That subtle corruption makes the quest frightening because strength is not enough. In fact, strength can become danger if joined to pride. The smallest characters may be safest precisely because they do not dream of ruling.

Aragorn's hesitation gives the larger mythology personal tension. He is heir to kingship, but he fears repeating Isildur's failure. His relationship with Arwen represents both love and the cost of mortality, while his leadership after Gandalf's fall shows him becoming the man others need before he is ready to claim a crown. Sam's loyalty is simpler and in some ways greater. He does not understand all the politics of Middle-earth, but he understands Frodo. The breaking of the Fellowship is sad, yet it proves the Fellowship's purpose. Each member continues the mission in a different direction, carrying the same promise after physical unity is gone.`,
  'the-return-of-the-king': `Gollum's role in the ending is one of the trilogy's most important moral designs. Frodo and Sam survive partly because Frodo once extended pity to a creature everyone else saw as beyond saving. Gollum does not become good, and mercy does not produce a clean redemption. Yet mercy keeps him alive long enough for his obsession to destroy the Ring when Frodo cannot. The victory therefore rejects simple heroic perfection. No one, not even Frodo, is pure enough to master the Ring at the end.

Sam is the emotional hero of the final journey. He cannot carry the Ring for Frodo, but he can carry Frodo. That distinction expresses the story's deepest idea about friendship: love cannot erase another person's burden, but it can make endurance possible. Aragorn's march on the Black Gate is another form of the same sacrifice, a willingness to spend his life buying time for someone unseen. The long farewell in the Shire then shows the cost of being the one who returns changed. Frodo saved home, but home can no longer fully contain him. The ending is beautiful because it allows both healing and permanent loss to exist together.`,
  'the-green-mile': `The guards' moral position is what makes the story more complicated than a simple miracle tale. Paul, Brutus and the others are not sadists; they try to give condemned men dignity. Yet they still work inside a machine that can execute an innocent man. The film asks whether decency within an unjust system is enough, and its answer is painfully uncertain. Paul's kindness matters, but it does not save Coffey.

Percy represents cruelty protected by connections, but he also exposes the fragility of institutional ethics. Everyone knows he is dangerous, yet the system tolerates him because power shields him. Delacroix's botched execution shows how one malicious person can turn procedure into torture. Coffey's miracles then stand in radical contrast. He heals bodies, exposes truth and absorbs suffering, but he cannot make society just. His desire to die is heartbreaking because it is not despair alone; it is exhaustion from feeling too much of the world's pain. Paul's extended life becomes a witness sentence. He carries proof that grace existed and that he still helped extinguish it.`,
  'one-flew-over-the-cuckoos-nest': `Chief Bromden's perspective gives the story its mythic shape. He pretends to be deaf and mute because invisibility has become survival. The ward has taught him that power cannot be challenged directly, so he disappears inside himself. McMurphy's arrival does not instantly free him; it gradually reminds him that size, voice and desire still exist. The final escape belongs to Chief because he is the one who carries McMurphy's disruptive spirit beyond the institution.

Nurse Ratched's control is frightening because it rarely looks like villainy to the outside world. She uses rules, medication, meetings and shame, all under the language of treatment. The patients' fear of her is not only fear of punishment; it is fear of exposure, of having their weakest places turned into tools against them. McMurphy's party is irresponsible, but it briefly creates a community not defined by diagnosis. Billy's suicide shows how quickly that fragile freedom can be crushed by targeted shame. The ending's mercy killing is painful because Chief refuses to let McMurphy become a trophy of institutional victory. Escape comes through grief, but it comes.`,
  'star-wars-a-new-hope': `The film's clarity is one reason it remains so durable. The Empire is introduced through scale, uniforms and mechanical intimidation, while the Rebellion is introduced through urgency, improvisation and personal courage. Luke's world on Tatooine is small but emotionally necessary. His longing to leave becomes meaningful because leaving costs him the only home he has known. Leia's message turns adventure into responsibility, and the deaths of Owen and Beru remove the possibility of returning unchanged.

Han Solo's arc gives the film its roguish counterpoint. He begins as a man who insists he is only working for money, but the story keeps placing him near people who act from belief. Leia challenges him, Luke admires him and Chewbacca's loyalty humanizes him. His return during the trench run is satisfying because it is a small moral turn rather than a complete personality replacement. Obi-Wan's sacrifice gives Luke a different kind of guidance, shifting mentorship from physical presence to spiritual trust. The final shot of ceremony is simple, but it works because three different kinds of courage have converged: faith, loyalty and rebellion.`,
  'the-empire-strikes-back': `The film's greatness lies in how it frustrates the easy momentum of the first adventure. Luke wants to become a Jedi quickly, but Yoda teaches him that impatience is itself a danger. The famous X-wing lesson is not about lifting an object; it is about Luke's inability to believe before proof. His failure in the cave and his decision to leave Dagobah both show that courage without self-mastery can be reckless.

Han and Leia's story deepens because it moves from banter to sacrifice. Han's charm stops being only defensive when he faces carbon freezing with fear and tenderness. Leia's leadership remains sharp, but her love for Han exposes a private vulnerability the Rebellion rarely allows her. Lando's betrayal and reversal add a political layer: under Empire, even decent people can be coerced into collaboration. Vader's revelation then transforms the saga's moral map. Evil is no longer only external tyranny; it is family, inheritance and a possible future for Luke. The unresolved ending is brave because it leaves every major relationship wounded and every victory deferred.`,
  'joker': `Arthur's fantasies are central because they reveal how badly he needs an audience. His imagined romance with Sophie and imagined approval from Murray are not random delusions; they are emotional survival tools. When those fantasies collapse, he does not gain truth in a healthy sense. He loses the last buffers between humiliation and action. The film's talk-show climax is therefore not only a murder scene. It is Arthur taking control of the medium through which he once begged to be loved.

Gotham's unrest gives Arthur's transformation a public echo, but the film keeps a gap between personal breakdown and political movement. The protesters read the clown killer as a symbol of class anger, while Arthur is focused on his own pain, resentment and performance. That mismatch is part of the danger. A private wound becomes public image, and once the image circulates, it no longer belongs only to the person who created it. The final Arkham scene leaves reality slightly unstable, which suits a character who has turned life into a cruel joke told for an audience he may be inventing as he goes.`
};

Object.entries(MOVIE_PLOT_EXPANSIONS).forEach(([movieId, expansion]) => {
  if (MOVIE_PLOTS[movieId]) {
    MOVIE_PLOTS[movieId] = `${MOVIE_PLOTS[movieId]}\n\n${expansion}`;
  }
});

const OWNER_REVIEW_EXPANSIONS = {
  'oppenheimer': `It is also a strong recommendation for viewers who enjoy films that ask for attention rather than passive consumption. The nonlinear structure, sharp sound design and moral density make it feel closer to a political reckoning than a standard biopic, and that ambition is exactly what gives it staying power.`,
  'dune-part-two': `The supporting craft is just as important: sound, costume and production design make belief feel physical. Even when the film withholds warmth, it offers conviction. I would recommend it most to viewers who want science fiction that treats spectacle as a doorway into politics and myth.`,
  'top-gun-maverick': `The movie also benefits from restraint: it gives audiences legacy beats without burying the new mission under references. Its best quality is confidence. It knows when to be sentimental, when to be silent and when to let aircraft movement carry the drama better than dialogue could.`,
  'inception': `It remains one of the rare modern blockbusters that rewards both emotional viewing and diagram-drawing. You can enjoy it as a sleek heist, revisit it as a grief story or argue about its ending afterward, and all three modes feel intentionally supported.`,
  'interstellar': `Its ambition occasionally outruns its dialogue, but I prefer a film that reaches too far over one that never risks sincerity. The images of time, dust and distance linger because they are tied to a family wound rather than only to cosmic spectacle.`,
  'the-dark-knight': `It is also one of the cleanest examples of theme driving plot. Every major set piece asks what people will do under fear. That unity of action and idea keeps the film sharp even after years of imitation and superhero expansion.`,
  'parasite': `It is the kind of film that becomes richer on rewatch because the setup is so carefully planted. Tiny gestures, spatial details and jokes return later as tragedy. That precision makes its social anger feel earned rather than imposed from outside.`,
  'whiplash': `As a viewing experience, it is almost impossible to ignore: tight, loud, sweaty and morally thorny. I would not call it an endorsement of Fletcher's methods. I would call it a sharp warning about how easily the dream of greatness can excuse harm.`,
  'the-matrix': `The film's influence is obvious, but it still plays as more than an artifact. Its confidence, leather-cool surfaces and sincere liberation myth remain unusually balanced. It is both very much of its time and still flexible enough to feel newly relevant.`,
  'the-shawshank-redemption': `Its accessibility is part of its strength. The film does not hide its emotions, but it earns them through structure, performance and time. For broad audiences, it remains one of the most satisfying dramas about friendship, endurance and earned release.`,
  'the-godfather': `It is also a masterclass in patience. Scenes are allowed to breathe until glances and pauses become threats. That measured rhythm makes the violence more shocking because it arrives from a world that has already normalized power in quieter forms.`,
  'pulp-fiction': `Its influence became so loud that it is easy to forget how carefully made the original is. The film is not just quirky criminals talking. It is a set of moral near-misses arranged so that style, danger and grace keep interrupting each other.`,
  'forrest-gump': `The movie's weaknesses come from the same place as its strengths: it wants to smooth history into an emotional fable. When that smoothing works, the result is deeply affecting. When it does not, the film can feel too neat for the pain it depicts.`,
  'gladiator': `Its appeal is direct but not shallow. The story understands the pleasure of a righteous arena victory, then gives that pleasure a tragic frame. Maximus is compelling because his greatest wish is not to rule, but to be reunited with what power destroyed.`,
  'mad-max-fury-road': `It is also a model of visual storytelling. Viewers can understand alliances, geography and stakes even amid chaos because the filmmaking is so disciplined. The result is a film that feels wild on the surface and almost classical underneath.`,
  'john-wick': `Its later franchise mythology grows from the confidence of this first film, but the original remains special because it is so emotionally clean. It gives just enough world-building to fascinate and just enough grief to keep the action from floating away.`,
  'avengers-endgame': `As cinema, it is uneven; as culmination, it is remarkably effective. Its best scenes understand that audiences are not only watching plot resolution. They are saying goodbye to versions of characters who have occupied popular imagination for more than a decade.`,
  'spider-man-across-the-spider-verse': `It is dense, fast and sometimes almost too much, but the excess fits a story about infinite versions of identity. Beneath the visual fireworks is a clean emotional line: Miles wants to save his father without accepting that pain is destiny.`,
  'spider-man-into-the-spider-verse': `It is also one of the most generous superhero films: funny without cynicism, emotional without heaviness and formally bold without losing clarity. Its message is simple, but the execution makes that simplicity feel newly alive.`,
  'blade-runner-2049': `It is not designed for viewers who need constant plot acceleration, but for those willing to sit with mood and implication, it is deeply rewarding. The film's sadness is precise: it finds humanity in the act of choosing, not in proof of origin.`,
  'la-la-land': `The film's polish can make it seem lighter than it is, but the ending reveals how carefully it has been about memory. It lets viewers mourn an unlived life while still respecting the lives the characters actually built.`,
  'fight-club': `Its danger is part of the point. The movie understands the appeal of Tyler's certainty and then shows how that certainty becomes another prison. Watched carefully, it remains less a manual for rebellion than an autopsy of seductive self-destruction.`,
  'se7en': `Its discipline is brutal. Fincher withholds relief, and the performances keep the horror grounded in fatigue rather than spectacle. The result is a thriller that feels less like a puzzle box than a moral wound being opened scene by scene.`,
  'dune': `For viewers new to the universe, the film can feel like immersion rather than explanation, and that is both its challenge and its strength. It asks the audience to feel the weight of history before every piece of history is fully named.`,
  'coco': `Its final emotional release is famous for a reason: it is simple, specific and completely earned. The film understands that family stories can hurt people when they are false, but they can also heal when truth is restored with love.`,
  'the-fellowship-of-the-ring': `Its practical textures, music and sincere performances help the world feel inhabited rather than merely designed. More importantly, the film never forgets that the fate of Middle-earth depends on friendship, not spectacle alone.`,
  'the-return-of-the-king': `It is maximalist, emotional and occasionally indulgent, but it earns that fullness by carrying three films of loyalty and loss. The ending's sadness is not a flaw. It is the reason the victory feels honest.`,
  'the-green-mile': `The film may be too openly tearful for viewers who prefer restraint, but its compassion is genuine. It creates a space where mercy, faith and injustice collide, then refuses to pretend that witnessing goodness is the same as saving it.`,
  'one-flew-over-the-cuckoos-nest': `It remains compelling because the performances make the ward feel alive with individual fears and desires. The film's politics can be discussed and challenged, but its dramatic insight into shame, authority and awakened dignity still cuts deeply.`,
  'star-wars-a-new-hope': `Its greatness is partly architectural: every scene moves the adventure forward while making the galaxy feel larger. It remains a generous entry point into myth because it gives viewers wonder, danger and character before it asks them to learn lore.`,
  'the-empire-strikes-back': `The film's confidence in unresolved emotion is its secret weapon. It deepens the world by letting heroes fail, lovers separate and family become frightening. That willingness to darken the myth makes the hope of the saga stronger, not weaker.`,
  'joker': `The film is not subtle, but it is committed. Its best value is as an uneasy performance study about someone transforming pain into an identity that finally gets attention. Whether one admires it or resists it, the mood is hard to shake.`
};

Object.entries(OWNER_REVIEW_EXPANSIONS).forEach(([movieId, expansion]) => {
  if (OWNER_REVIEWS[movieId]) {
    OWNER_REVIEWS[movieId].text = `${OWNER_REVIEWS[movieId].text} ${expansion}`;
  }
});

const MOVIE_PLOT_FINAL_TOUCHES = {
  'the-empire-strikes-back': `Another reason the chapter feels complete is that every escape route becomes another form of pressure. The asteroid field does not free Han and Leia; it delays capture. Dagobah does not give Luke power quickly; it exposes his fear. Cloud City does not provide sanctuary; it reveals how the Empire can reach into neutral spaces. By closing on repair rather than triumph, the film makes recovery itself the next adventure.`,
  'star-wars-a-new-hope': `The supporting details also make the fantasy durable: droids bicker like old companions, aliens fill the cantina with casual strangeness and the Force is introduced as spiritual mystery rather than technical system. The film leaves enough unexplained for the galaxy to feel larger than the plot. That openness helps the final victory feel like the first spark of a rebellion, not the end of the story.`,
  'la-la-land': `The city itself functions like a third presence in the relationship. Los Angeles offers auditions, traffic, parties, cheap apartments, old movie houses and clubs that may or may not survive. It promises reinvention while constantly reminding artists how replaceable they are. Mia and Sebastian's romance blooms because they briefly make the city feel personal. Their separation hurts because success returns them to a wider world where love alone cannot schedule a life.`,
  'one-flew-over-the-cuckoos-nest': `The film also pays attention to how quickly the patients begin to perform confidence once someone expects it from them. A card game, a vote, a fishing trip or a joke can become practice for personhood. That is why the tragedy is not only McMurphy's destruction. It is the near-destruction of a fragile community that had started to imagine itself as something other than a collection of cases.`,
  'fight-club': `The narrator's job as a recall coordinator adds another layer to the satire. He already lives inside a system that calculates whether human life is cheaper than corporate repair. Tyler's homemade soap, made from stolen human fat and sold back to the wealthy, turns that disgust into a grotesque joke. The film's world is circular: bodies become products, products become identities and identity finally revolts by trying to burn the system down.`,
  'spider-man-into-the-spider-verse': `The family story keeps the multiverse from becoming only a concept. Jefferson's public hostility toward Spider-Man and private love for Miles create a painful irony, while Aaron's double life shows Miles that charm and danger can live in the same person. Miles's final maturity comes from holding both truths. He can love flawed people, grieve them and still choose the responsibility they could not carry for him.`,
  'gladiator': `The film repeatedly contrasts spectacle with memory. The crowd knows Maximus as a fighter before it knows his grief, and Commodus tries to use games to rewrite public loyalty. Maximus survives by turning the arena into testimony. Every victory says that the emperor did not destroy the man he tried to erase. That is why the final duel feels public and private at once: Rome watches a political contest, while Maximus fights for the dead waiting beyond it.`,
  'joker': `The connection to the Wayne family also reframes Gotham's future without making Bruce the center of this story. Thomas Wayne's coldness, whether or not Arthur's belief about him is true, symbolizes a city where the powerful treat suffering as an inconvenience or a joke. The alley murder of the Waynes shows public chaos producing another orphaned child. Arthur's origin and Batman's origin briefly touch, not as destiny, but as two wounds made by the same broken city.`,
  'the-green-mile': `Mr. Jingles adds a small but important note of wonder. Delacroix's love for the mouse is comic at first, then deeply human, a reminder that tenderness survives even on death row. When the mouse lives beyond ordinary limits, the miracle becomes humble rather than grand. Coffey's power touches the smallest creature and the gravest illness, suggesting that grace is not selective. The tragedy is that such grace appears in a place designed to end lives on schedule.`,
  'coco': `The ofrenda becomes the story's central image because it shows memory as something active. Photos, food, flowers and stories are not decorations; they are bridges. Miguel begins by wanting a stage, but he ends by understanding an altar. That shift matures his dream. He can still be a musician, but music now belongs to family truth rather than private rebellion or public applause.`,
  'the-fellowship-of-the-ring': `Howard Shore's music reinforces that movement from home to legend. Themes for the Shire, the Ring, the Fellowship and Mordor carry emotional memory across locations, so the viewer feels what is being lost and what is being threatened. The film's craft is therefore not only visual scale. It is tonal continuity: every sword, song, map and farewell reminds us that Middle-earth is a lived world, not just a quest board.`,
  'pulp-fiction': `The film's humor is inseparable from danger. Characters talk about food, foot massages, television pilots and awkward etiquette while death waits nearby. That contrast does not make violence harmless; it makes the criminals feel absurdly human. They are not masterminds in a sleek underworld. They are workers, addicts, lovers, cowards and believers moving through a day where one accident can reveal who is ready to change and who is not.`,
  'blade-runner-2049': `Deckard's return also avoids easy nostalgia. He is not brought back to dominate the sequel, but to embody the cost of an earlier love. His years in isolation are a sacrifice made to keep his child hidden, and his reunion with Ana is powerful because K chooses to deliver it while receiving nothing public in return. The sequel's inheritance is therefore emotional rather than merely referential.`,
  'forrest-gump': `The bench structure gives the film its storytelling innocence. Forrest offers his life to whoever sits beside him, not as a lesson he has mastered but as memories he is willing to share. Some listeners leave, some stay and some do not know what to make of him. That casual framing suits a life shaped by chance encounters, where meaning is found afterward in the telling.`,
  'john-wick': `The home invasion is filmed as a violation of sanctuary, which is why the revenge feels ritualistic rather than random. John had built a civilian life around quiet rooms, a car, photographs and the puppy's presence. Iosef does not merely attack a man; he breaks the fragile architecture of mourning. The rest of the film is John moving back through the architecture of violence he once escaped.`,
  'the-return-of-the-king': `The coronation scene gives the hobbits public honor, but the quieter return to the Shire shows the gap between public gratitude and private healing. No parade can fully explain what Frodo carried. Sam can marry, garden and continue the life they saved, while Frodo writes and prepares to leave. The contrast is not resentment. It is the story's mature understanding that different wounds require different forms of peace.`,
  'the-matrix': `The crew of the Nebuchadnezzar also gives the abstract rebellion a human scale. Tank, Dozer, Switch, Apoc and Mouse are not developed equally, but their deaths matter because awakening is collective, not just Neo's private upgrade. Cypher's betrayal hurts for the same reason. He proves that truth without hope can become unbearable. The film's liberation myth therefore includes a warning: people need reality, but they also need a reason to survive it.`
};

Object.entries(MOVIE_PLOT_FINAL_TOUCHES).forEach(([movieId, expansion]) => {
  if (MOVIE_PLOTS[movieId]) {
    MOVIE_PLOTS[movieId] = `${MOVIE_PLOTS[movieId]}\n\n${expansion}`;
  }
});

const OWNER_REVIEW_FINAL_TOUCHES = {
  'inception': `That blend of structure and feeling is why it remains easy to recommend beyond puzzle-loving audiences.`,
  'interstellar': `Even its messier impulses feel connected to a sincere desire to make cosmic scale emotionally legible.`,
  'the-dark-knight': `It is serious without becoming airless, and its best ideas are carried by action rather than speeches.`,
  'parasite': `It is a rare crowd-pleaser that becomes more unsettling the more precisely you understand its design.`,
  'whiplash': `That tension makes it ideal for discussion after viewing, which is one mark of a lasting drama.`,
  'the-matrix': `It is smart enough for analysis and clean enough to remain pure entertainment.`,
  'the-shawshank-redemption': `Its emotional directness is not a weakness; it is the source of its unusually broad staying power.`,
  'the-godfather': `Few films make moral decline feel so quiet, intimate and inevitable.`,
  'pulp-fiction': `That combination of playfulness and consequence is what keeps it alive after so many copies.`,
  'forrest-gump': `Its best scenes work because they treat decency as active endurance, not passive innocence.`,
  'gladiator': `That emotional simplicity gives the film the force of a legend told around grief.`,
  'mad-max-fury-road': `It is one of the clearest modern examples of action revealing character instead of interrupting it.`,
  'john-wick': `For action fans, it is lean, elegant and surprisingly mournful underneath the precision.`,
  'avengers-endgame': `That communal goodbye is the movie's real achievement, even when the plot mechanics wobble.`,
  'spider-man-across-the-spider-verse': `It is ambitious enough to risk overload, and most of that risk pays off.`,
  'spider-man-into-the-spider-verse': `Its confidence in Miles makes the familiar origin structure feel newly personal.`,
  'blade-runner-2049': `Its quiet ending is one of the most moving choices in recent studio science fiction.`,
  'la-la-land': `Its sadness is graceful because it understands that gratitude and regret can coexist.`,
  'fight-club': `That unstable charge is exactly why it should be watched critically, not worshipped blindly.`,
  'se7en': `It is masterful, but deliberately punishing; the discomfort is part of the design.`,
  'dune': `It is best approached as a solemn first movement rather than a closed adventure.`,
  'coco': `It earns tears without cheapness because every emotional payoff is planted in story logic.`,
  'the-fellowship-of-the-ring': `It remains deeply rewatchable because its wonder is always tied to emotional stakes.`,
  'the-return-of-the-king': `Its grandeur works because the smallest acts of loyalty remain the most important.`,
  'the-green-mile': `Its sincerity may be old-fashioned, but the feeling behind it is hard to dismiss.`,
  'one-flew-over-the-cuckoos-nest': `Its final image still carries the release of a story refusing total defeat.`,
  'star-wars-a-new-hope': `It is a near-perfect reminder that simple storytelling can still feel expansive.`,
  'the-empire-strikes-back': `That emotional patience is why many viewers still consider it the saga's high point.`,
  'joker': `It is strongest when read as a warning about performance replacing personhood.`
};

Object.entries(OWNER_REVIEW_FINAL_TOUCHES).forEach(([movieId, expansion]) => {
  if (OWNER_REVIEWS[movieId]) {
    OWNER_REVIEWS[movieId].text = `${OWNER_REVIEWS[movieId].text} ${expansion}`;
  }
});

const MOVIE_PLOT_MINIMUM_POLISH = {
  'the-empire-strikes-back': `That restraint gives the final image a quiet promise: the heroes are hurt, but the story is still moving toward rescue.`
};

Object.entries(MOVIE_PLOT_MINIMUM_POLISH).forEach(([movieId, expansion]) => {
  if (MOVIE_PLOTS[movieId]) {
    MOVIE_PLOTS[movieId] = `${MOVIE_PLOTS[movieId]}\n\n${expansion}`;
  }
});

const OWNER_REVIEW_MINIMUM_POLISH = {
  'star-wars-a-new-hope': `Its optimism feels earned because danger remains present throughout the adventure.`,
  'the-empire-strikes-back': `It respects young viewers while trusting them with genuine emotional uncertainty.`,
  'spider-man-into-the-spider-verse': `That emotional clarity makes the stylistic experimentation feel warm rather than distant.`,
  'la-la-land': `It is romantic precisely because it refuses to falsify the ending.`,
  'the-fellowship-of-the-ring': `Its sincerity remains one of its greatest strengths.`,
  'the-return-of-the-king': `That honesty gives the farewell its lasting emotional weight.`,
  'one-flew-over-the-cuckoos-nest': `The result is painful, humane and dramatically unforgettable.`
};

Object.entries(OWNER_REVIEW_MINIMUM_POLISH).forEach(([movieId, expansion]) => {
  if (OWNER_REVIEWS[movieId]) {
    OWNER_REVIEWS[movieId].text = `${OWNER_REVIEWS[movieId].text} ${expansion}`;
  }
});

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
let reviewDraftRating = 0;
let toastTimer = null;
let lastModalTrigger = null;
let lastModalMovieId = null;
let scrollRevealObserver = null;

const posterCache = new Map();
const backdropCache = new Map();
const movieViewRenderers = new Set();

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  setupActiveNav();
  setupMobileNav();
  setupThemeToggle();
  setupStaticIcons();
  setupMovieDetailPage();
  ensureModal();
  renderMovieAreas();
  setupSlider();
  setupReviewPage();
  renderHomeReviews();
  setupContactPage();
  renderStats();
  setupScrollReveal();
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleKeyboard);
  document.addEventListener('error', handleImageError, true);
  document.body.classList.add('is-ready');
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
    story: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z"/><path d="M8 6h8M8 10h8M8 14h5"/>',
    quote: '<path d="M8 11H4a4 4 0 0 1 4-4v10H4v-6"/><path d="M20 11h-4a4 4 0 0 1 4-4v10h-4v-6"/>',
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
  const theme = document.documentElement.dataset.theme || saved || 'dark';
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

function applyRevealTargets(root = document) {
  const targets = root.querySelectorAll('.movie-card, .review-item, .favorite-mini, .stat-card, .section-heading, .form-panel, .contact-info, .story-panel, .owner-panel');
  targets.forEach((target) => target.classList.add('reveal'));
}

function setupScrollReveal() {
  applyRevealTargets();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal:not(.is-revealed)').forEach((target) => target.classList.add('is-revealed'));
    return;
  }

  if (!scrollRevealObserver) {
    scrollRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        scrollRevealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }

  document.querySelectorAll('.reveal:not(.is-revealed)').forEach((target) => scrollRevealObserver.observe(target));
}


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
        <div class="slide-actions">
          <button class="primary-btn" type="button" data-action="details" data-movie-id="${movie.id}">
            ${icon('details', 'button-icon')}<span>View Details</span>
          </button>
          <a class="secondary-btn hero-story-btn" href="${moviePageUrl(movie.id)}">
            ${icon('story', 'button-icon')}<span>Full Story</span>
          </a>
        </div>
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

    if (renderType === 'top-rated') {
      const movies = sortMovies(MOVIES, 'rating').slice(0, 6);
      renderMovieGrid(container, movies);
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
      const searchable = [
        movie.title,
        movie.director,
        movie.cast,
        movie.genres.join(' '),
        movie.review
      ].join(' ').toLowerCase();
      const matchesTerm = !term || searchable.includes(term);
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
  applyRevealTargets(container);
  setupScrollReveal();
}

function movieCardMarkup(movie) {
  const genres = movie.genres.map((genre) => `<span class="genre-tag">${escapeHTML(genre)}</span>`).join('');
  const snippet = truncateText(movie.review, 118);

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
        <p class="movie-snippet">${escapeHTML(snippet)}</p>
        <div class="card-actions">
          ${favoriteButtonMarkup(movie.id)}
          ${ratingGroupMarkup(movie.id)}
        </div>
        <button class="secondary-btn details-btn" type="button" data-action="details" data-movie-id="${movie.id}">
          ${icon('details', 'button-icon')}<span>View Details</span>
        </button>
        <a class="secondary-btn details-btn story-btn" href="${moviePageUrl(movie.id)}">
          ${icon('story', 'button-icon')}<span>Full Story</span>
        </a>
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

function moviePageUrl(movieId) {
  return `movie.html?id=${encodeURIComponent(movieId)}`;
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
    applyRevealTargets(list);
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
  modal.classList.remove('closing');
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
        <a class="secondary-btn modal-story-link" href="${moviePageUrl(movie.id)}">
          ${icon('story', 'button-icon')}<span>Read Full Story and Owner Review</span>
        </a>
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
  if (modal.classList.contains('closing')) return;

  modal.classList.add('closing');

  const finish = () => {
    modal.hidden = true;
    modal.classList.remove('closing');
    document.body.classList.remove('modal-open');
    lastModalMovieId = null;

    if (lastModalTrigger && typeof lastModalTrigger.focus === 'function' && document.contains(lastModalTrigger)) {
      lastModalTrigger.focus();
    }
    lastModalTrigger = null;
    modal.removeEventListener('animationend', finish);
  };

  modal.addEventListener('animationend', finish);
  window.setTimeout(finish, 300);
}

function getReviewQuote(movieId) {
  return getAllReviews().find((review) => review.movieId === movieId);
}

function getFullPlot(movieId) {
  const movie = findMovie(movieId);
  return MOVIE_PLOTS[movieId] || (movie ? movie.summary : 'Full plot is not available yet.');
}

function getOwnerReview(movieId) {
  const movie = findMovie(movieId);
  return OWNER_REVIEWS[movieId] || {
    rating: movie ? Math.round(movie.rating) : 4,
    verdict: movie ? movie.review : 'A thoughtful movie worth discussing.',
    text: movie ? movie.review : 'The CineScope editor has not added a full owner review for this title yet.'
  };
}

/* ---------- Dedicated movie story page ---------- */
function setupMovieDetailPage() {
  const mount = document.querySelector('[data-movie-detail]');
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const movieId = params.get('id');
  const movie = findMovie(movieId);

  if (!movie) {
    document.title = 'CineScope Review | Movie not found';
    mount.innerHTML = `
      <section class="page-hero compact-hero">
        <div class="page-hero-inner">
          <p class="eyebrow">Not found</p>
          <h1>Movie not found</h1>
          <p>The movie you are looking for does not exist in the CineScope library or the link may be broken.</p>
          <a class="primary-btn not-found-link" href="popular.html">${icon('film', 'button-icon')}<span>Browse movie library</span></a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `CineScope Review | ${movie.title} Full Story`;
  mount.innerHTML = movieDetailMarkup(movie);

  const hero = mount.querySelector('[data-detail-hero]');
  if (hero) {
    hero.style.setProperty('--detail-backdrop', `url("${getBackdrop(movie)}")`);
  }
}

function movieDetailMarkup(movie) {
  const ownerReview = getOwnerReview(movie.id);
  const genres = movie.genres.map((genre) => `<span class="genre-tag">${escapeHTML(genre)}</span>`).join('');
  const userRating = Number(savedRatings[movie.id] || 0);
  const relatedMovies = getRelatedMovies(movie);

  return `
    <section class="movie-detail-hero" data-detail-hero>
      <div class="movie-detail-hero-inner">
        <a class="text-link back-link" href="popular.html">${icon('film', 'button-icon')}<span>Back to library</span></a>
        <div class="movie-detail-layout">
          <div class="detail-poster">
            <img src="${getPoster(movie)}" alt="${escapeHTML(movie.title)} poster" data-movie-image="${movie.id}">
          </div>
          <div class="detail-copy">
            <p class="eyebrow">Full spoiler story</p>
            <h1>${escapeHTML(movie.title)}</h1>
            <div class="detail-meta-row">
              <span class="pill">${movie.year}</span>
              <span class="pill">${escapeHTML(movie.runtime)}</span>
              <span class="pill">${movie.rating.toFixed(1)} critic rating</span>
            </div>
            <div class="genre-row">${genres}</div>
            <p class="detail-tagline">${escapeHTML(movie.summary)}</p>
            <div class="detail-actions">
              ${favoriteButtonMarkup(movie.id)}
              ${ratingGroupMarkup(movie.id)}
              <span class="user-rating-label" data-user-rating-label data-movie-id="${movie.id}">
                ${userRating ? `Your rating: ${userRating}/5` : 'Your rating: not rated yet'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell movie-story-shell">
      <div class="story-grid">
        <article class="story-panel">
          <div class="section-heading compact-heading">
            <div>
              <p class="eyebrow">Spoiler complete</p>
              <h2>Full Story From Beginning to Ending</h2>
            </div>
          </div>
          <p class="spoiler-note">${icon('details', 'button-icon')} This section reveals the major events and ending of the film.</p>
          <div class="story-text">${plotParagraphsMarkup(getFullPlot(movie.id))}</div>
        </article>

        <aside class="owner-panel">
          <p class="eyebrow">Owner's review</p>
          <h2>CineScope Take</h2>
          <div class="owner-score" aria-label="${ownerReview.rating} out of 5">
            <span>${starsText(ownerReview.rating)}</span>
            <strong>${ownerReview.rating}/5</strong>
          </div>
          <blockquote class="owner-verdict">
            ${icon('quote', 'quote-icon')}<span>${escapeHTML(ownerReview.verdict)}</span>
          </blockquote>
          <p>${escapeHTML(ownerReview.text)}</p>
          <div class="fact-grid detail-facts">
            <div class="fact">${icon('director', 'fact-icon')}<span>Director</span><strong>${escapeHTML(movie.director)}</strong></div>
            <div class="fact">${icon('cast', 'fact-icon')}<span>Cast</span><strong>${escapeHTML(movie.cast)}</strong></div>
          </div>
          <a class="primary-btn owner-review-cta" href="reviews.html">${icon('message', 'button-icon')}<span>Write Your Review</span></a>
        </aside>
      </div>
    </section>

    <section class="section-shell section-stack related-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Keep exploring</p>
          <h2>Related Movies</h2>
        </div>
        <a class="text-link" href="popular.html">Browse all</a>
      </div>
      <div class="movie-grid compact-grid">${relatedMovies.map(movieCardMarkup).join('')}</div>
    </section>
  `;
}

function plotParagraphsMarkup(plot) {
  return String(plot || '')
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join('');
}

function getRelatedMovies(movie) {
  return getPopularMovies()
    .filter((candidate) => candidate.id !== movie.id && candidate.genres.some((genre) => movie.genres.includes(genre)))
    .slice(0, 4);
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
    const rating = reviewDraftRating;
    const text = form.querySelector('[data-review-text]').value.trim();

    if (!name || !movieId || !rating || !text) return;

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
    reviewDraftRating = 0;
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
  applyRevealTargets(list);
  renderStats();
  renderHomeReviews();
  setupScrollReveal();
}

function renderHomeReviews() {
  const list = document.querySelector('[data-home-reviews]');
  if (!list) return;

  const empty = document.querySelector('[data-home-reviews-empty]');
  const reviews = getAllReviews().slice(0, 3);

  list.innerHTML = reviews.length
    ? reviews.map(homeReviewMarkup).join('')
    : '';
  applyRevealTargets(list);
  if (empty) empty.hidden = reviews.length > 0;
  setupScrollReveal();
}

function homeReviewMarkup(review) {
  const movie = findMovie(review.movieId);
  const title = movie ? movie.title : 'Unknown movie';
  const poster = movie ? getPoster(movie) : '';
  const posterMarkup = movie
    ? `<button class="review-thumb" type="button" data-action="details" data-movie-id="${movie.id}" aria-label="View details for ${escapeHTML(title)}">
        <img src="${poster}" alt="${escapeHTML(title)} poster" loading="lazy" data-movie-image="${movie.id}">
      </button>`
    : '<div class="review-thumb review-thumb-empty" aria-hidden="true"></div>';

  return `
    <article class="review-item review-feature">
      ${posterMarkup}
      <div class="review-feature-body">
        <div class="review-top">
          <div>
            <h3>${escapeHTML(title)}</h3>
            <div class="review-movie">${escapeHTML(review.author)} &bull; ${formatDate(review.createdAt)}</div>
          </div>
          <div class="review-stars" aria-label="${review.rating} out of 5">${starsText(review.rating)}</div>
        </div>
        <p>${escapeHTML(truncateText(review.text, 150))}</p>
      </div>
    </article>
  `;
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
  renderHomeReviews();
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

  // Contact message viewer
  const toggleButton = document.querySelector('[data-toggle-contacts]');
  const messagesContainer = document.querySelector('[data-contact-messages]');
  const messagesList = document.querySelector('[data-contact-messages-list]');
  const clearButton = document.querySelector('[data-clear-contacts]');

  function renderContactMessages() {
    if (!messagesList) return;
    const messages = readStorage(STORAGE_KEYS.contacts, []);
    if (messages.length === 0) {
      messagesList.innerHTML = '<p class="empty-state">No saved messages yet.</p>';
      return;
    }
    messagesList.innerHTML = messages.map((msg) => `
      <article class="contact-message">
        <div class="contact-message-header">
          <strong>${escapeHTML(msg.name || 'Anonymous')}</strong>
          <span>${escapeHTML(msg.email || '')}</span>
          <time>${formatDate(msg.createdAt)}</time>
        </div>
        <p class="contact-message-subject">${escapeHTML(msg.subject || '')}</p>
        <p>${escapeHTML(msg.message || '')}</p>
      </article>
    `).join('');
  }

  if (toggleButton && messagesContainer) {
    toggleButton.addEventListener('click', () => {
      const isHidden = messagesContainer.hidden;
      messagesContainer.hidden = !isHidden;
      if (isHidden) {
        renderContactMessages();
        toggleButton.querySelector('span')?.remove();
        toggleButton.innerHTML = '<span>Hide saved messages</span>';
      } else {
        toggleButton.innerHTML = '<span>View saved messages</span>';
      }
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      writeStorage(STORAGE_KEYS.contacts, []);
      renderContactMessages();
      showToast('All messages cleared.');
    });
  }
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
  image.closest('.movie-card, .favorite-mini, .modal-poster, .review-feature')?.classList.add('has-image-fallback');
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

function truncateText(value, maxLength) {
  const text = String(value || '').trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}...`;
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
