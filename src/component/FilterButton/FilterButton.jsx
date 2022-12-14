import React from 'react';

const FilterButton = (props) => {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
            key={props.key}
            onClick={() => { props.setFilter(props.name) }}>
            <span>{props.name}</span>
        </button >
    );
};

export default FilterButton;