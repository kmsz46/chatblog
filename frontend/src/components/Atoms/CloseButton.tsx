import * as React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  handleClick: () => void
};

const CloseButton = ({ handleClick }: Props) => {
  return (
    <IconButton onClick={ handleClick }><CloseIcon /></IconButton>
  );
};

export default CloseButton;