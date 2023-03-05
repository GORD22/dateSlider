import React, {useState} from "react";
import style from "./DateSlider.module.css";
import ClassesSlider from "./SliderWithSettings";
import {labelMonth, sliderMonth} from "../common/months";
import cn from "classnames";

const DateSlider = ({minDate, maxDate, startDate, endDate}) => {
    const getDatesInRange = (minDate, maxDate, toggleValue) => {
        const date = new Date(minDate.getTime());
        const dates = [];
        let sliderValue = 0;

        while (date <= maxDate) {
            if ((new Date(date)).getMonth() === 0) {
                dates.push({
                    value: sliderValue, label: `${(new Date(date)).getFullYear()}`
                })
            } else {
                dates.push({
                    value: sliderValue,
                    label: toggleValue ? `${sliderMonth[(new Date(date)).getMonth()]}` : ''
                })
            }
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

    const [date, setDate] = useState([
        (startDate.getFullYear() - minDate.getFullYear()) * 12 + startDate.getMonth() - minDate.getMonth(),
        (endDate.getFullYear() - minDate.getFullYear()) * 12 + endDate.getMonth() - minDate.getMonth()
    ]);
    const updateRange = (e, value) => {
        setDate(value)
    };

    const [toggleSlider, setToggleSlider] = useState(false);

    return (
        <div className={style.substrate}>
            <div className={style.slider}>
                <div>
                    <div onClick={() => setToggleSlider(false)}
                         className={!toggleSlider ?
                             cn(style.switchElement, style.activeSwitchElement) :
                             style.switchElement}>Все года
                    </div>
                    <div onClick={() => setToggleSlider(true)}
                         className={toggleSlider ?
                             cn(style.switchElement, style.activeSwitchElement) :
                             style.switchElement}>Месяца
                    </div>
                </div>
                <ClassesSlider date={date}
                               updateRange={updateRange}
                               items={getDatesInRange(minDate, maxDate, toggleSlider)}
                               valueLabelFormat={valueLabelFormat}
                               isToggle={toggleSlider}
                />
            </div>
        </div>
    )
}

export default DateSlider;