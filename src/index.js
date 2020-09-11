import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from 'react-compound-timer'


const withTimer = timerProps => WrappedComponent => wrappedComponentProps => (
    <Timer {...timerProps}>
        {timerRenderProps =>
            <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps} />}
    </Timer>
);



class TimeUpDown extends React.Component {

    render() {
        const { start, setTime, getTime } = this.props.timer; 
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <h1>
                        <Timer.Hours />:
                        <Timer.Minutes />:
                        <Timer.Seconds />
                    </h1>
                </div>
                <div style={{ display: 'table', margin: 'auto' }}>
                    <button className={'MyButton'} onClick={() => { setTime(getTime() + 60 * 60000); start(); }}>+</button>
                    <button className={'MyButton'} onClick={() => { setTime(getTime() + 60000); start(); }}>+</button>
                    <button onClick={() => { setTime(getTime() + 1000); start(); }}>+</button>

                </div>
                <div className={'divtop'} style={{ display: 'table', margin: 'auto' }}>
                    <button className={'MyButton'} onClick={() => { getTime() - 60 * 60000 > 0 ? setTime(getTime() - 60 * 60000) : setTime(0) }}>-</button>
                    <button className={'MyButton'} onClick={() => { getTime() - 60000 > 0 ? setTime(getTime() - 60000) : setTime(0) }}>-</button>
                    <button onClick={() => { getTime() - 1000 > 0 ? setTime(getTime() - 1000) : setTime(0) }}>-</button>

                </div>
            </div>
        );
    }
}

const TimerHOC = withTimer({
    direction: 'backward',
    initialTime: 60000 * 60 * 10,
    lastUnit: "h",

})(TimeUpDown);

ReactDOM.render(
    <TimerHOC />,
    document.getElementById('root')
);
