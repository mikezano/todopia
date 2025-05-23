import "./ThreeDButton.css";
export interface ThreeDButtonProps {
  text: string;
  onClick: () => void;
}
export const ThreeDButton = ({ text, onClick }: ThreeDButtonProps) => {
  return (
    <button className="three-d-button" onClick={onClick}>
      {text}
    </button>
  );
};
