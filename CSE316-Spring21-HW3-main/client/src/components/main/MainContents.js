import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    return (
        <div className='table ' >
            <TableHeader
                disabled={!props.activeList.id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                sortingItemsCallBack = {props.sortingItemsCallBack}
                clearTransaction = {props.clearTransaction}
                undo={props.undo} redo={props.redo} 
            />
            <TableContents
                key={props.activeList.id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem}
            />
        </div>
    );
};

export default MainContents;