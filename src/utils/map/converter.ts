export const convertInputMarkerFromResponse = (
  response: NetworkResponse | AgencyResponse,
): InputMarkerData[] => {
  if (isNetworkResponse(response)) {
    return response.list.map(item => ({
      type: 'Network',
      lattitude: item.lat,
      longitude: item.lng,
      name: item.name,
      displayCarCount: '',
      carMasterCount: '',
      agencyAddress: '',
      agencyTel: '',
    }));
  }
  if (isAgencyResponse(response)) {
    return response.list.map(item => ({
      type: 'Agency',
      lattitude: item.lattitude,
      longitude: item.longitude,
      name: item.agencyName,
      displayCarCount: item.displayCarCount,
      carMasterCount: item.carMasterCount,
      agencyAddress: item.agencyAddress,
      agencyTel: item.agencyTel,
    }));
  }

  return [];
};

function isNetworkResponse(
  response: NetworkResponse | AgencyResponse,
): response is NetworkResponse {
  return (response as NetworkResponse).rowSize !== undefined;
}

function isAgencyResponse(
  response: NetworkResponse | AgencyResponse,
): response is AgencyResponse {
  return (response as AgencyResponse).firstPage !== undefined;
}
