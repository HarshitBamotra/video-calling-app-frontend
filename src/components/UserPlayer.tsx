import { useEffect, useRef } from "react";

const UserPlayer : React.FC<{stream?: MediaStream}> = ({stream})=>{

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <video
            ref={videoRef}
            // className="w-[300px] h-[200px]"
            // style={{width: "300px", height:"200px"}}
            muted = {true}
            autoPlay = {true}
        />
    );
}

export default UserPlayer;