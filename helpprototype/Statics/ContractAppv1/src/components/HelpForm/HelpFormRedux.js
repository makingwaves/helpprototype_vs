import find from 'lodash/find';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {reduxForm} from 'redux-form';
import { FieldRenderer } from './../HelpForm/FieldRenderer/FieldRenderer';

class HelpFormRedux extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    currentForm: PropTypes.object.isRequired,
    gridSize: PropTypes.string.isRequired,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  //componentDidMount() {
  //  const dispatch = this.props.dispatch;
  //  const elementId = this.props.elementId;
  //  const sectionHeader = this.props.sectionHeader;
  //  const pageHeaderObject = {
  //    pageHeaderId: this.props.elementId,
  //    pageHeaderTitle: sectionHeader
  //  };
  //  var waypoint = new Waypoint({
  //    element: document.getElementById(this.props.elementId),
  //    handler: function(direction) {
  //      console.log(direction);
  //      var test = dispatch(changePageHeader(pageHeaderObject));
  //      console.log(test.value.pageHeaderTitle);
  //    },
  //    offset: '192px'
  //  });
  //  //new Waypoint.Inview({
  //  //  element: document.getElementById(this.props.elementId),
  //  //  enter: function(direction) {
  //  //    console.log('Enter triggered with direction ' + elementId + ':' + direction)
  //  //  },
  //  //  entered: function(direction) {
  //  //    console.log('Entered triggered with direction ' + elementId + ':' + direction)
  //  //  },
  //  //  exit: function(direction) {
  //  //    console.log('Exit triggered with direction ' + elementId + ':' + direction)
  //  //  },
  //  //  exited: function(direction) {
  //  //    console.log('Exited triggered with direction ' + elementId + ':' + direction)
  //  //  }
  //  //})
  //}

  render() {
    const { fields, handleSubmit, currentForm, gridSize } = this.props;
    const gridClass = classNames('Grid-cell', gridSize);
    return (
      <div className={ gridClass }>
        <form onSubmit={ handleSubmit }>
          {Object.keys(fields).map(name => {
            const fieldObject = find(currentForm.fields, (fieldObject) => fieldObject.id === name);
            const field = fields[name];
            return (
              <FieldRenderer key={ name + "_component" } field={ field } fieldDetails={ fieldObject } />
            )
          })}
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'formData', destroyOnUnmount: false })(HelpFormRedux);
