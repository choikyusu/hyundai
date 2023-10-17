type Marker = {
  openInfoWindow?: () => void;
  closeInfoWindow?: () => void;
  clickInfoWindow?: () => void;
  hasMarkerClickTip: () => Marker[];
  hasMarkerHoverTip: () => Marker[];
  [key: string]: any;
};

type InputMarkerData = {
  type: 'Network' | 'Agency';
  lattitude: string;
  longitude: string;
  name: string;
  displayCarCount: string;
  carMasterCount: string;
  agencyAddress: string;
  agencyTel: string;
};
