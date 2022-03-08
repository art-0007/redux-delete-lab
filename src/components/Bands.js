import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBands = () => {
        console.log(this.props.bands)
        return this.props.bands.map((band) => (
          <Band delete={this.props.delete} key={band.id} band={band} />
        ));
      };

    render() {
        return (
            <ol>
                {this.renderBands()}
            </ol>
        );
    }
}
  
  export default Bands

