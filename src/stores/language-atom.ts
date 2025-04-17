import { Language, translations } from "@/data/languages";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const languageAtom = atomWithStorage<Language>("language", "en");

export const translationsAtom = atom((get) => {
  const lang = get(languageAtom);
  return translations[lang] || translations.en;
});
