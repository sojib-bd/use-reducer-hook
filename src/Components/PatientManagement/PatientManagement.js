import React from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from '../PatientReducer/PatientReducer';
import { useRef } from 'react';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);

    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            id: state.patient.length + 1,
            type: 'ADD_PATIENT',
            name: nameRef.current.value
        })
        nameRef.current.value = ""
        console.log(nameRef.current.value)
    }
    return (
        <div>
            <h1>Patient Management: {state.patient.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
                {
                    state.patient.map(pt => <li
                        onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}
                        key={pt.id}
                    >{pt.name}</li>)
                }
            </form>
        </div>
    );
};

export default PatientManagement;