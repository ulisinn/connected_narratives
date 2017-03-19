export const WIDE_NAV = 'WIDE_NAV';
export const NARROW_NAV = 'NARROW_NAV';
export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function showWideNav() {
  return {
    type: WIDE_NAV,
  };
}

export function showNarrowNav() {
  return {
    type: NARROW_NAV,
    
  };
}

export function toggleLanguage(lang) {
  console.log('toggleLanguage', lang);
  return {
    type: TOGGLE_LANGUAGE,
    payload: {
      text: lang,
    },
  };
}

export function toggleNavigation(lang) {
  console.log('TOGGLE_NAVIGATION', lang);
  return {
    type: TOGGLE_NAVIGATION,
    payload: {
      text: lang,
    },
  };
}
