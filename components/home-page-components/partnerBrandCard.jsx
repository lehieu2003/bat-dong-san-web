import PropTypes from "prop-types";

const PartnerBrandCard = ({ title, src, alt }) => {
  return (
    <div className="partner-brand-card flex justify-center items-center gap-2">
      <img src={src} alt={alt} />
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

PartnerBrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PartnerBrandCard;
