"use client";
import React, { useState } from 'react';

function ChessTournamentForm() {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [collegeYear, setCollegeYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Roll Number: ${rollNumber}, College Year: ${collegeYear}`);
        // You can replace the console.log statement with your own code to submit the form data to your server.
    };

    return (
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScxZn4Fid4LTVs5W5L1tluBgz8IQoMjj_zgcipeuv_aNDS5Dw/formResponse">
            <label>
                Name:
                <input name='entry.1653202252' type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                University Roll Number:
                <input name='entry.1467900363' type="text" value={rollNumber} onChange={(event) => setRollNumber(event.target.value)} />
            </label>
            <label>
                College Year:
                <input name='entry.733385754' type="text" value={collegeYear} onChange={(event) => setCollegeYear(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ChessTournamentForm;