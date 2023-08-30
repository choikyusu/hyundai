export function calculateDistance(
  lat1: string,
  lon1: string,
  lat2: string,
  lon2: string,
) {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = degToRad(Number(lat2) - Number(lat1));
  const dLon = degToRad(Number(lon2) - Number(lon1));

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(Number(lat1))) *
      Math.cos(degToRad(Number(lat2))) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

function degToRad(deg: number) {
  return deg * (Math.PI / 180);
}
