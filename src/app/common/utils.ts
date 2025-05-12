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

import {DuneCharacter} from '../domain/dunedle.model';

export const enumListDisplayFunction: (al: string[]) => string = (enumValueList: string[]) =>
  enumValueList.map(enumDisplayFunction).join(', ');

export const enumDisplayFunction: (a: string) => string = (enumValue: string) =>
  enumValue.toLowerCase().replaceAll('_',' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function isDuneCharacter(obj: any): obj is DuneCharacter {
  return obj
    && typeof obj.name === 'string'
    && typeof obj.genders === 'object'
    && typeof obj.height === 'number'
    && typeof obj.hairColors === 'object'
    && typeof obj.factions === 'object'
    && typeof obj.books === 'object';
}
