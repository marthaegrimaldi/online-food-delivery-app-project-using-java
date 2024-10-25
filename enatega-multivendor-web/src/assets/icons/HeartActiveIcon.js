import { SvgIcon, useTheme } from "@mui/material";
import * as React from "react";

function HeartActiveIcon(props) {
  const theme = useTheme();
  return (
    <SvgIcon
      className="prefix__fl-brand-primary"
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-testid="favorite-entry-active"
      {...props}
      style={{ color: theme.palette.primary.main }}
    >
      <path
        d="M11.04 5.293c.112.084.246.195.403.333l.286.257a.4.4 0 00.542 0l.315-.283c.145-.125.27-.228.374-.307 1.503-1.132 3.36-1.714 5.187-.94l-.187.08a5.01 5.01 0 00-1.533 1.07c-.827-.003-1.696.335-2.564.989l-.151.12c-.115.096-.258.222-.427.376-.181.167-.47.4-.863.697l-.175.132a.4.4 0 01-.487-.006 99.836 99.836 0 00-.909-.708l-.13-.11-.158-.143a7.024 7.024 0 00-.426-.36c-1.323-.997-2.652-1.258-3.83-.697-2.032.966-2.972 3.553-2.086 5.685 1.335 2.798 3.822 5.087 7.52 6.863l.259.122.259-.121c2.665-1.28 4.701-2.826 6.119-4.612.507.175 1.054.27 1.622.27l.04-.002c-1.668 2.383-4.192 4.351-7.572 5.902-.254.114-.543.13-.807.05l-.13-.05c-4.228-1.94-7.116-4.533-8.664-7.776-1.22-2.93.031-6.37 2.795-7.686 1.89-.9 3.826-.315 5.378.855zM20 6a3 3 0 110 6 3 3 0 010-6z"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

export default HeartActiveIcon;
