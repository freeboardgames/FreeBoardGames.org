import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Deck } from 'games/zooparade/components/bcard.stories';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '400px',
            height: '80px',
            fontSize: '10px',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            overflow: 'hide',
            backgroundColor: 'grey',

        },
        gridList: {
            flexWrap: 'nowrap',
            height: '80px',
            fontSize: '10px',
            minWidth: '400px',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            //transform: 'translateZ(0)',
            alignContent: 'center',
            backgroundColor: 'blue',
        },

        fitpicture: {
            height: '80px',
            objectFit: 'scale-down',
            borderRadius: 10
        }
    }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function CardContainer(props) {
    const classes = useStyles();
    let tileData = props.cards;
    let privacy = props.private && !props.turn
    let view = props.flipped ? !privacy : privacy;



    let tileList = tileData.map((tile) => (
        <GridListTile key={tile.img} cols={1}>
            <img className={classes.fitpicture} src={require(`${view ? './media/png/gray_back.png' : tile.img}`)} alt={tile.id} />
        </GridListTile>
    ))
    if (props.deck) {
        tileList.length = 1;
    }

    let label = props.turn ? 'turn' : props.name;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={6}>
                {tileList}
                <GridListTile cols={2}>
                    <h2>{`${label} : ${props.cards.length}`}</h2>
                </GridListTile>
            </GridList>

        </div>
    );
}
