import React, { useState } from "react";
import { css } from "@emotion/core";
import { CircleLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loader() {

  return (
    <div className="sweet-loading">
      <CircleLoader color={"black"} css={override} size={150} />
    </div>
  );
}