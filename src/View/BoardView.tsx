import React, { useEffect, useState } from 'react';


type viewDataType = {
    seq?: number,
    nm?: string,
}

/** 임시화면 (프론트 환경셋팅 후 개발) */
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
                    {/* <th>{isEmpty(viewData?.nm)}</th> */}
                    <th>{viewData?.nm}</th>
                </tr>
            </tbody>
        </table>
    );
}

export default BoardView;