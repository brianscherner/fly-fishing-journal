import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function GoTop(props) {
  const { goTop } = props;

  return (
    <div className="go-top-wrapper">
      <button className="btn go-top-btn" onClick={goTop}><ArrowUpwardIcon className="go-top-icon"/> Scroll To Top</button>
    </div>
  )
}

export default GoTop;