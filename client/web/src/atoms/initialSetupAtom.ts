import { atom } from 'jotai';

export const stepAtom = atom(0);
export const nameAtom = atom('');
export const birthdateAtom = atom('');
export const isPublicAtom = atom(false);
export const occupationAtom = atom('');
export const isStudentAtom = atom(false);
export const interestsAtom = atom<string[]>([]);
export const learningGoalAtom = atom('');
export const learningStyleAtom = atom('');
export const learningTimeAtom = atom('');
export const deviceAtom = atom('');
export const isSelectedAtom = atom(false);
export const progressAtom = atom(0);
export const isMinorAtom = atom(false);
export const privacyLevelAtom = atom('private');
