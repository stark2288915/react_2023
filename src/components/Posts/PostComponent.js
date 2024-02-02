import React from 'react';

const PostComponent = ({props}) => {
    return (
            <div>
                <ul>
                    <li>id: {props.id}</li>
                    <li>title: {props.title}</li>
                </ul>
                <button onClick={() => {
                    console.log(props);

                }
                }>about post</button>
            </div>
    );
};

export {PostComponent};