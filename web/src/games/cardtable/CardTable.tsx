import React from 'react';
import CardContainer from './CardContainer';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen, pink, yellow, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
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

const CardTable = (props) => {

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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';



// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }


