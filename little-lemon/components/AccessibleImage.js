

import * as React from "react";
export default class AccessibleImage extends React.Component {

    state = {
        error : false
    };

    _onImageLoadError = (event) => {
        console.warn(event.nativeEvent.error);
        this.setState({ error : true });
    }

    render() {
        const { source, alt, style } = this.props;
        const { error } = this.state;

        if (error) {
            return (
                <Text>{alt} Source : {source}</Text>
            );
        }

        return (
            <Image 
                accessible
                accessibilityLabel={alt}
                source={source} 
                style={style}
                onError={this._onImageLoadError} />
        );
    }
}