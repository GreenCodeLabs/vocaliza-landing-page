import { atom } from "jotai";

export const sidebarIsOpenAtom = atom(false);

export const openSidebarAtom = atom(null, (get, set) => {
  set(sidebarIsOpenAtom, true);
});

export const closeSidebarAtom = atom(null, (get, set) => {
  set(sidebarIsOpenAtom, false);
});
