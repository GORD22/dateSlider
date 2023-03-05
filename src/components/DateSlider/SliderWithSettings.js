import {Slider} from "@material-ui/core";
import cn from "classnames";
import {useStyles} from "./SliderStyles";


const ClassesSlider = ({date, updateRange, items, valueLabelFormat, isToggle}) => {
    const classes = useStyles();

    return (
        <Slider value={date}
                onChange={updateRange}
                marks={items}
                min={items[0].value}
                max={items[items.length - 1].value}
                classes={{
                    root: classes.root,
                    rail: classes.rail,
                    track: classes.track,
                    thumb: classes.thumb,
                    mark: classes.mark,
                    markLabel: isToggle ? cn(classes.markLabel, classes.markLabelMonth) : classes.markLabel
                }}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                valueLabelDisplay="on"
        />
    )
}

export default ClassesSlider;