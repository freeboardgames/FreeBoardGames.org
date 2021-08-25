import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import SEO from 'infra/common/helpers/SEO';
import Breadcrumbs from 'infra/common/helpers/Breadcrumbs';
import { useRouter } from 'next/router';
import { GAMES_LIST } from 'games';
import { IGameStatus } from 'gamesShared/definitions/game';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useTranslation } from 'infra/i18n';

const About = () => {
  const router = useRouter();
  const { t } = useTranslation('About');
  return (
    <FreeBoardGamesBar>
      <Breadcrumbs
        itemListElements={[
          {
            position: 1,
            name: t('title'),
            item: router.pathname,
          },
        ]}
      />
      <SEO title={t('title')} description={t('description')} />
      <AboutCard />
      <Contributors />
      <Credits />
    </FreeBoardGamesBar>
  );
};
export default About;

function AboutCard() {
  const { t } = useTranslation('About');
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: '17px' }}>
          {t('card.title')}
        </Typography>
        <Typography component="p">{t('card.description')}</Typography>
      </CardContent>
    </Card>
  );
}

function getContributorToGames(): { [contributor: string]: string[] } {
  let result = {};
  for (const game of GAMES_LIST) {
    if (game.status != IGameStatus.PUBLISHED) {
      continue;
    }
    for (const contributor of game.contributors) {
      result = {
        ...result,
        [contributor]: [...(result[contributor] || []), game.name],
      };
    }
  }
  return result;
}

function compare(a, b) {
  const initialA = a.toUpperCase();
  const initialB = b.toUpperCase();

  if (initialA > initialB) {
    return 1;
  } else if (initialA < initialB) {
    return -1;
  }
  return 0;
}

function Contributors() {
  const { t } = useTranslation('About');
  const contributorsToGames = getContributorToGames();
  const contributors = Object.keys(contributorsToGames).sort(compare);
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {t('contributors.title')}
        </Typography>
        <List>
          {contributors.map((contributor) => (
            <ListItem key={contributor}>
              <ListItemAvatar>
                <Avatar alt={contributor} src={`https://github.com/${contributor}.png?size=40`} />
              </ListItemAvatar>

              <ListItemText primary={contributor} secondary={contributorsToGames[contributor].join(', ')} />

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
  const { t } = useTranslation('About');
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {t('credits.title')}
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary={t('credits.chess_move_sound_by_splice_sound')} />
            <Button size="small" color="primary" href="https://freesound.org/people/SpliceSound/sounds/218333/">
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.seabattle_hit_sound_by_fridobeck')} />
            <Button size="small" color="primary" href="https://freesound.org/people/fridobeck/sounds/191694/">
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.seabattle_hit_sound_by_qubodup')} />
            <Button size="small" color="primary" href="https://freesound.org/people/qubodup/sounds/182429/">
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.seabattle_miss_sound_by_inspector_j')} />
            <Button size="small" color="primary" href="https://freesound.org/people/InspectorJ/sounds/352103/">
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.seabattle_miss_sound_by_cg_effex')} />
            <Button size="small" color="primary" href="https://freesound.org/people/CGEffex/sounds/98335/">
              freesound.org
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.blox_font_used_in_logo_by_brian_kent')} />
            <Button size="small" color="primary" href="https://www.dafont.com/blox.font">
              dafont.com
            </Button>
          </ListItem>

          <ListItem>
            <ListItemText primary={t('credits.bingo_thumbnail_image')} />
            <Button size="small" color="primary" href="http://www.freepik.com">
              freepik.com
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
