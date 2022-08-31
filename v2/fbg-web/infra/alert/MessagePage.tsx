import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SvgError from "fbg-web/infra/alert/SvgError";
import Typography from "@mui/material/Typography";
import { FreeBoardGamesBar } from "fbg-games/gamesShared/components/fbg/FreeBoardGamesBar";

interface MessagePageProps {
  type: "loading" | "error";
  message: string;
  skipFbgBar?: boolean;
  actionComponent?: JSX.Element;
}

function MessagePage(props: MessagePageProps) {
  let icon;
  if (props.type === "error") {
    icon = <SvgError style={{ height: "128px" }} />;
  } else {
    icon = <CircularProgress />;
  }
  const content = (
    <div style={{ paddingTop: "16px", textAlign: "center" }}>
      {icon}
      <Typography
        variant="h6"
        gutterBottom={true}
        style={{ paddingTop: "16px" }}
      >
        {props.message}
        <br />
        <br />
        {props.actionComponent}
      </Typography>
    </div>
  );
  if (props.skipFbgBar) {
    return content;
  } else {
    return <FreeBoardGamesBar>{content}</FreeBoardGamesBar>;
  }
}

export default MessagePage;
