import React from 'react';
import GameItem from "../../components/GameItem/GameItem";
import './HomePage.css'

const HomePage = () => {

    const GAMES = [
        {
            image: '/game-covers/forza_5.jpeg',
            title: 'Forza Horizon 5',
            genres: ['Гонки', 'Симулятор', 'Открытый мир'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
            image: '/game-covers/battlefield_2042.jpg',
            title: 'Battlefield 2042',
            genres: ['Экшен', 'Шутер', 'Война'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
        },
        {
            image: '/game-covers/life_is_strange_true_colors.jpeg',
            title: 'Life is Strange True Colors',
            genres: ['Глубокий сюжет', 'Протагонистка'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
        },
        {
            image: '/game-covers/gta_v.jpeg',
            title: 'Grand Theft Auto V',
            genres: ['Открытый мир', 'Экшен'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
        },
        {
            image: '/game-covers/rainbow_siege.jpeg',
            title: 'Tom Clancy\'s Rainbow Six® Siege',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Тактика', 'Шутер'],
            price: 982,
            id: 5,
            description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
        },
        {
            image: '/game-covers/assassins_creed_valhalla.png',
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
        {
            image: '/game-covers/TheWitcher3.jpg',
            title: 'The Witcher 3: Wild Hunt',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/c0i88t0Kacs',
            price: 2900,
            id: 7,
            description: 'Ведьмак 3: Дикая Охота» — компьютерная игра от третьего лица в жанре action/RPG. Игрок играет за Геральта из Ривии, охотника на чудовищ.'
        },
        {
            image: '',
            title: 'Atom RPG',
            genres: ['РПГ', 'Исследования'],
            video: '//www.youtube.com/embed/ad7UssUeaa8',
            price: 133,
            id: 9,
            description: ''
        },
        {
            image: '',
            title: 'Atom RPG: Trudograd',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 10,
            description: ''
        },
        {
            image: '',
            title: 'Batman: Arkham Knight',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 11,
            description: ''
        },
        {
            image: '',
            title: 'Cyberpunk 2077',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 12,
            description: ''
        },
        {
            image: '',
            title: 'Deathloop',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 13,
            description: ''
        },
        {
            image: '',
            title: 'Deus Ex: Mankind Divided',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 14,
            description: ''
        },
        {
            image: '',
            title: 'Dishonored 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 15,
            description: ''
        },
        {
            image: '',
            title: 'Dishonored',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 16,
            description: ''
        },{
            image: '',
            title: 'Dying light 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 17,
            description: ''
        },
        {
            image: '',
            title: 'Fallout 4',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 18,
            description: ''
        },
        {
            image: '',
            title: 'Fallout: New Vegas',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 19,
            description: ''
        },
        {
            image: '',
            title: 'Alie: Isolation',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 20,
            description: ''
        },
        {
            image: '',
            title: 'Assassin’s Creed Odyssey',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 21,
            description: ''
        },
        {
            image: '',
            title: 'Assassin’s Creed Origins',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 22,
            description: ''
        },
        {
            image: '',
            title: 'Dark Souls 3',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 23,
            description: ''
        },
        {
            image: '',
            title: 'Dark Souls 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 24,
            description: ''
        },
        {
            image: '',
            title: 'Dark Souls',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 25,
            description: ''
        },
        {
            image: '',
            title: 'Divinity: Original Sin',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 26,
            description: ''
        },
        {
            image: '',
            title: 'Divinity: Original Sin 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 27,
            description: ''
        },
        {
            image: '',
            title: 'Elden Ring',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 28,
            description: ''
        },
        {
            image: '',
            title: 'The Evil Within 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 29,
            description: ''
        },
        {
            image: '',
            title: 'Fallout 76',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 30,
            description: ''
        },
        {
            image: '',
            title: 'Far Cry 3',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 31,
            description: ''
        },
        {
            image: '',
            title: 'Far Cry 4',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 32,
            description: ''
        },
        {
            image: '',
            title: 'Far Cry 5',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 33,
            description: ''
        },
        {
            image: '',
            title: 'Far Cry 6',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 34,
            description: ''
        },
        {
            image: '',
            title: 'Injustice 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 35,
            description: ''
        },
        {
            image: '',
            title: 'Injustice: Gods Among Us',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 36,
            description: ''
        },
        {
            image: '',
            title: 'Mass Effect 3',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 37,
            description: ''
        },
        {
            image: '',
            title: 'Metro 2033',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 38,
            description: ''
        },
        {
            image: '',
            title: 'Metro 2033 Last Light',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 39,
            description: ''
        },
        {
            image: '',
            title: 'Metro Exodus',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 40,
            description: ''
        },
        {
            image: '',
            title: 'Middle-Earth: Shadow of Mordor',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 41,
            description: ''
        },
        {
            image: '',
            title: 'Middle-Earth: Shadow of War',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 42,
            description: ''
        },
        {
            image: '',
            title: 'Pathfinder: Kingmaker',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 43,
            description: ''
        },
        {
            image: '',
            title: 'Pathfinder: Wrath of the Righteous',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 44,
            description: ''
        },
        {
            image: '',
            title: 'Prey',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 45,
            description: ''
        },
        {
            image: '',
            title: 'Rage 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 46,
            description: ''
        },
        {
            image: '',
            title: 'Resident Evil: 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 47,
            description: ''
        },
        {
            image: '',
            title: 'Rise of The Tomb Rider',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 48,
            description: ''
        },
        {
            image: '',
            title: 'Shadow of the Tomb Rider',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 49,
            description: ''
        },
        {
            image: '',
            title: 'Satisfactory',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 50,
            description: ''
        },
        {
            image: '',
            title: 'Sid Meier`s Civilization VI',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 51,
            description: ''
        },
        {
            image: '',
            title: 'Sniper Elite 4',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 52,
            description: ''
        },
        {
            image: '',
            title: 'Subnautica',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 53,
            description: ''
        },
        {
            image: '',
            title: 'Subnautica: Below Zero',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 54,
            description: ''
        },
        {
            image: '',
            title: 'Tom Clancy`s The Division',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 55,
            description: ''
        },
        {
            image: '',
            title: 'Wasteland 3',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 56,
            description: ''
        },
        {
            image: '',
            title: 'Watch Dog`s',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 57,
            description: ''
        },
        {
            image: '',
            title: 'Watch Dog`s 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 58,
            description: ''
        },
        {
            image: '',
            title: 'We Happy Few',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 59,
            description: ''
        },
        {
            image: '',
            title: 'Wolfenstein: The New Order',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 60,
            description: ''
        },
        {
            image: '',
            title: 'Wolfenstein II: The New Colossus',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 61,
            description: ''
        },
        {
            image: '',
            title: 'XCOM: Enemy Unknown',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 62,
            description: ''
        },
        {
            image: '',
            title: 'XCOM 2',
            genres: ['РПГ', 'Исследования'],
            video: '',
            price: 133,
            id: 63,
            description: ''
        },
    ]

    return (
        <div className='homepage'>
            {GAMES.map(game => <GameItem title={game.title} img={game.image} game={game} key={game.id}/>)}
        </div>
    );
};

export default HomePage;
