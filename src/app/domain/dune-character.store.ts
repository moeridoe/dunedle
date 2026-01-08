/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {DuneCharacter} from './dunedle.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuneCharacterStore {
  public readonly characters: DuneCharacter[] = [
    {name: 'Paul Atreides (Usul, Muad\'Dib, The Preacher)', genders: ['MALE'], height: 180, hairColors: ['DARK_BROWN'], factions: ['ATREIDES', 'BENE_GESSERIT', 'FREMEN', 'MENTAT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Leto I Atreides', genders: ['MALE'], height: 188, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE']},
    {name: 'Lady Jessica', genders: ['FEMALE'], height: 175, hairColors: ['AUBURN'], factions: ['ATREIDES', 'BENE_GESSERIT'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Vladimir Harkonnen', genders: ['MALE'], height: 193, hairColors: ['RED', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Chani Kynes (Sihaya)', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN', 'ATREIDES'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Stilgar', genders: ['MALE'], height: 183, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Duncan Idaho (Hayt)', genders: ['MALE'], height: 185, hairColors: ['BLACK'], factions: ['MENTAT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Dr. Wellington Yueh', genders: ['MALE'], height: 175, hairColors: ['BLACK'], factions: ['ATREIDES'], books: ['DUNE']},
    {name: 'Gurney Halleck', genders: ['MALE'], height: 175, hairColors: ['BLACK', 'GREY'], factions: ['ATREIDES'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Feyd-Rautha Harkonnen', genders: ['MALE'], height: 183, hairColors: ['DARK_BROWN', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Glossu Rabban Harkonnen', genders: ['MALE'], height: 195, hairColors: ['DARK_BROWN', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Gaius Helen Mohiam', genders: ['FEMALE'], height: 170, hairColors: ['GREY'], factions: ['BENE_GESSERIT'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Princess Irulan', genders: ['FEMALE'], height: 175, hairColors: ['BLONDE'], factions: ['CORRINO', 'ATREIDES', 'BENE_GESSERIT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Shaddam IV Corrino', genders: ['MALE'], height: 175, hairColors: ['BLONDE'], factions: ['CORRINO'], books: ['DUNE']},
    {name: 'Thufir Hawat', genders: ['MALE'], height: 175, hairColors: ['GREY'], factions: ['ATREIDES', 'MENTAT'], books: ['DUNE']},
    {name: 'Count Hasimir Fenring', genders: ['MALE'], height: 170, hairColors: ['BLACK'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Margot Fenring', genders: ['FEMALE'], height: 170, hairColors: ['BLONDE'], factions: ['HARKONNEN', 'BENE_GESSERIT'], books: ['DUNE']},
    {name: 'Piter De Vries', genders: ['MALE'], height: 180, hairColors: ['NONE'], factions: ['HARKONNEN', 'MENTAT'], books: ['DUNE']},
    {name: 'Alia Atreides', genders: ['FEMALE'], height: 170, hairColors: ['AUBURN'], factions: ['ATREIDES', 'BENE_GESSERIT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Shadout Mapes', genders: ['FEMALE'], height: 160, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Liet-Kynes', genders: ['MALE'], height: 180, hairColors: ['GREY'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Ramallo', genders: ['FEMALE'], height: 160, hairColors: ['GREY', 'NONE'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Jamis', genders: ['MALE'], height: 178, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Harah', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Otheym', genders: ['MALE'], height: 170, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Korba', genders: ['MALE'], height: 175, hairColors: ['NONE'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Captain Otto Aramsham', genders: ['MALE'], height: 178, hairColors: ['UNSPECIFIED'], factions: ['CORRINO'], books: ['DUNE']},
    {name: 'Captain Iakin Nefud', genders: ['MALE'], height: 180, hairColors: ['RED'], factions: ['HARKONNEN'], books: ['DUNE']},

    {name: 'Scytale', genders: ['MALE'], height: 0, hairColors: ['VARIABLE'], factions: ['TLEILAX'], books: ['DUNE_MESSIAH']},
    {name: 'Edric', genders: ['MALE'], height: 180, hairColors: ['NONE'], factions: ['NONE'], books: ['DUNE_MESSIAH']},
    {name: 'Bijaz', genders: ['MALE'], height: 120, hairColors: ['UNSPECIFIED'], factions: ['TLEILAX'], books: ['DUNE_MESSIAH']},
    {name: 'Lichna', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE_MESSIAH']},
    {name: 'Farok', genders: ['MALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['FREMEN'], books: ['DUNE_MESSIAH']},

    {name: 'Princess Wensicia Corrino', genders: ['FEMALE'], height: 172, hairColors: ['BLONDE'], factions: ['CORRINO'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Leto II Atreides', genders: ['MALE', 'OTHER'], height: 700, hairColors: ['DARK_BROWN', 'NONE'], factions: ['ATREIDES', 'FREMEN', 'BENE_GESSERIT'], books: ['CHILDREN_OF_DUNE', 'DUNE_GOD_EMPEROR']},
    {name: 'Ghanima Atreides', genders: ['FEMALE'], height: 165, hairColors: ['AUBURN'], factions: ['ATREIDES', 'FREMEN', 'BENE_GESSERIT'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Tyekanik', genders: ['MALE'], height: 178, hairColors: ['BLACK'], factions: ['CORRINO'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Farad\'n Corrino (Harq al\'Ada)', genders: ['MALE'], height: 180, hairColors: ['BLONDE'], factions: ['CORRINO', 'BENE_GESSERIT'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Ziarenko Javid', genders: ['MALE'], height: 180, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['CHILDREN_OF_DUNE']},

    {name: 'Siona Atreides', genders: ['FEMALE'], height: 170, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Hwi Noree', genders: ['FEMALE'], height: 170, hairColors: ['BLACK'], factions: ['IX'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Tertius Eileen Anteac', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERIT', 'MENTAT'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Moneo Atreides', genders: ['MALE'], height: 180, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Nayla', genders: ['FEMALE'], height: 185, hairColors: ['UNSPECIFIED'], factions: ['NONE'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Quintinius Violet Chenoeh', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERIT'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Malky', genders: ['MALE'], height: 175, hairColors: ['BLACK'], factions: ['IX'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Marcus Claire Luyseyal', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERIT'], books: ['DUNE_GOD_EMPEROR']},
  ]
}
