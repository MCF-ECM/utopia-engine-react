import React, { Component } from 'react';

import Pin from '../../components/UI/Pin/Pin';
import classes from './Map.module.css';


const styles = [
    classes.Peak,
    classes.Wilds,
    classes.Root,
    classes.Canyon,
    classes.Ruined,
    classes.Maw,
];

class Map extends Component
{
    state = {zone: []};

    componentDidMount() {
        if (this.state.zone.length === 0) {
            fetch('/api/zones')
                .then((res) => res.json())
                .then(
                    (result) => {
                        this.setState({
                            ...this.state, zone: result
                        });
                    },
                    (error) => console.log(error)
                );
        }
    }

    render() {
        return (
            <div
                className={classes.Map}
                style={{backgroundImage: `url("/images/map.png")`}}
            >
                {this.state.zone.map((zone, index) =>
                    <span className={styles[index]} key={index}>
                        <Pin id={index} region={zone.name} color={zone.color} />
                    </span>
                )}
            </div>
        );
    }
}

export default Map;
