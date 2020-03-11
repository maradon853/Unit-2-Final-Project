import { Sign } from "./sign";

export const SIGNS: Sign[] = [
    new Sign("Aries", 3/21, 4/20, "fire", "mars", "cardinal", "The Emperor"),
    new Sign("Taurus", 4/21, 5/21, "earth", "venus", "fixed", "The Hierophant"),
    new Sign("Gemini", 5/22, 6/21, "air", "mercury", "mutable", "The Lovers"),
    new Sign("Cancer", 6/22, 7/22, "water", "moon", "cardinal", "The Chariot"),
    new Sign("Leo", 7/23, 8/22, "fire", "sun", "fixed", "Strength"),
    new Sign("Virgo", 8/23, 9/22, "earth", "mercury", "mutable", "The Hermit"),
    new Sign("Libra", 9/23, 10/22, "air", "venus", "cardinal", "Justice"),
    new Sign("Scorpio", 10/23, 11/21, "water", "mars & pluto", "fixed", "Death"),
    new Sign("Sagittarius", 11/22, 12/21, "fire", "jupiter", "mutable", "Temperance"),
    new Sign("Capricorn", 12/22, 1/19, "earth", "saturn", "cardinal", "Devil"),
    new Sign("Aquarius", 1/20, 2/18, "air", "saturn & uranus", "fixed", "The Star"),
    new Sign("Pisces", 2/19, 3/20, "water", "jupiter & neptune", "mutable", "The Moon")  
];