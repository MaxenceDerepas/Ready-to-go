import Button from "../components/Button";
import { useState } from "react";

const Main = () => {
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);

    return (
        <main>
            <section className="col-1">
                <div className="col-ON">
                    <Button text="ON" setState={setButton1} state={button1} />
                    <Button text="ON" setState={setButton2} state={button2} />
                    <Button text="ON" setState={setButton3} state={button3} />
                </div>
                <div className="col-OFF">
                    <Button text="OFF" setState={setButton1} state={button1} />
                    <Button text="OFF" setState={setButton2} state={button2} />
                    <Button text="OFF" setState={setButton3} state={button3} />
                </div>
            </section>
            <section className="col-2">
                <div
                    style={{
                        backgroundColor:
                            button1 && button2 && button3 === true
                                ? "#46AC4A"
                                : "#D34848",
                    }}
                >
                    {button1 && button2 && button3 === true
                        ? "Go !"
                        : "No Way !"}
                </div>
            </section>
        </main>
    );
};

export default Main;
