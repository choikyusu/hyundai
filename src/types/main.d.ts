type FluidType = {
  imageUrl?: { mobile: string; wide: string };
  backgroundUrl: { mobile: string; wide: string };
  pageUrl: string;
  title: { text: string; color: string };
  subText: { text: string; color: string };
};

type ElCarouselType =
  | 'Main'
  | 'GnbEvent'
  | 'ModelSection'
  | 'Brand'
  | 'Events'
  | 'CarList';

type AgeBaseModelType = {
  text: string;
  modelList: RankType[];
}[];

type ModelType = {
  text: string;
  carName: string;
  imageUrl: string;
};

type ListItemType = {
  title?: string;
  description?: string[];
  imageUrl: string;
  textInImage?: string;
  pageUrl: string;
};

type ShopItemType = {
  name: string;
  pageUrl: string;
  discount: string;
  price: number;
  imageUrl: string;
};

type BrandType = {
  imageUrl: string;
  pageUrl: string;
  title: { text: string; color: string };
  subText: { text: string; color: string };
};

type DirectionType = 'Right' | 'Left';

type EventType = {
  pageUrl: string;
  imaageUrl: string;
  title: string;
  subTitle: string;
  date: string;
};

type ViewportSizeType = 'Small' | 'Medium' | 'Large';

type ChildrenType = ReactElement<any, string | JSXElementConstructor<any>>;

type LanguageType = {
  name: string;
  pageUrl: string;
};

type DropdownListType = LanguageType[];

type ElCarouselConfigType = {
  contentCountBySlide?: { small: number; medium: number; large: number };
  showArrow?: boolean;
  autoSlide?: boolean;

  style?: {
    gridRowCount?: { small: number; medium: number; large: number };
  };
};
