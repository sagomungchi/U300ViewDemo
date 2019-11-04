import React from 'react';

const EachProject=({match})=>{
    return(
        <div>
            포스트 {match.params.name}
        </div>
    );
};
export default EachProject;