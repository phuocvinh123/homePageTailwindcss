export function handleBar() {
  interface MenuItem {
    menuName: string;
    submenuItems: string[];
  }

  interface MenuData {
    menuItems: MenuItem[];
  }

  const data: MenuData = {
    menuItems: [
      {
        menuName: 'Home',
        submenuItems: ['Home One', 'Home Two', 'Home Three', 'Home Four', 'Home Five', 'Home Video', 'Home Map'],
      },
      {
        menuName: 'Pages',
        submenuItems: [
          'Property',
          'Property Sidebar',
          'Property Details',
          'Add new Listing',
          'Map Location',
          'About us',
          'FAQ',
          'Cheack out',
          'Cart',
          'Login',
          'Account',
        ],
      },
      {
        menuName: 'Project',
        submenuItems: ['Project', 'Project Details'],
      },
      {
        menuName: 'Blog',
        submenuItems: ['Blog Classic', 'Blog Details'],
      },
    ],
  };

  const template = Handlebars.compile(document.getElementById('menu-template')?.innerHTML);
  const html = template(data);
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer !== null && menuContainer !== undefined) {
    menuContainer.innerHTML = html;
  }
}