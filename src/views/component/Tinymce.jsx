import React from 'react'
import TinyMCE from 'react-tinymce';
import plugins from './plugins'
export default class TinymceComponent extends React.Component {
    handleEditorChange(e) {
        console.log(e.target.getContent());
      }
    render() {
        console.log(plugins)
        return (
            <div>
                <TinyMCE
                    content="<p>This is the initial content of the editor</p>"
                    config={{
                        plugins: plugins,
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                    }}
                    onChange={this.handleEditorChange}
                />
            </div>
        );
    }
}

