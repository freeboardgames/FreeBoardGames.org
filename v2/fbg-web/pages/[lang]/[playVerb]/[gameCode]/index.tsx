import type { NextPage } from "next";
import { loadGameYaml } from "infra/games/GameLoader";
import { loadI18nConfig } from "infra/i18n/I18nConfigLoader";
import { parseI18nConfig } from "infra/i18n/I18nConfigParser";
import { GameSummary, parseGameSummary } from "infra/games/GameSummaryParser";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import {
  GameDetails,
  GameInstructions,
  parseGameDetails,
} from "infra/games/GameDetailsParser";
import { ReactElement } from "react";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { listGameSummaries } from "infra/games/ListGameSummaries";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { FreeBoardGamesBar } from 'fbg-games/gamesShared/components/fbg/FreeBoardGamesBar';
import { DesktopView, MobileView } from 'fbg-games/gamesShared/components/fbg/DesktopMobileView';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import css from './index.module.css';
import { BreadcrumbJsonLd } from 'next-seo';

interface GameInfoProps {
  summary: GameSummary;
  details: GameDetails;
  urlParams: UrlParams;
}

interface UrlParams {
  lang: string;
  playVerb: string;
  gameCode: string;
  gameId: string;
}

interface UrlPath {
  params: UrlParams;
}

const gameInstructionToCard = function (
  instructions: GameInstructions
): ReactElement {
  let video = null;
  const videoId = instructions.videoId;
  if (videoId) {
    video = (
      <p>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          rel="noreferrer"
          target="_blank"
        >
          Watch video
        </a>
      </p>
    );
  }
  return (
    <>
      <p>{instructions.text}</p>
      {video}
    </>
  );
};

const gameModeToCard = function (
  params: UrlParams,
  mode: GameMode
): ReactElement {
  const baseUrl = `/${params.lang}/${params.playVerb}/${params.gameCode}`;
  switch (mode) {
    case GameMode.AI:
      return (
        <li>
          AI:{" "}
          <Link href={`${baseUrl}/ai`}>
            <a>Play!</a>
          </Link>
        </li>
      );
    case GameMode.OnlineFriend:
      return (
        <li>
          Online Friend:{" "}
          <Link href={`${baseUrl}/online`}>
            <a>Play!</a>
          </Link>
        </li>
      );
    case GameMode.LocalFriend:
      return (
        <li>
          Local Friend:{" "}
          <Link href={`${baseUrl}/local`}>
            <a>Play!</a>
          </Link>
        </li>
      );
  }
};

const GameInfo: NextPage<GameInfoProps> = function (props: GameInfoProps) {
  const { t } = useTranslation("GameInfo");
  const modeCards = props.details.modes.map((mode) =>
    gameModeToCard(props.urlParams, mode)
  );
  const instructions = props.details.instructions;
  const gameVideoInstructions = instructions.videoId ? <GameInstructionsVideo videoId={instructions.videoId} /> : null;

  const gameTextInstructions = instructions.text ? <GameInstructionsText text={instructions.text} /> : null;
  const playTitle = t("play", { name: props.summary.name });
  const urlParams = props.urlParams;

  return (
    <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView lang={props.summary.lang}>
      <SEO
        title={`${playTitle}, ${props.summary.callout}`}
        description={props.details.descriptionTag}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: urlParams.playVerb,
            item: `/${urlParams.lang}/${urlParams.playVerb}`,
          },
          {
            position: 2,
            name: props.summary.name,
            item: `/${urlParams.lang}/${urlParams.playVerb}/${urlParams.gameCode}`,
          },
        ]}
      />
      <DesktopView>
        <div className={css.RootWrapper} data-testid={'TabletViewDiv'}>
          <div className={css.LeftCol}>
            <Typography variant="h4" component="h1">
              {props.urlParams.playVerb}
            </Typography>
            <GameContributors game={gameDef} />
            <GameModePicker gameDef={gameDef} />
          </div>
          <div className={css.RightCol}>
            <GameCard game={gameDef} />
            <div style={{ marginTop: '16px' }}>
              {!isFullyTranslated(gameDef) && (
                <Alert severity="warning">
                  <Trans
                    t={t}
                    i18nKey="missing_translation_warning"
                    components={{
                      docs: (
                        <a
                          aria-label="translation docs"
                          target="_blank"
                          href="/docs?path=/story/documentation-game-translation--page"
                        />
                      ),
                    }}
                  />
                </Alert>
              )}
              <div className={css.InstructionsWrapper}>
                {gameTextInstructions}
              </div>
            </div>
            <div style={{ marginTop: '32px' }}>{gameVideoInstructions}</div>
          </div>
        </div>
      </DesktopView>
      <MobileView>
        <GameCard game={gameDef} />
        <div style={{ padding: '8px' }} data-testid={'MobileViewDiv'}>
          <Typography variant="h5" component="h1">
            {playTitle}
          </Typography>
          <GameContributors game={gameDef} />
          <GameModePicker gameDef={gameDef} />
          {gameVideoInstructions}
          {gameTextInstructions}
        </div>
      </MobileView>
    </FreeBoardGamesBar>
  );
};

export async function getStaticProps(
  path: UrlPath
): Promise<{ props: GameInfoProps }> {
  const { lang, gameCode } = path.params;
  const gameId = await getGameIdFromCode(lang, gameCode);
  const gameYaml = await loadGameYaml(gameId);
  const summary = parseGameSummary(gameYaml, lang, gameCode);
  const details = parseGameDetails(gameYaml, lang, gameCode);
  return {
    props: {
      summary,
      details,
      urlParams: path.params,
      ...(await serverSideTranslations(lang, ["GameInfo"])),
    },
  };
}

export async function getStaticPaths() {
  const i18nConfig = parseI18nConfig(await loadI18nConfig());
  const paths = (await listGameSummaries()).map((gameSummary) => {
    const gameCode = gameSummary.code;
    const lang = gameSummary.lang;
    const gameId = gameSummary.id;
    const playVerb = i18nConfig[lang].playVerb;
    setI18nSymlink(lang, gameId);
    return { params: { lang, playVerb, gameCode, gameId } };
  });
  return { paths, fallback: false };
}

function setI18nSymlink(lang: string, gameId: string) {
  const symlinkPath = path.join(
    process.env.ROOT!,
    `./public/locales/${lang}/game-${gameId}.json`
  );
  const destPath = path.join(
    `../../../../fbg-games/${gameId}/locales/${lang}.json`
  );
  if (fs.existsSync(symlinkPath)) {
    return;
  }
  fs.symlinkSync(destPath, symlinkPath, "file");
}

export default GameInfo;
