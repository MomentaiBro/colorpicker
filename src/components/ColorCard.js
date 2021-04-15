const ColorCard = props => {
    return (
        <div className="ui column">
            <div
                className="ui card"
                key={props.bot.id}
                onClick={() => console.log("add code to connect event listener")}
                >
                    Color Card
            </div>
        </div>
    );
};

export default ColorCard;