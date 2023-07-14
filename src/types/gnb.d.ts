type LnbMenuTreeType = {
  name: string;
  level2List: Level2Type[];
};

type Level2Type =
  | {
      type: 'Car';
      name: string;
      level3List: CarType[];
    }
  | {
      type: 'Menu';
      name: string;
      level3List: MenuType[];
    };

type CarType = {
  carName: string;
  isNew: boolean;
  price: string;
  imageUrl: string;
  pageUrl: string;
};

type MenuType = {
  name: string;
  pageUrl: string;
};
