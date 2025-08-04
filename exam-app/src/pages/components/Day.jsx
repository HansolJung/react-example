import React from 'react';
import dummy from '../data/data.json';

function Day({day}) {

    const wordList = dummy.words.filter(word => (word.day === day));
    
    return (
        <>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;