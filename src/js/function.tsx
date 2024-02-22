// import moment from "moment";
// import qs from "qs";
// import React from "react";
export { }


// 타입을 지정하였으면 함수를 만들어 로직 소스 사용
globalThis.isNotEmpty = (data: any): boolean => {
    return !isEmpty(data);
}

globalThis.isEmpty = (data: any): boolean => {
    console.log("data", data)
    return (
        data === null
        || data === undefined
        || (data instanceof Array ? data.length === 0 : false)
        || (typeof data === "string" ? data.length === 0 : false)
    )
        ? true : false;
}