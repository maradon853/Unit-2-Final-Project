import { Sign } from "./sign";

//array of zodiac signs used in signsComponent and rulingPlanetComponent
export const SIGNS: Sign[] = [
    new Sign("aries", "march 21", "april 20", "fire", "mars", "cardinal", "the emperor", 
    "Mars is the fourth planet from the sun. Iron oxide gives the surface a red appearance. In astrology it symbolizes action and assertion. Mars rules both Aries and Scorpio."),
    new Sign("taurus", "april 21", "may 21", "earth", "venus", "fixed", "the hierophant", 
    "Venus is the second planet from the sun. It appears the largest in the sky because of its proximity to earth. In astrology it symbolizes pleasure and love. Venus rules both Taurus and Libra."),
    new Sign("gemini", "may 22", "june 21", "air", "mercury", "mutable", "the lovers", 
    "Mercury is the closest planet to the sun, and the smallest planet in the solar system. It appears to orbit backwards (retrograde) three times a year, though this is an optical illusion. In astrology it symbolizes learning and communication. Mercury rules both Gemini and Virgo."),
    new Sign("cancer", "june 22", "july 22", "water", "the moon", "cardinal", "the chariot", 
    "While not technically a planet, the moon is a natural satellite to our home planet, Earth. In astrology it symbolizes protection and instinct."),
    new Sign("leo", "july 23", "august 22", "fire", "the sun", "fixed", "strength", 
    "While not technically a planet, the sun is a star that takes up most of the mass of our solar system. In astrology it symbolizes identity and life purpose."),
    new Sign("virgo", "august 23", "september 22", "earth", "mercury", "mutable", "the hermit", 
    "Mercury is the closest planet to the sun, and the smallest planet in the solar system. It appears to orbit backwards (retrograde) three times a year, though this is an optical illusion. In astrology it symbolizes learning and communication. Mercury rules both Gemini and Virgo."),
    new Sign("libra", "september 23", "october 22", "air", "venus", "cardinal", "justice", 
    "Venus is the second planet from the sun. Because of its proximity to earth, it appears the largest in the sky. In astrology it symbolizes pleasure and love. Venus rules both Taurus and Libra."),
    new Sign("scorpio", "october 23", "november 21", "water", "mars & pluto", "fixed", "death", 
    "Scorpio is one of three zodiac signs that has two ruling planets. While Mars is the next planet after earth, Pluto is the farthest away. Pluto has also been demoted to a dwarf planet by astronomers. In astrology Mars symbolizes action and assertion, while Pluto symbolizes transformation and power. Mars rules both Aries and Scorpio."),
    new Sign("sagittarius", "november 22", "december 21", "fire", "jupiter", "mutable", "temperance", 
    "Jupiter is the fifth planet from the sun, and also the largest. It is mostly made of gas. With an orbit of twelve years, it spends about a year in each zodiac sign. In astrology it symbolizes opportunity and growth. Jupiter rules both Sagittarius and Pisces."),
    new Sign("capricorn", "december 22", "january 19", "earth", "saturn", "cardinal", "devil", 
    "Saturn is the sixth planet from the sun and is known for its complex ring system. It is the outermost planet visible to the naked eye. In astrology it symbolizes maturity and authority. Saturn rules both Capricorn and Aquarius."),
    new Sign("aquarius", "january 20", "february 18", "air", "saturn & uranus", "fixed", "the star", 
    "Aquarius is one of three zodiac signs that has two ruling planets. While Saturn is known for its rings, Uranus is known for spinning on its side parallel to its orbit. In astrology Saturn symbolizes maturity and authority, and Uranus symbolizes liberation and change. Saturn rules both Aquarius and Capricorn."),
    new Sign("pisces", "february 19", "march 20", "water", "jupiter & neptune", "mutable", "the moon", 
    "Pisces is one of three zodiac signs that has two ruling planets. While Jupiter is the first of the gas planets, Neptune is the last one, eighth from the sun. In astrology Jupiter symbolizes opportunity and growth, and Neptune symbolizes transcendence and imagination. Jupiter rules both Sagittarius and Pisces.")  
];