import React, { useEffect, useRef, useState } from 'react';


type viewDataType = {
    seq?: number,
    nm?: string,
}



export const BoardView = () => {

    const [viewData, set_viewData] = useState<viewDataType>();

    useEffect(() => {

        setTimeout(() => {
            set_viewData({ seq: 1, nm: "게시판 이름" });
        }, 1000);
    }, [])

    return (
        <table>
            <tbody>
                <tr>
                    <tr>{viewData?.seq}</tr>
                    <th>{viewData?.nm}</th>
                </tr>
            </tbody>
        </table>
    );
}

export default BoardView;