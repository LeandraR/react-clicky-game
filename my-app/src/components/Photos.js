import React from "react";

class Photos extends React.Component {
    render(props){
        const photo = this.props.photo;
    return (
        <div className="photo-div" >
            {photo.map(photos => (
              <img className="dog-image"
                src={photos.image}
                key={photos.id}
                id={photos.id}
                alt={photos.alt}
                onClick={() => this.props.check(photos.id)}
              />))}
        </div>
        )
    }
}
export default Photos;