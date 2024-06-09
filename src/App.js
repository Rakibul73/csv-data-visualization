import "./App.css";
import Table from "./Table";
import Chart from "./Chart";
import PieChart from './PieChart';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h5> Chart Visualization</h5>
                <Chart />
                <h5>Pie Chart Visualization (shows how many of each trade code exist)</h5>
                <PieChart />
                <h1>Data Table</h1>
                <h5>Click in the field to edit</h5>
                <Table />
            </header>
        </div>
    );
}

export default App;
