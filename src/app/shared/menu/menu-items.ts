export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "ni-archive-2 text-green"
  },
  {
    path: '/admin/tiket',
    title: 'Tiket',
    type: 'link',
    icontype: 'fas fa-ticket-alt text-red'
  },
  {
    path: '/admin/laporan',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-clipboard-list text-blue'
  },
  {
    path: '/admin/audit',
    title: 'Audit',
    type: 'link',
    icontype: 'fas fa-braille text-pink'
  }

];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/aduan',
    title: 'Aduan',
    type: 'link',
    icontype: 'fab fa-wpforms text-yellow'
  },
  {
    path: '/user/profil',
    title: 'Profil',
    type: 'link',
    icontype: 'fas fa-id-badge text-pink'
  }

];