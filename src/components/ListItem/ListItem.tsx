import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ListItemProps } from "../../models/interfaces";
import "./ListItem.css";

export const ListItem: FC<ListItemProps> = ({
  id,
  completed,
  title,
  setCompleted,
}) => {
  return (
    <div className={`list__item ${completed ? "completed" : ""}`}>
      <button
        className="list__item-check"
        onClick={() => {
          setCompleted(id);
        }}
      >
        <FontAwesomeIcon icon={faCheck} className="list__item-icon" />
      </button>
      <span className="list__item-title">{title}</span>
    </div>
  );
};
