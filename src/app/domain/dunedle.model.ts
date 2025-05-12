/*
 * This file is part of Dunedle.
 *
 * Copyright (C) 2025 moeridoe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export enum Category { GENDER, HEIGHT, HAIRCOLOR, FACTION, BOOKS}
export type Book = 'DUNE' | 'DUNE_MESSIAH' | 'CHILDREN_OF_DUNE' | 'DUNE_GOD_EMPEROR';
export type Faction = 'ATREIDES' | 'HARKONNEN' | 'CORRINO' | 'IX' | 'TLEILAX' | 'FREMEN' | 'BENE_GESSERIT' | 'MENTAT' | 'NONE';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type HairColor = 'BLACK' | 'DARK_BROWN' | 'BLONDE' | 'AUBURN' | 'RED' | 'GREY' | 'VARIABLE' | 'UNSPECIFIED' | 'NONE';
export interface DuneCharacter {
  name: string;
  genders: Gender[];
  height: number;
  hairColors: HairColor[];
  factions: Faction[];
  books: Book[];
}
export type GuessResponse = {guessedCharacter: DuneCharacter, guessEvaluation: Map<Category, number>};
