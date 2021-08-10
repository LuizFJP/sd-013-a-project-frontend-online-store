import React from 'react';
import PropTypes from 'prop-types';

class EmptyList extends React.Component {
  render() {
    const { validator } = this.props;

    return (
      <div>
        { validator && <p>Nenhum produto encontrado</p> }
      </div>
    );
  }
}

EmptyList.propTypes = {
  validator: PropTypes.bool.isRequired,
};

export default EmptyList;
