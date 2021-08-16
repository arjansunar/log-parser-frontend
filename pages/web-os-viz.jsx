import WebDonut from "../components/WebDonut";
import OsDonut from "../components/OsDonut";

const style = {
  flexWrapper: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-around",
  },
};

function WebOs() {
  return (
    <div style={style.flexWrapper}>
      <WebDonut />
      <OsDonut />
    </div>
  );
}

export default WebOs;
