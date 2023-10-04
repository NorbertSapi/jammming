import React from 'react';

function SearchButton(props) {
    const {text = 'Defaul Text of Big Buttont'} = props;
    return (
      <button>{text}</button>
    );
}

export default SearchButton;