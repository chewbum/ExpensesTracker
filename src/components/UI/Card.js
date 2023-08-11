import './Card.css';
//extract out common CSS code as a wrapper component 

const Card = (props) => {
    //define multiple CSS files used, card and props.className
    const classes = 'card ' + props.className;
    //.children refers to the content wrapped inside
    return <div className={classes}>{props.children}</div>;
}

export default Card;