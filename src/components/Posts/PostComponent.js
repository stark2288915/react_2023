import React from 'react';

const PostComponent = ({props, chosePost}) => {
    return (
            <div className='postDiv'>
                <li>{`${props.id}. ${props.title}`}</li>
                <button onClick={() => {
                    chosePost(props);
                }
                }>details</button>
            </div>
    );
};

export {PostComponent};