export function getWebDomain(): string {
  const url = window.location.href;

  try {
    const hostname = new URL(url).hostname;
    if (hostname === 'localhost' || hostname === 'almaherinenglish.com')
      return 'almaherinenglish.com';
    return hostname;
  } catch {
    return 'almaherinenglish.com';
  }
}

// garhy-academy.com
// https://physics-beyts.azcourses.org/
// https://mr-mohamedkarawya.com/
// mr-eslamsalama.com
// https://almaherinenglish.com/
