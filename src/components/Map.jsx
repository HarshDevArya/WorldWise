import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const leti = searchParam.get("lat");
  const log = searchParam.get("log");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position : {leti} {log}
      </h1>
    </div>
  );
}
