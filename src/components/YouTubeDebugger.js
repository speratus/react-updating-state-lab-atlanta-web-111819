import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(props) {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitrate} className="bitrate">bitrate</button>
                <button onClick={this.handleResolution} className="resolution">resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
