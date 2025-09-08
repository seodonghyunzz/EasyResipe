import "../css/loading.css";

export function Loading() {
  return (
    <div className="loader">
      <div className="panWrapper">
        <div className="pan">
          <div className="food"></div>
          <div className="panBase"></div>
          <div className="panHandle"></div>
        </div>
        <div className="panShadow"></div>
      </div>
    </div>
  );
}
