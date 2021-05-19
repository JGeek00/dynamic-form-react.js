import Form from './Form';
import formDefinition from './formDefinition.json';
import values from './values.json';

function App() {
    return (
        <Form formDefinition={formDefinition} inValues={values} />
    );
}

export default App;
