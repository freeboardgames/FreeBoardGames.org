import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
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
      {getContactCard()}
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
          About Sahajanad Games
        </Typography>
        <Typography component="p">
          {'    '} Sahajanand Games is a platform for Satsangis to play games. The aim of this project is to connect with Satsang in a new way. In future, we will continuously add new games and make our platform more interactive.
          <br></br><br></br>
          {'    '} This project is Open Source and it is maintained by volunteer Satsangies, who do this to get the belssings of Shreeji Maharaj and great Saints. If you any suggestion or would like to help us make new games, you can always contact us via email or chat with on Discord. 
        </Typography>
      </CardContent>
    </Card>
  );
}

function getContactCard() {
  return (
    <Card style={{ marginTop: '16px' }}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Contributors
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Email" />
          <Button size="small" color="primary" href="mailto:sahajanand.games@gmail.com" target="_blank">
            sahajanand.games@gmail.com
          </Button>
        </ListItem>
        <ListItem>
          <ListItemText primary="Chat" />
          <Button size="small" color="primary" href="https://discord.gg/uRKYUY"  target="_blank">
            Discord
          </Button>
        </ListItem>
      </List>
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
            <ListItemText primary="Gaurav Patel" />
            {/* <Button size="small" color="primary" href="https://www.jasonharrison.us/?from=freeboardgame.org">
              Website
            </Button> */}
            <Button size="small" color="primary" href="https://github.com/gk-patel">
              GitHub
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Sandip Sorathiya" />
            <Button size="small" color="primary" href="https://github.com/sandipsorathiya">
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
            <ListItemText primary="Project is a Fork of " />
            <Button size="small" color="primary" href="https://github.com/freeboardgames/FreeBoardGames.org">
              FreeBoardGames.org
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
