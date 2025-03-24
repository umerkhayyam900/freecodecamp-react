import travelData from "../japan";
export default function Entry() {
  return (
    <>
      <img src="" />
      <h2>{travelData.location}</h2>
      <a
        href={travelData.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
      <h1>Mount Fuji</h1>
      <h3>{travelData.dates}</h3>
      <p>{travelData.text}</p>
    </>
  );
}