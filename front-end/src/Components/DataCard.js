import React from "react";
import "../Styles/dataCard.scss";

const DataCard = () => {
    return (
      <div>
        <section className="page-contain">
          <a href="/" className="data-card">
            <h3>20</h3>
            <h4>participating restaurants</h4>
            <p>We parnter with SNAP 🥕 and HRA benefits to bring you quality meal kits from restaurants in your area. Click to see which restaurants are in your area 📍            </p>
            <span className="link-text">
              View All Providers
          <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="rgb(78, 111, 218)"/>
          </svg>
            </span>
           </a>
        </section>
      </div>
    )
}

export default DataCard;