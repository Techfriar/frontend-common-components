import "./over-view-card.css";

interface OverViewCardProps {
  className?: string;
  text?: string;
  number?: number | string;
}

const OverViewCard = ({ className, text, number }: OverViewCardProps) => {
  // Format the number with leading zeros (e.g., display 08)
  const formattedNumber =
    number !== undefined ? number.toString().padStart(2, "0") : "";

  return (
    <div className={`overViewCard ${className}`}>
      <span className="text">{text}</span>
      <span>{formattedNumber}</span>
    </div>
  );
};

export default OverViewCard;
