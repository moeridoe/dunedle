/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {DuneCharacter} from '../domain/dunedle.model';

export const ENUM_LIST_DISPLAY_FN: (al: string[]) => string = (enumValueList: string[]) =>
  enumValueList.map(ENUM_DISPLAY_FN).join(', ');

export const ENUM_DISPLAY_FN: (a: string) => string = (enumValue: string) =>
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
