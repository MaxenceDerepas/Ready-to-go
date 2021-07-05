const Button = ({ text, setState, state }) => {
    return (
        <div
            className="Button"
            onClick={
                text === "ON"
                    ? () => {
                          setState(true);
                      }
                    : () => {
                          setState(false);
                      }
            }
            style={{
                backgroundColor:
                    (state === true && text === "ON") ||
                    (state === false && text === "OFF")
                        ? "#5C48D3"
                        : "white",
                color:
                    (state === true && text === "ON") ||
                    (state === false && text === "OFF")
                        ? "white"
                        : "#5C48D3",
            }}
        >
            <p>{text}</p>
        </div>
    );
};
export default Button;
