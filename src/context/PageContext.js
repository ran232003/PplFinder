import { createContext } from "react";

const PageContext = createContext({
    pageNum:0,
    handleChangePage:()=>{},
    });

export default PageContext;