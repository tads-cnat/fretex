import React from "react";
import { LinkYellow, BtnYellow } from "./styles";
import { type MouseEvent } from "react";
import Loading from "../Loading";

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  fontSize?: "medium" | "large";
  link?: string;
  children: any;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  isButton?: boolean;
}

const Button = ({
  link,
  children,
  onClick,
  isButton,
  type,
  isDisabled,
  fontSize,
}: IButton): JSX.Element => {
  if (isButton === true) {
    if (fontSize === "large") {
      return (
        <BtnYellow
          type={type}
          fontSize="var(--font-large)"
          onClick={onClick}
          disabled={isDisabled}
        >
          {isDisabled ? <Loading/> : children}
        </BtnYellow>
      );
    } else {
      return (
        <BtnYellow
          type={type}
          fontSize="var(--font-medium)"
          onClick={onClick}
          disabled={isDisabled}
        >
          {isDisabled ? <Loading color="white"/> : children}
        </BtnYellow>
      );
    }
  } else {
    return (
      <LinkYellow to={link ?? ""} onClick={onClick}>
        {children}
      </LinkYellow>
    );
  }
};

export default Button;
