import './App.css';
import Radio from './components/Radio';
import Toggle from './components/Toggle';

function App() {
    const items = [
        { id: '1', value: 'allUser', label: 'Option 1' },
        { id: '2', value: 'loginUser', label: 'Option 2' },
    ];
    const list = [
        { id: '3', value: 'hello', label: 'Option 3' },
        { id: '3', value: 'world', label: 'Option 4' },
    ];

    return (
        <>
            <Toggle items={list} />
            <Radio items={items} />
        </>
    );
}

export default App;
