import React from 'react';

const Input = ({id, type, value, options, label, changeValue}) => {
    switch (type) {
        case 'text':
            return (
                <input type="text" value={value} style={{margin: '20px'}} onChange={(e) => changeValue(e, id)} />
            )

        case 'select':
            return (
                <select style={{margin: '20px'}} value={value} onChange={(e) => changeValue(e, id)}>
                    {
                        options.map(opt => (
                            <option key={opt} value={opt} style={{margin: '10px', marginLeft: "10px"}}>{opt}</option>
                        ))
                    }
                </select>
            )
    
        default:
            return (
                <React.Fragment />
            )
    }
}
 
export default Input;