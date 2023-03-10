import React, {useState} from "react";
import style from "../../assets/css/DateSlider.module.css";
import ClassesSlider from "./SliderWithSettings";
import {labelMonth, sliderMonth} from "../utils/months";
import cn from "classnames";

const DateSlider = ({minDate, maxDate, startDate, endDate}) => {

    const [date, setDate] = useState([
        calculateRange(startDate),
        calculateRange(endDate)
    ]);

    const [toggleSlider, setToggleSlider] = useState(false);
    const updateRange = (e, value) => {
        setDate(value)
    };
    function calculateRange(extremeDate) {
        return (extremeDate.getFullYear() - minDate.getFullYear()) * 12 +
            extremeDate.getMonth() - minDate.getMonth()
    }

    const getDatesInRange = (minDate, maxDate, toggleValue) => {
        const date = new Date(minDate.getTime());
        const dates = [];
        let sliderValue = 0;
        let label = "";

        while (date <= maxDate) {
            if ((new Date(date)).getMonth() === 0) {
                label = `${(new Date(date)).getFullYear()}`
            } else {
                label = toggleValue ? `${sliderMonth[(new Date(date)).getMonth()]}` : null
            }
            dates.push({
                value: sliderValue,
                label
            })
            sliderValue++;
            date.setMonth(date.getMonth() + 1);
        }
        return dates;
    };
    const valueLabelFormat = value => {
        const date = new Date(minDate.getTime());
        date.setMonth(date.getMonth() + value);

        return `${labelMonth[date.getMonth()]} ${date.getFullYear()}`
    };

    return (
        <div className={style.substrate}>
            <main className={style.slider}>
                <nav>
                    <button onClick={() => setToggleSlider(false)}
                            className={!toggleSlider ?
                                cn(style.switchElement, style.activeSwitchElement) :
                                style.switchElement}>Все года
                    </button>
                    <button onClick={() => setToggleSlider(true)}
                            className={toggleSlider ?
                                cn(style.switchElement, style.activeSwitchElement) :
                                style.switchElement}>Месяца
                    </button>
                </nav>
                <ClassesSlider date={date}
                               updateRange={updateRange}
                               items={getDatesInRange(minDate, maxDate, toggleSlider)}
                               valueLabelFormat={valueLabelFormat}
                               isToggle={toggleSlider}
                />
            </main>
        </div>
    )
}

export default DateSlider;