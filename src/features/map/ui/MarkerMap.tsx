"use client";

import { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export function MarkerMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      style: "/style/map-dark-style.json",
      center: [127.5, 36.5],
      zoom: 7,
      minZoom: 5,
      maxZoom: 18,
      maxBounds: [
        [124.5, 33.0],
        [131.9, 39.7],
      ],
    });

    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      className="text-muted-foreground bg-muted flex flex-grow items-center justify-center rounded-xl text-center text-lg font-medium max-sm:hidden"
    />
  );
}
