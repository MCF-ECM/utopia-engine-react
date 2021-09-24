import * as actionTypes from './actionTypes';


export const changedTable = (changed) => {
   return {
       type: actionTypes.CHANGED_TABLE,
       changed: changed,
   }
};

export const updateTable = (name, table) => {
    return {
        type: actionTypes.UPDATE_TABLE,
        name: name,
        table: table,
    };
};
