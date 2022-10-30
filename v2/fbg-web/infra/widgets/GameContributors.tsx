import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { GameDetails } from "infra/games/GameDetailsParser";
import Link from "next/link";
import { GameInfoUrlParams } from "infra/misc/definitions";

interface GameContributorsProps {
  details: GameDetails;
  params: GameInfoUrlParams;
}

export function GameContributors({ details, params }: GameContributorsProps) {
  const { t } = useTranslation("GameInfo");

  const contributors = details.contributors.map((username) => (
    <Link
      href={`/${params.lang}/about#contributor-${username}`}
      key={username}
      style={{ marginRight: "4px" }}
      target="_blank"
      rel="noreferrer"
      legacyBehavior
    >
      <Typography
        variant="body2"
        component="span"
        style={{
          color: "black",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {username}
      </Typography>
    </Link>
  ));
  return (
    <div style={{ display: "flex", height: "24px", maxWidth: "500px" }}>
      <div style={{ flexGrow: 1 }}></div>
      <Typography
        variant="body2"
        component="span"
        style={{ marginRight: "4px" }}
      >
        {t("by")}
      </Typography>
      <div>{contributors}</div>
    </div>
  );
}
