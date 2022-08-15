import { GameSummary } from "fbg-web/infra/games/GameSummaryParser";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { HTMLAttributes } from "react";
import css from "./GameCard.module.css";

interface IGameCardProps {
  gameSummary: GameSummary;
  isLink?: boolean;
}
export function GameCard({ gameSummary, isLink }: IGameCardProps) {
  const thumbnail = require(`fbg-games/${gameSummary.id}/thumbnail.jpg`).default
    .src;
  const cardLinkCss = isLink ? css.CardLink : "";
  return (
    <div
      className={`${css.Card} ${cardLinkCss}`}
      style={{ backgroundImage: `url(${thumbnail})` }}
      data-testid={`gamecard-${gameSummary.id}`}
    >
      <Heading>
        <Title>{gameSummary.name}</Title>
      </Heading>

      <Description>
        <>{gameSummary.callout}</>
      </Description>

      {isLink && <NavigateButton />}
    </div>
  );
}

export const Heading = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={css.Heading}>{children}</div>;
};

export const Title = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${css.Panel} ${css.Title}`} {...props}>
      <Typography
        gutterBottom={false}
        variant="h4"
        component="h2"
        style={{ fontWeight: 300 }}
      >
        {children}
      </Typography>
    </div>
  );
};

export const Description = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={css.Description} {...props}>
      <div className={`${css.Panel} ${css.DescriptionInner}`}>
        <Typography gutterBottom={false} variant="overline" component="h5">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export const NavigateButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={css.Navigation} {...props}>
      <div className={`${css.Panel} ${css.NavigationInner}`}>
        <IconButton aria-label="Next">
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};
