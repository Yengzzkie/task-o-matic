import notesPNG from '../assets/notes.png';

export default function homeContent() {
    const hero = document.createElement('div');
    hero.className = 'hero';
    const heroTitle = document.createElement('h1');
    const slogan = document.createElement('p');

    const heroImage = new Image();
    heroImage.src = notesPNG;

    heroTitle.textContent = 'Task-O\'-Matic';
    slogan.textContent = 'Effortless Note-taking, Anytime, Anywhere with Task-O\'-Matic';

    hero.append(heroTitle, slogan, heroImage,)

    return hero;
}