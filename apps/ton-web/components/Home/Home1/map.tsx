import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import L from "leaflet";

export function ChangeView({ coords }:any) {
  const map = useMap();
  map.setView(coords, 7);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 23.9739881, lng: 120.9798175 });

  const center:any = [geoData.lat, geoData.lng];

  //green icon 
  const greenIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  //marker position
  const positionT:any=[[24.782301,121.006286],[25.060078,121.615915],[24.0851938,120.6777752],[23.0985729,120.2573986],[22.6043902,120.300311]]
  return (
    <MapContainer center={center} zoom={25} style={{ height: '60vh',borderRadius: '10px' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionT[0]} icon={greenIcon} bubblingMouseEvents={true}>
        <Popup>
          Hsinchu Science Park
        </Popup>
      </Marker>
      <Marker position={positionT[1]} icon={greenIcon}>
        <Popup>
          Nangang Software Park
        </Popup>
      </Marker>
      <Marker position={positionT[2]} icon={greenIcon}>
        <Popup>
          Taichung Software Park
        </Popup>
      </Marker>
      <Marker position={positionT[3]} icon={greenIcon}>
        <Popup>
          Tainan Science Park
        </Popup>
      </Marker>
      <Marker position={positionT[4]} icon={greenIcon}>
        <Popup>
          Kaohsiung Software Technology Park
        </Popup>
      </Marker>

      <ChangeView coords={center} />
    </MapContainer>
  );
}
