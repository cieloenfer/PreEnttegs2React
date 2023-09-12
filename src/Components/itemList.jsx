import { Item } from "..Components/Item"

export const ItemList = ({data}) => {

    return (
        <div className="item-list">
            {data.map(item => 
                <Item key={item.id} data={item} />
            )}
        </div>
    )
}