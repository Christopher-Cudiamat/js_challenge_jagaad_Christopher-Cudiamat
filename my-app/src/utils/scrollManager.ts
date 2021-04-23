export const scrollStop = (flag: boolean): void => {
  if (flag) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
};

export const scrollToTop = (behavior?: string): void => {
  if (behavior) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo(0, 0);
  }
};
