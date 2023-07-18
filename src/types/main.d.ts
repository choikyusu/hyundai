type FluidType = {
  imageUrl?: string;
  backgroundUrl: string;
  pageUrl: string;
  title: { text: string; color: string };
  subText: { text: string; color: string };
};

type ElCarouselType = 'Main' | 'GnbEvent' | 'ModelSection';

type AgeBaseModelType = {
  text: string;
  modelList: RankType[];
}[];

type ModelType = {
  text: string;
  carName: string;
  imageUrl: string;
};

type CardType = {
  title: string;
  description: string[];
  imageUrl: string;
  pageUrl: string;
};
