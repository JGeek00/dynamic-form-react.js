import React, { useState } from 'react';
import Input from './Input';

const Form = ({formDefinition, inValues}) => {
    const [values, setValues] = useState({...inValues});

    const changeValue = (e, id) => {
        const newValues = {
            ...values,
            [id]: e.target.value
        };

        setValues({...newValues});
    }

    return (
        <div style={{display: 'flex', flexDirection: "column", width: "fit-content"}}>
            {
                formDefinition.map(form => {
                    const value = values[form.id];
                    if (!form.depends) {
                        return (
                            <div key={form.id}>
                                <span>{form.label}</span>
                                <Input id={form.id} type={form.type} value={value} options={form.options} label={form.label} changeValue={changeValue}/>
                            </div>
                        )
                    }
                    else {
                        if (form.displayIf === values[form.depends]) {
                            return (
                                <div key={form.id} style={{marginLeft: "20px"}}>
                                    <span>{form.label}</span>
                                    <Input id={form.id} type={form.type} value={value} options={form.options} label={form.label} changeValue={changeValue} />
                                </div>
                            )
                        }
                        else {
                            return (
                                <React.Fragment key={form.id} />
                            )
                        }
                    }
                })
            }
        </div>
    );
}
 
export default Form;