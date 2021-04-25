import React from "react";
import { useDispatch } from "react-redux";
import { textConfig } from "../../../../const.config";
import { closeModals } from "../../../../store/modals/modals.action";
import "../ExploreToursButton/ExploreToursButton.component";
import "./exploreToursButton.style.scss";

const ExploreToursButton: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <button
      data-testId="explore-button"
      onClick={() => dispatch(closeModals())}
      className="exploreTours__button"
    >
      {textConfig.EXPLORE_TOURS}
    </button>
  );
};

export default ExploreToursButton;
