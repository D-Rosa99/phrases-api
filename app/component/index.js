import React, { useState } from 'react';
import ActivityIndicator from 'react-activity-indicator';

import getPhraseList from '../utils';

export default function App() {
    const [phraseList, setPhraseList] = useState([]);

    if (phraseList.length === 0) {
        getPhraseList(setPhraseList);
    }

    return (
        <>
            {phraseList.length > 0 ? (
                <ul>
                    {phraseList.map(({ text, author }, index) => (
                        <div key={`${author}-${index}`}>
                            <h4>{text}</h4>
                            <span>{author}</span>
                        </div>
                    ))}
                </ul>
            ) : (
                <ActivityIndicator
                    number={4}
                    diameter={40}
                    borderWidth={5}
                    duration={300}
                    activeColor="#66D9EF"
                    borderColor="white"
                    borderRadius="50%"
                />
            )}
        </>
    );
}
