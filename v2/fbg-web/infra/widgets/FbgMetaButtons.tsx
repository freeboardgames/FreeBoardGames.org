import GitHubIcon from "@mui/icons-material/GitHub";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import SubjectIcon from "@mui/icons-material/Subject";
import InfoIcon from "@mui/icons-material/Info";
import css from './FbgMetaButtons.module.css';
import Link from "next/link";

interface FbgMetaButtonsProps {
  omitAbout?: boolean;
}

export function FbgMetaButtons(props: FbgMetaButtonsProps) {
  const buttons = [
    <a
      href="https://github.com/freeboardgames/FreeBoardGames.org"
      target="_blank"
      title="Code"
      key="code"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <GitHubIcon />
      </IconButton>
    </a>,
    <a
      href="https://discord.gg/AaE6n3n"
      target="_blank"
      title="Commmunity"
      key="community"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <ForumIcon />
      </IconButton>
    </a>,
    <a
      href="https://www.freeboardgames.org/docs"
      target="_blank"
      title="Documentation"
      key="documentation"
      rel="noreferrer"
    >
      <IconButton className={css.button}>
        <SubjectIcon />
      </IconButton>
    </a>,
  ];
  if (!props.omitAbout) {
    buttons.push(
    <Link href="/en/about" key="about">
      <a href="#" title="About">
        <IconButton className={css.button}>
          <InfoIcon />
        </IconButton>
      </a>
    </Link>,
    );
  }
  return <div className={css.buttonsContainer}>{buttons}</div>;
} 