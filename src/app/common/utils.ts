/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {DuneCharacter} from '../domain/dunedle.model';

export const TODAY: number = new Date().setHours(0, 0, 0, 0);
export const ONE_DAY_MS: number = 86400000;

export const ENUM_LIST_DISPLAY_FN: (al: string[]) => string = (enumValueList: string[]) =>
  enumValueList.map(ENUM_DISPLAY_FN).join(', ');

export const ENUM_DISPLAY_FN: (a: string) => string = (enumValue: string) =>
  enumValue.toLowerCase().replaceAll('_',' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function GET_STORAGE_ITEM_OR_SET_ZERO(storageItemKey: string): number {
  const storageItem = localStorage.getItem(storageItemKey);
  if (storageItem === null) {
    localStorage.setItem(storageItemKey, '0');
    return 0;
  }
  return Number.parseInt(storageItem);
}

export function isDuneCharacter(obj: any): obj is DuneCharacter {
  return obj
    && typeof obj.name === 'string'
    && typeof obj.genders === 'object'
    && typeof obj.height === 'number'
    && typeof obj.hairColors === 'object'
    && typeof obj.factions === 'object'
    && typeof obj.books === 'object';
}
