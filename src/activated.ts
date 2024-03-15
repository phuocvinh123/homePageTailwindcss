export const handleChangeActivated = (e: string) => {
  const buttonCurrent = document.querySelector(e);

  const buttonRent = document.querySelector(".button-rent");
  const buttonBuy = document.querySelector(".button-buy");
  const buttonSell = document.querySelector(".button-sell");
  const activated = 'button-activated';
  const noActivated = 'button-not-activated';
  buttonCurrent?.classList.remove(noActivated);
  buttonCurrent?.classList.add(activated);

  if (buttonCurrent !== buttonRent) {
    buttonRent?.classList.remove(activated);
    buttonRent?.classList.add(noActivated);
  }
  if (buttonCurrent !== buttonBuy) {
    buttonBuy?.classList.remove(activated);
    buttonBuy?.classList.add(noActivated);
  }
  if (buttonCurrent !== buttonSell) {
    buttonSell?.classList.remove(activated);
    buttonSell?.classList.add(noActivated);
  }
}
export const handleChangeHidden = () => {
  const video = document.querySelector('.youtube')?.classList;
  const backgroundBlack = document.querySelector('.button-close-video')?.classList;
  const contentHidden = 'hidden';
  if (video?.contains(contentHidden) && backgroundBlack?.contains(contentHidden)) {
    video.remove(contentHidden);
    backgroundBlack.remove(contentHidden);
  } else {
    video?.add(contentHidden);
    backgroundBlack?.add(contentHidden);
  }
}