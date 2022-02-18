import React from 'react'

import './styles.css'
const Video = () =>
{

    return(
        <div className='divVideo'>
            
            <h3>Lady Gaga</h3>
            <iframe src="https://www.youtube.com/embed/bwK48G0-AIw?controls=0">
            </iframe>
            <h3>Frida</h3>
            <iframe src="https://www.youtube.com/embed/gpQC7PnCkKE?controls=0">
            </iframe>
            <h3>The Dog</h3>
            <iframe src="https://www.youtube.com/embed/9wA9x-X4W1Y?controls=0">
            </iframe>
            <h3>The Bird</h3>
            <iframe src="https://www.youtube.com/embed/oNa_sCyyqSk?controls=0">
            </iframe>
                      
        </div>
    )
}

export default Video;