import "../mobileAppSection/mobileAppSection.css";

function MobileAppSection() {
  return (
    <div className="mobile-app-section-container">
      <div className="mobile-app-section-row">
        <div className="mobile-app-section-column">
          <div className="mobile-app-section-card">
            <img className="phone-image" src="/images/iphone-image.png" alt="iphone"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
