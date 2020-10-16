import React from 'react';

interface InnerWrapper {
    me: boolean;

    playerName: string;
    playerActive: boolean;

    dead: boolean;
    vampire: boolean;
    dracula: boolean;

    mayor: boolean;
    priest: boolean;
}

export class BPlayer extends React.Component<InnerWrapper, {}> {
    hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    }

    render() {
        var my_rand_id = this.hashCode(this.props.playerName)

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p> 
                                    { this.props.playerActive ? '🕒 ' : ' ' }
                                </p>
                            </td>
                            <td>
                                <p> 
                                    {this.props.dead ?
                                         this.deads[my_rand_id % this.deads.length]
                                      :
                                        this.props.vampire ?
                                         this.vampires[my_rand_id % this.vampires.length]
                                        :
                                         this.humans[my_rand_id % this.humans.length]
                                    }
                                </p>
                            </td>
                            <td>
                                <p> 
                                    {this.props.playerName}
                                </p>
                            </td>
                            <td>
                                <p> 
                                    {this.props.priest ? '✝️' : ' '}
                                </p>
                            </td>
                            <td>
                                <p> 
                                    {this.props.mayor?  '🏅': ' '}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    vampires =['🧛','🧛🏽‍♂️','🧛🏽‍♀️','🧛🏽','🧛🏿','🧛🏻‍♂️','🧛🏻','🧛🏼','🧛🏼‍♀️','🧛🏼‍♂️','🧛🏾‍♀️']
    humans = ['👩‍🎓','👨‍🏫','🧑‍🌾','👩‍⚖️','🧑‍🔧','👩‍🍳','🧑‍🏭','🧑‍💼','👩‍🔬','🧑‍🎤','👨‍✈️','👩‍🚀','👩‍🚒','👮','👷','👳‍♀️']
    deads = ['⚰️', '💀', '☠', '👻', '⚱', '🪦']
}
