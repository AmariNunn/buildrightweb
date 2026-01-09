const PENDING_HASH_KEY = "pendingScrollHash";
const HEADER_HEIGHT = 80;

export function setPendingHash(hash: string) {
  sessionStorage.setItem(PENDING_HASH_KEY, hash);
}

export function getPendingHash(): string | null {
  return sessionStorage.getItem(PENDING_HASH_KEY);
}

export function clearPendingHash() {
  sessionStorage.removeItem(PENDING_HASH_KEY);
}

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - HEADER_HEIGHT,
      behavior: "smooth",
    });
    return true;
  }
  return false;
}

export function hasPendingHash(): boolean {
  return !!sessionStorage.getItem(PENDING_HASH_KEY);
}
