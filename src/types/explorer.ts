type ExplorerBaseType = {
  fuelType: string | undefined;
  budgetRange: string | undefined;
  bodyType: string | undefined;
  passenger: string | undefined;
  luggage: string | undefined;
};

type BaseSubItemType = {
  id: string;
  name: string;
  type: 'small' | 'medium';
};
