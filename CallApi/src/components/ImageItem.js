function ImageItem({key,props}) {
    return ( <div >
        <img className="imageItem" src={props.urls.small} alt={props.alt_description} />
    </div> );
}

export default ImageItem;