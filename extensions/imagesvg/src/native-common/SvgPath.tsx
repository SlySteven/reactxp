/**
* SvgPath.tsx
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform abstraction for
* SVG Path elements.
*/

import React = require('react');
import RNSvg = require('react-native-svg');

import SvgTypes = require('../common/Types');

export class SvgPath extends React.Component<SvgTypes.SvgPathProps, {}> {
    render() {
        return (
            <RNSvg.Path
                fill={ this.props.fillColor || '#fff' }
                strokeWidth={ this.props.strokeWidth }
                strokeOpacity={ this.props.strokeOpacity }
                fillOpacity={ this.props.fillOpacity }
                stroke={ this.props.strokeColor}
                d={ this.props.d }
            />
        );
    }
}

export default SvgPath;
