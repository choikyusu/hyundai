type HeaderMenuType = 'None' | 'Search' | 'Menu' | 'Web';

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
    }
  | {
      type: 'CarLink';
      name: string;
      pageUrl: string;
    };

type CarType = {
  carName: string;
  isNew: boolean;
  price: string;
  imageUrl: string;
  pageUrl: string;
  fuelEfficiency: string;
  passengerCount: number;
  displacement: string;
};

type MenuType = {
  name: string;
  pageUrl: string;
};

type EventType = {
  pageUrl: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  date: string;
};

type FooterDataType = {
  type: 'Footer';
  name: string;
  subMenuList: {
    subTitle: string;
    pageUrl: string;
  }[];
};

type PCMenuTreeType = {
  name: string;
  level2List: (Level2Type | FooterDataType)[];
};
