import useSWR from 'swr';

export default function useUSGS() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`,
    fetcher
  );

  return {
    quakes: data,
    isLoading,
    isError: error,
  };
}
