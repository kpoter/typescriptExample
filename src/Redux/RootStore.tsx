import { combineReducers } from "redux";
import { createStateSyncMiddleware } from 'redux-state-sync';
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { Middleware } from '@reduxjs/toolkit';
import ThemaReducer from "./Reducers/ThemaReducer";



// persistConfig 객체를 정의합니다.
// 이 객체는 Redux Persist의 설정을 담고 있으며, 애플리케이션의 persist 상태 관리에 사용됩니다.
const persistConfig = {
    key: "root",
    // 'key'는 저장소에 persist 상태를 저장할 때 사용하는 키입니다.
    // 'root'는 최상위 리듀서를 의미하며, 여기서부터 persist 상태를 관리합니다.

    storage: storage,
    // 'storage'는 persist 상태를 저장할 저장소를 지정합니다.
    // 여기서는 import된 'storage' 객체를 사용하며, 예제에서는 localStorage를 사용하고 있습니다.

    whitelist: ["ThemaReducer"],
    // 'whitelist'는 persist 상태 관리를 원하는 리듀서의 목록입니다.
    // 여기에 포함된 리듀서만 persist 상태에 저장됩니다. 이 예제에서는 'ThemaReducer'만 persist 상태로 관리됩니다.
};

// I_StoreDataType 인터페이스를 정의합니다.
// 이 인터페이스는 스토어의 전체 상태 타입을 정의하며, 여기에는 ThemaReducer의 반환 타입이 포함됩니다.
export interface I_StoreDataType {
    ThemaReducer: ReturnType<typeof ThemaReducer>; // ThemaReducer 리듀서의 반환 타입을 지정합니다.
}

// rootReducer를 정의합니다. 이는 여러 리듀서를 하나로 결합하는 역할을 합니다.
const rootReducer = combineReducers<I_StoreDataType>({ ThemaReducer });

// customMiddleware를 정의합니다. 이 미들웨어는 redux-state-sync를 사용하여 설정됩니다.
// 이를 통해 특정 액션이 발생했을 때 다른 탭이나 창에도 동일한 상태를 반영할 수 있습니다.
const customMiddleware = createStateSyncMiddleware({ broadcastChannelOption: { type: 'localstorage' }, whitelist: ["ThemaReducer"] }) as Middleware;

// persistedReducer를 생성합니다. 이는 persistReducer 함수를 사용하여 rootReducer를 감싸 persist 기능을 추가합니다.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// RootStore를 생성합니다. 이는 configureStore 함수를 사용하여 애플리케이션의 메인 스토어를 설정합니다.
const RootStore = configureStore({
    reducer: persistedReducer, // persist 기능이 추가된 리듀서를 사용합니다.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // serializableCheck를 false로 설정하여 모든 액션 객체가 직렬화 가능한지의 여부를 검사하지 않도록 합니다.
        }).concat(customMiddleware), // 기본 미들웨어에 customMiddleware를 추가합니다.
});

export default RootStore; // 생성된 RootStore를 export합니다.
export const persistor = persistStore(RootStore); // persistStore 함수를 사용하여 RootStore를 인자로 전달하고, 생성된 persistor를 export합니다.
