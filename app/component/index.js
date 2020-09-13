import React, { useState } from 'react';
import ActivityIndicator from 'react-activity-indicator';

import getPhraseList from '../utils';
// import './style.css';

export default function App() {
    const [phraseList, setPhraseList] = useState([]);
    // const [logIn, setlogIn] = useState(false);
    // const [signIn, setSignIn] = useState(false);

    if (phraseList.length === 0) {
        getPhraseList(setPhraseList);
    }

    return (
        <>
            <button className={'app-signin'}>Sign Up</button>

            {phraseList.length > 0 ? (
                <ul className={'app-list'}>
                    {phraseList.map(({ text, author }, index) => (
                        <div
                            className={'app-list-item'}
                            key={`${author}-${index}`}
                        >
                            <h4>{text}</h4>
                            <span>{author}</span>
                        </div>
                    ))}
                </ul>
            ) : (
                <ActivityIndicator
                    number={3}
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
