import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import {SPINNER_COLOR} from '../../const';

const Spinner = () => (
  <ClipLoader color={SPINNER_COLOR} />
);

export default Spinner;
