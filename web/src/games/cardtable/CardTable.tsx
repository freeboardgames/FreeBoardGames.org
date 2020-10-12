import React, { FunctionComponent } from 'react';
import CardContainer from './CardContainer';
import { IG } from './game';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen, pink, yellow, purple } from '@material-ui/core/colors';

interface ICardTableProps {
    G: IG
}

const useStyles = makeStyles(() => ({
    root: {
        width: '400px',
        height: '250px',
        fontSize: '10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        backgroundColor: pink['A100'],
    },
    crib: {
        minWidth: '400px',
        height: '80px',
        fontSize: '10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        backgroundColor: lightGreen[900],
    },
    playedDown: {
        //flexGrow: 1,
        minWidth: '400px',
        height: '80px',
        fontSize: '10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: yellow['A400'],
    },

    playedTop: {
        //flexGrow: 1,
        minWidth: '400px',
        flexDirection: 'row',
        height: '80px',
        fontSize: '10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: purple['100'],
    }


}));

const CardTable: FunctionComponent<ICardTableProps> = (props: ICardTableProps) => {

    const classes = useStyles();

    let northPlays = props.G.hands.north.played;
    let southPlays = props.G.hands.south.played;
    let crib = props.G.hands.east.private;
    let cribFlipped = props.G.hands.east.cribFlipped ? { flipped: 'flipped' } : {};

    return (<div className={classes.root} >
        <Grid container spacing={2}>
            <Grid item container xs={12} spacing={2}>
                <Grid className={classes.playedTop} item xs={12} spacing={2}>
                    <CardContainer className={classes.playedTop} cards={southPlays} name="south play" />
                </Grid>
                <Grid className={classes.crib} item xs={12} spacing={2}>
                    <CardContainer className={classes.crib} cards={crib} private name="crib" {...cribFlipped} />
                </Grid>
                <Grid className={classes.playedDown} item xs={12} spacing={2}>
                    <CardContainer className={classes.playedDown} cards={northPlays} name="north play" />
                </Grid>
            </Grid>
        </Grid>
    </div >)

};

export default CardTable;



