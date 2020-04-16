import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FreeBoardGamesBar from 'components/App/FBGBar';
import SEO from 'components/SEO';
import Breadcrumbs from 'components/Breadcrumbs';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  return (
    <FreeBoardGamesBar>
      <Breadcrumbs
        itemListElements={[
          {
            position: 1,
            name: 'About',
            item: router.pathname,
          },
        ]}
      />
      <SEO title={'About'} description={'About FreeBoardGames.org, a free and open-source software project.'} />
      {getAboutCard()}
      {getContributorsCard()}
      {getCreditsCard()}
    </FreeBoardGamesBar>
  );
};

function getAboutCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: '17px' }}>
          About FreeBoardGames.org
        </Typography>
        <Typography component="p">
          FreeBoardGames.org is a free (as in freedom), mobile-first, board game platform. Its goal is to popularize
          board games and to make them easy to play with friends, even from afar.
        </Typography>
      </CardContent>
    </Card>
  );
}

function getContributorsCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Contributors
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="flamecoals" />
            <Button size="small" color="primary" href="https://github.com/flamecoals">
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="JasonHarrison" />
            <Button size="small" color="primary" href="https://www.jasonharrison.us/?from=freeboardgame.org">
              Website
            </Button>
            <Button size="small" color="primary" href="https://github.com/jasonharrison">
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="JosefKuchar" />
            <Button size="small" color="primary" href="http://josefkuchar.com">
              Website
            </Button>
            <Button size="small" color="primary" href="https://github.com/JosefKuchar">
              GitHub
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

function getCreditsCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Credits
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Chess move sound by SpliceSound" />
            <Button size="small" color="primary" href="https://freesound.org/people/SpliceSound/sounds/218333/">
              freesound.org
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Seabattle hit sound by fridobeck" />
            <Button size="small" color="primary" href="https://freesound.org/people/fridobeck/sounds/191694/">
              freesound.org
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Seabattle hit sound by qubodup" />
            <Button size="small" color="primary" href="https://freesound.org/people/qubodup/sounds/182429/">
              freesound.org
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Seabattle miss sound by InspectorJ" />
            <Button size="small" color="primary" href="https://freesound.org/people/InspectorJ/sounds/352103/">
              freesound.org
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Seabattle miss sound by CGEffex" />
            <Button size="small" color="primary" href="https://freesound.org/people/CGEffex/sounds/98335/">
              freesound.org
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Blox font (used in logo) by Brian Kent" />
            <Button size="small" color="primary" href="https://www.dafont.com/blox.font">
              dafont.com
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
