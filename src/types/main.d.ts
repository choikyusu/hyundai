type FluidType = {
  imageUrl?: string;
  backgroundUrl: string;
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

type WindowSizeType = 'Small' | 'Medium' | 'Large';
