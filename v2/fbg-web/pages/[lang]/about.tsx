import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FreeBoardGamesBar } from "fbg-games/gamesShared/components/fbg/FreeBoardGamesBar";
import SEO from "fbg-web/infra/misc/SEO";
import { BreadcrumbJsonLd } from "next-seo";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "next-i18next";
import { loadGameYaml } from "../../infra/games/GameLoader";
import gamesJson from "fbg-games/games.json";
import {
  GameTranslationStatus,
  parseGameTranslations,
} from "infra/games/GameTranslationsParser";
import { parseGameDetails } from "../../infra/games/GameDetailsParser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import css from "./about.module.css";
import languages from "../../public/locales/languages.json";
import { parseGameSummary } from "infra/games/GameSummaryParser";
import { PropaneSharp } from "@mui/icons-material";
import { FbgMetaButtons } from "infra/widgets/FbgMetaButtons";

interface AboutProps {
  lang: string;
  contributorsToGames: { [contributor: string]: string[] };
}

const About = (props: AboutProps) => {
  const { t } = useTranslation("About");
  return (
    <FreeBoardGamesBar lang={props.lang}>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: t("title"),
            item: `/${props.lang}/about`,
          },
        ]}
      />
      <SEO title={t("title")} description={t("description")} />
      <Contributors {...props} />
      <AboutCard />
      <Credits />
    </FreeBoardGamesBar>
  );
};
export default About;

function AboutCard() {
  const { t } = useTranslation("About");
  return (
    <Card className={css.Card}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          style={{ marginBottom: "17px" }}
        >
          {t("card.title")}
        </Typography>
        <Typography component="p">{t("card.description")}</Typography>
        <FbgMetaButtons omitAbout />
      </CardContent>
    </Card>
  );
}

function Contributors(props: AboutProps) {
  const { t } = useTranslation("About");
  const contributors = Object.keys(props.contributorsToGames);
  contributors.sort();
  return (
    <Card className={`${css.Card} ${css.ContributorsCard}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {t("contributors.title")}
        </Typography>
        <List>
          {contributors.map((contributor) => (
            <ListItem key={contributor}>
              <ListItemAvatar>
                <Avatar
                  alt={contributor}
                  src={`https://github.com/${contributor}.png?size=40`}
                />
              </ListItemAvatar>

              <ListItemText
                primary={<a id={contributor}>{contributor}</a>}
                secondary={props.contributorsToGames[contributor].join(", ")}
              />

              <Button
                size="small"
                color="primary"
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${contributor}`}
              >
                GitHub
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

function Credits() {
  const { t } = useTranslation("About");
  return (
    <Card className={css.Card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {t("credits.title")}
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary={t("credits.chess_move_sound_by_splice_sound")}
            />
            <Button
              size="small"
              color="primary"
              href="https://freesound.org/people/SpliceSound/sounds/218333/"
            >
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("credits.seabattle_hit_sound_by_fridobeck")}
            />
            <Button
              size="small"
              color="primary"
              href="https://freesound.org/people/fridobeck/sounds/191694/"
            >
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("credits.seabattle_hit_sound_by_qubodup")}
            />
            <Button
              size="small"
              color="primary"
              href="https://freesound.org/people/qubodup/sounds/182429/"
            >
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("credits.seabattle_miss_sound_by_inspector_j")}
            />
            <Button
              size="small"
              color="primary"
              href="https://freesound.org/people/InspectorJ/sounds/352103/"
            >
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("credits.seabattle_miss_sound_by_cg_effex")}
            />
            <Button
              size="small"
              color="primary"
              href="https://freesound.org/people/CGEffex/sounds/98335/"
            >
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t("credits.blox_font_used_in_logo_by_brian_kent")}
            />
            <Button
              size="small"
              color="primary"
              href="https://www.dafont.com/blox.font"
            >
              dafont.com
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t("credits.bingo_thumbnail_image")} />
            <Button size="small" color="primary" href="http://www.freepik.com">
              freepik.com
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { lang: string };
}): Promise<{ props: AboutProps }> {
  const contributorsToGames: { [contributor: string]: string[] } = {};
  for (const gameId of gamesJson) {
    const gameYaml = await loadGameYaml(gameId);
    const translations = parseGameTranslations(gameYaml, gameId);
    const status = translations[params.lang];
    if (
      status != GameTranslationStatus.DONE &&
      status != GameTranslationStatus.PARTIAL &&
      params.lang != "en"
    ) {
      continue;
    }
    const gameSummary = parseGameSummary(gameYaml, params.lang, gameId);
    const gameDetails = parseGameDetails(gameYaml, params.lang, gameId);
    for (const contributor of gameDetails.contributors) {
      if (!(contributor in contributorsToGames)) {
        contributorsToGames[contributor] = [];
      }
      contributorsToGames[contributor].push(gameSummary.name);
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(params.lang, ["About"])),
      lang: params.lang,
      contributorsToGames,
    },
  };
}

export async function getStaticPaths() {
  const paths = languages.map((lang: string) => ({ params: { lang } }));
  return { paths, fallback: false };
}
