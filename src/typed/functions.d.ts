export {}

// 함수 타입 지정
declare global{
    type typeOfString = "undefined"|"symbol"|"string"|"object"|"number"|"function"|"boolean"|"bigint"
    function toCamelCase(data: string):string;
    function isEmpty(data: any):boolean;
    function isNotEmpty(data: any):boolean;
}