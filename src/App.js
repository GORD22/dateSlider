import DateSlider from "./components/DateSlider/DateSlider";


const App = () => {
    const minDate = new Date(2015, 0);
    const maxDate = new Date(2017, 0);
    const startDate = new Date(2015, 5);
    const endDate = new Date(2016, 0);

    return (
        <DateSlider minDate={minDate} maxDate={maxDate}
                    startDate={startDate} endDate={endDate}
        />
    )
};

export default App;
