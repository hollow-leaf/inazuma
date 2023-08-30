import { providerTableItemType } from "../type";

function Map_item(props: providerTableItemType){
    return (
        <tr key={props.result.toString()}>
            <td>{props.name.toString()}</td>
            <td>{props.provider.toString()}</td>
            <td>{props.result.toString()}</td>
        </tr>
    )
}

export default Map_item;