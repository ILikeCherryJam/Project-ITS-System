import { useEffect, useRef } from "react";

let yandexMapScriptLoading = false;

export default function YandexMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);



  useEffect(() => {
    if (mapInstanceRef.current) return;

    const initMap = () => {
      if (mapInstanceRef.current) return;

      window.ymaps.ready(() => {
        if (mapInstanceRef.current) return;

        const map = new window.ymaps.Map(mapRef.current, {
    center: [51.158655, 71.458380],
    zoom: 18,
  });

  mapInstanceRef.current = map;

  const placemark = new window.ymaps.Placemark(
    [51.158655, 71.458380],
    {
      balloonContent: "Наш офис",
      hintContent: "Мы здесь",
    },
    {
      preset: "islands#redIcon",
    }
  );

  map.geoObjects.add(placemark);

      });
    };

    if (window.ymaps) {
      initMap();
      return;
    }

    if (yandexMapScriptLoading) return;
    yandexMapScriptLoading = true;

    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=YOUR_API_KEY";
    script.async = true;
    script.onload = initMap;

    document.body.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px", margin: "0 0 50px 0" }} />;
}