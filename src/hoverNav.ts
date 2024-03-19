export function handleChangeNav(): void {
  console.log('backgroundBlack');

  const navbar = document.querySelector('.navbar');
  const blackground = document.querySelector('.backgroundBlack');
  const contentOpen = 'translate-x-72';
  const contentClose = '-translate-x-72';
  if (navbar?.classList.contains(contentClose)) {
    navbar?.classList.remove(contentClose);
    navbar?.classList.add(contentOpen);
    blackground?.classList.remove('hidden');
  } else {
    navbar?.classList.remove(contentOpen);
    navbar?.classList.add(contentClose);
    blackground?.classList.add('hidden');
  }
}

export function handleAddNavMenu(e: string): void {
  const navbar = document.querySelector(`${e}Menu`);
  const homeMenu = document.querySelector('.homeMenu');
  const pagesMenu = document.querySelector('.pagesMenu');
  const projectMenu = document.querySelector('.projectMenu');
  const blogMenu = document.querySelector('.blogMenu');
  const displayNone = 'hidden';
  const displayBlock = 'block';
  if (navbar?.classList.contains(displayNone)) {
    navbar?.classList.remove(displayNone);
    navbar?.classList.add(displayBlock);
    if (navbar !== homeMenu && !homeMenu?.classList.contains(displayNone)) {
      homeMenu?.classList.add(displayNone);
    }

    if (navbar !== pagesMenu && !pagesMenu?.classList.contains(displayNone)) {
      pagesMenu?.classList.add(displayNone);

    }
    if (navbar !== projectMenu && !projectMenu?.classList.contains(displayNone)) {
      projectMenu?.classList.add(displayNone);
    }
    if (navbar !== blogMenu && !blogMenu?.classList.contains(displayNone)) {
      blogMenu?.classList.add(displayNone);
    }
  } else {
    navbar?.classList.add(displayNone);
    navbar?.classList.remove(displayBlock);
  }
}
